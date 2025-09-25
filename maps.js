(function (Scratch) {
  'use strict'
  if (!Scratch.extensions.unsandboxed) throw new Error('Unsandboxed required')

  const ALL_MAPS = new Set()

  class MapType {
    constructor(initial = []) {
      this.map = new Map(initial)
      ALL_MAPS.add(this)
    }

    toString() {
      return '[Map ' + (this.map?.size || 0) + ']'
    }

    toReporterContent() {
      const span = document.createElement('span')
      span.style.color = '#d4a017'
      span.innerText = 'Map(' + (this.map?.size || 0) + ')'
      return span
    }

    destroy() {
      this.map?.clear()
      this.map = null
      ALL_MAPS.delete(this)
    }
  }

  class MapsExtension {
    getInfo() {
      return {
        id: 'mapsExtension',
        name: 'Maps',
        color1: '#d4a017',
        color2: '#b48c0f',
        blocks: [
          {
            opcode: 'createMap',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            text: 'new map',
            disableMonitor: true
          },
          {
            opcode: 'setInMap',
            blockType: Scratch.BlockType.COMMAND,
            text: 'map [MAP] set key [KEY] to [VALUE]',
            arguments: {
              MAP: { exemptFromNormalization: true, shape: Scratch.BlockShape.SCRAPPED },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'key' },
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: 'value' }
            }
          },
          {
            opcode: 'getFromMap',
            blockType: Scratch.BlockType.REPORTER,
            text: 'map [MAP] get key [KEY]',
            arguments: {
              MAP: { exemptFromNormalization: true, shape: Scratch.BlockShape.SCRAPPED },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'key' }
            }
          },
          {
            opcode: 'hasInMap',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'map [MAP] has key [KEY]?',
            arguments: {
              MAP: { exemptFromNormalization: true, shape: Scratch.BlockShape.SCRAPPED },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'key' }
            }
          },
          {
            opcode: 'deleteFromMap',
            blockType: Scratch.BlockType.COMMAND,
            text: 'delete key [KEY] from map [MAP]',
            arguments: {
              MAP: { exemptFromNormalization: true, shape: Scratch.BlockShape.SCRAPPED },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'key' }
            }
          },
          {
            opcode: 'deleteMap',
            blockType: Scratch.BlockType.COMMAND,
            text: 'delete map [MAP]',
            arguments: {
              MAP: { exemptFromNormalization: true, shape: Scratch.BlockShape.SCRAPPED }
            }
          },
          {
            opcode: 'mapSize',
            blockType: Scratch.BlockType.REPORTER,
            text: 'size of map [MAP]',
            arguments: {
              MAP: { exemptFromNormalization: true, shape: Scratch.BlockShape.SCRAPPED }
            }
          },
          {
            opcode: 'mapAsString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get map [MAP] as string',
            arguments: {
              MAP: { exemptFromNormalization: true, shape: Scratch.BlockShape.SCRAPPED }
            }
          }
        ]
      }
    }

    createMap() {
      return new MapType()
    }

    setInMap({ MAP, KEY, VALUE }) {
      if (MAP instanceof MapType && MAP.map) {
        MAP.map.set(KEY, VALUE)
      }
    }

    getFromMap({ MAP, KEY }) {
      if (MAP instanceof MapType && MAP.map) {
        return MAP.map.get(KEY) ?? ''
      }
      return ''
    }

    hasInMap({ MAP, KEY }) {
      return MAP instanceof MapType && MAP.map ? MAP.map.has(KEY) : false
    }

    deleteFromMap({ MAP, KEY }) {
      if (MAP instanceof MapType && MAP.map) {
        MAP.map.delete(KEY)
      }
    }

    deleteMap({ MAP }) {
      if (MAP instanceof MapType) {
        MAP.destroy()
      }
    }

    mapSize({ MAP }) {
      if (MAP instanceof MapType && MAP.map) {
        return MAP.map.size
      }
      return 0
    }

    mapAsString({ MAP }) {
      if (MAP instanceof MapType && MAP.map) {
        return JSON.stringify(Object.fromEntries(MAP.map))
      }
      return '{}'
    }
  }

  Scratch.extensions.register(new MapsExtension())
})(Scratch)
