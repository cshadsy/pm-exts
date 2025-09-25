(function (Scratch) {
  'use strict'

  if (!Scratch.extensions.unsandboxed) throw new Error('heyy bucko, this needa be unsandbocks')

  const MAPS = new Map()
  let nextId = 1

  class MapsExtension {
    getInfo() {
      return {
        id: 'conimaps',
        name: 'Maps',
        color1: '#D4A017',
        color2: '#B48C0F',
        blocks: [
          {
            opcode: 'createMap',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            disableMonitor: true,
            text: 'new map'
          },
          {
            opcode: 'setInMap',
            blockType: Scratch.BlockType.COMMAND,
            text: 'map [MAP] set key [KEY] to [VALUE]',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'foo' },
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: 'bar' }
            }
          },
          {
            opcode: 'getFromMap',
            blockType: Scratch.BlockType.REPORTER,
            text: 'map [MAP] get key [KEY]',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'foo' }
            }
          },
          {
            opcode: 'hasInMap',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'map [MAP] has key [KEY]?',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'foo' }
            }
          },
          {
            opcode: 'deleteFromMap',
            blockType: Scratch.BlockType.COMMAND,
            text: 'map [MAP] delete key [KEY]',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'foo' }
            }
          },
          {
            opcode: 'sizeOfMap',
            blockType: Scratch.BlockType.REPORTER,
            text: 'size of map [MAP]',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED }
            }
          },
          {
            opcode: 'mapToString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'map [MAP] as string',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED }
            }
          },
          {
            opcode: 'keysOfMap',
            blockType: Scratch.BlockType.REPORTER,
            text: 'keys of map [MAP]',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED }
            }
          },
          {
            opcode: 'valuesOfMap',
            blockType: Scratch.BlockType.REPORTER,
            text: 'values of map [MAP]',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED }
            }
          },
          {
            opcode: 'entriesOfMap',
            blockType: Scratch.BlockType.REPORTER,
            text: 'entries of map [MAP]',
            arguments: {
              MAP: { type: 'map', shape: Scratch.BlockShape.SCRAPPED }
            }
          }
        ]
      }
    }

    createMap() {
      const id = 'map' + nextId++
      MAPS.set(id, new Map())
      return id
    }

    setInMap({MAP, KEY, VALUE}) {
      const m = MAPS.get(MAP)
      if (m) m.set(KEY, VALUE)
    }

    getFromMap({MAP, KEY}) {
      const m = MAPS.get(MAP)
      return m ? m.get(KEY) ?? '' : ''
    }

    hasInMap({MAP, KEY}) {
      const m = MAPS.get(MAP)
      return m ? m.has(KEY) : false
    }

    deleteFromMap({MAP, KEY}) {
      const m = MAPS.get(MAP)
      if (m) m.delete(KEY)
    }

    sizeOfMap({MAP}) {
      const m = MAPS.get(MAP)
      return m ? m.size : 0
    }

    mapToString({MAP}) {
      const m = MAPS.get(MAP)
      return m ? JSON.stringify(Object.fromEntries(m)) : ''
    }

    keysOfMap({MAP}) {
      const m = MAPS.get(MAP)
      return m ? Array.from(m.keys()) : []
    }

    valuesOfMap({MAP}) {
      const m = MAPS.get(MAP)
      return m ? Array.from(m.values()) : []
    }

    entriesOfMap({MAP}) {
      const m = MAPS.get(MAP)
      return m ? Array.from(m.entries()) : []
    }
  }

  Scratch.extensions.register(new MapsExtension())
})(Scratch)
