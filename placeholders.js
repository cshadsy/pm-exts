(function(Scratch) {
    'use strict';

    class Placeholders {
        getInfo() {
            return {
                id: 'coniplaces',
                name: 'Placeholders',
                color1: '#7F9933',
                color2: '#A3B600',
                blocks: [
                    {opcode: 'foo', blockType: Scratch.BlockType.REPORTER, text: 'foo'},
                    {opcode: 'bar', blockType: Scratch.BlockType.REPORTER, text: 'bar'},
                    {opcode: 'baz', blockType: Scratch.BlockType.REPORTER, text: 'baz'},
                    {opcode: 'qux', blockType: Scratch.BlockType.REPORTER, text: 'qux'},
                    {opcode: 'quux', blockType: Scratch.BlockType.REPORTER, text: 'quux'},
                    {opcode: 'corge', blockType: Scratch.BlockType.REPORTER, text: 'corge'},
                    {opcode: 'grault', blockType: Scratch.BlockType.REPORTER, text: 'grault'},
                    {opcode: 'garply', blockType: Scratch.BlockType.REPORTER, text: 'garply'},
                    {opcode: 'waldo', blockType: Scratch.BlockType.REPORTER, text: 'waldo'},
                    {opcode: 'fred', blockType: Scratch.BlockType.REPORTER, text: 'fred'},
                    {opcode: 'plugh', blockType: Scratch.BlockType.REPORTER, text: 'plugh'},
                    {opcode: 'xyzzy', blockType: Scratch.BlockType.REPORTER, text: 'xyzzy'},
                    {opcode: 'thud', blockType: Scratch.BlockType.REPORTER, text: 'thud'},
                    {opcode: 'foo1', blockType: Scratch.BlockType.REPORTER, text: 'foo1'},
                    {opcode: 'foo2', blockType: Scratch.BlockType.REPORTER, text: 'foo2'},
                    {opcode: 'foo3', blockType: Scratch.BlockType.REPORTER, text: 'foo3'},
                    {opcode: 'barX', blockType: Scratch.BlockType.REPORTER, text: 'barX'},
                    {opcode: 'barY', blockType: Scratch.BlockType.REPORTER, text: 'barY'},
                    {opcode: 'barZ', blockType: Scratch.BlockType.REPORTER, text: 'barZ'},
                    {opcode: 'foobar', blockType: Scratch.BlockType.REPORTER, text: 'foobar'},
                    {opcode: 'fizz', blockType: Scratch.BlockType.REPORTER, text: 'fizz'},
                    {opcode: 'buzz', blockType: Scratch.BlockType.REPORTER, text: 'buzz'},
                    {opcode: 'ping', blockType: Scratch.BlockType.REPORTER, text: 'ping'},
                    {opcode: 'pong', blockType: Scratch.BlockType.REPORTER, text: 'pong'},
                    {opcode: 'spam', blockType: Scratch.BlockType.REPORTER, text: 'spam'},
                    {opcode: 'eggs', blockType: Scratch.BlockType.REPORTER, text: 'eggs'},
                    {opcode: 'alpha', blockType: Scratch.BlockType.REPORTER, text: 'alpha'},
                    {opcode: 'beta', blockType: Scratch.BlockType.REPORTER, text: 'beta'},
                    {opcode: 'item', blockType: Scratch.BlockType.REPORTER, text: 'item'},
                    {opcode: 'value', blockType: Scratch.BlockType.REPORTER, text: 'value'},
                    {opcode: 'key', blockType: Scratch.BlockType.REPORTER, text: 'key'},
                    {opcode: 'thing', blockType: Scratch.BlockType.REPORTER, text: 'thing'},
                    {opcode: 'stuff', blockType: Scratch.BlockType.REPORTER, text: 'stuff'},
                    {opcode: 'object', blockType: Scratch.BlockType.REPORTER, text: 'object'},
                    {opcode: 'data1', blockType: Scratch.BlockType.REPORTER, text: 'data1'},
                    {opcode: 'data2', blockType: Scratch.BlockType.REPORTER, text: 'data2'},
                    {opcode: 'norf', blockType: Scratch.BlockType.REPORTER, text: 'norf'},
                    {opcode: 'blip', blockType: Scratch.BlockType.REPORTER, text: 'blip'},
                    {opcode: 'florp', blockType: Scratch.BlockType.REPORTER, text: 'florp'},
                    {opcode: 'glorp', blockType: Scratch.BlockType.REPORTER, text: 'glorp'},
                    {opcode: 'zot', blockType: Scratch.BlockType.REPORTER, text: 'zot'},
                    {opcode: 'wibble', blockType: Scratch.BlockType.REPORTER, text: 'wibble'},
                    {opcode: 'wobble', blockType: Scratch.BlockType.REPORTER, text: 'wobble'},
                    {opcode: 'twizzle', blockType: Scratch.BlockType.REPORTER, text: 'twizzle'},
                    {opcode: 'snarf', blockType: Scratch.BlockType.REPORTER, text: 'snarf'},
                    {opcode: 'blarf', blockType: Scratch.BlockType.REPORTER, text: 'blarf'},
                    {opcode: 'plop', blockType: Scratch.BlockType.REPORTER, text: 'plop'},
                    {opcode: 'glub', blockType: Scratch.BlockType.REPORTER, text: 'glub'},
                    {opcode: 'mumble', blockType: Scratch.BlockType.REPORTER, text: 'mumble'},
                    {opcode: 'gribble', blockType: Scratch.BlockType.REPORTER, text: 'gribble'},
                    {opcode: 'ello', blockType: Scratch.BlockType.REPORTER, text: 'ello'}
                ]
            };
        }

        foo() { return 'foo'; }
        bar() { return 'bar'; }
        baz() { return 'baz'; }
        qux() { return 'qux'; }
        quux() { return 'quux'; }
        corge() { return 'corge'; }
        grault() { return 'grault'; }
        garply() { return 'garply'; }
        waldo() { return 'waldo'; }
        fred() { return 'fred'; }
        plugh() { return 'plugh'; }
        xyzzy() { return 'xyzzy'; }
        thud() { return 'thud'; }
        foo1() { return 'foo1'; }
        foo2() { return 'foo2'; }
        foo3() { return 'foo3'; }
        barX() { return 'barX'; }
        barY() { return 'barY'; }
        barZ() { return 'barZ'; }
        foobar() { return 'foobar'; }
        fizz() { return 'fizz'; }
        buzz() { return 'buzz'; }
        ping() { return 'ping'; }
        pong() { return 'pong'; }
        spam() { return 'spam'; }
        eggs() { return 'eggs'; }
        alpha() { return 'alpha'; }
        beta() { return 'beta'; }
        item() { return 'item'; }
        value() { return 'value'; }
        key() { return 'key'; }
        thing() { return 'thing'; }
        stuff() { return 'stuff'; }
        object() { return 'object'; }
        data1() { return 'data1'; }
        data2() { return 'data2'; }
        norf() { return 'norf'; }
        blip() { return 'blip'; }
        florp() { return 'florp'; }
        glorp() { return 'glorp'; }
        zot() { return 'zot'; }
        wibble() { return 'wibble'; }
        wobble() { return 'wobble'; }
        twizzle() { return 'twizzle'; }
        snarf() { return 'snarf'; }
        blarf() { return 'blarf'; }
        plop() { return 'plop'; }
        glub() { return 'glub'; }
        mumble() { return 'mumble'; }
        gribble() { return 'gribble'; }
        ello() { return 'ello'; }
    }

    Scratch.extensions.register(new Placeholders());
})(Scratch);
