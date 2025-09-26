(function(Scratch) {
    class BigIntType {
        constructor(value) {
            this.value = BigInt(value);
        }

        toString() {
            return this.value.toString();
        }

        toReporterContent() {
            const span = document.createElement('span');
            span.style.fontWeight = 'bold';
            span.style.color = '#1a73e8';
            span.innerText = this.value.toString();
            return span;
        }

        toBigInt() {
            return this.value;
        }
    }

    class BigIntExtension {
        getInfo() {
            return {
                id: 'conibigint',
                name: 'BigInts',
                color1: '#1a73e8',
                color2: '#174ea6',
                color3: '#0b1f5c',
                blocks: [
                    {
                        opcode: 'add',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: Scratch.BlockShape.BUMPED,
                        text: '[A] + [B]',
                        arguments: {
                            A: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 0 },
                            B: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 0 }
                        }
                    },
                    {
                        opcode: 'sub',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: Scratch.BlockShape.BUMPED,
                        text: '[A] - [B]',
                        arguments: {
                            A: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 0 },
                            B: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 0 }
                        }
                    },
                    {
                        opcode: 'mul',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: Scratch.BlockShape.BUMPED,
                        text: '[A] × [B]',
                        arguments: {
                            A: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 1 },
                            B: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 1 }
                        }
                    },
                    {
                        opcode: 'pow',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: Scratch.BlockShape.BUMPED,
                        text: '[A] ^ [B]',
                        arguments: {
                            A: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 1 },
                            B: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 1 }
                        }
                    },
                    {
                        opcode: 'neg',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: Scratch.BlockShape.BUMPED,
                        text: '-[A]',
                        arguments: {
                            A: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 0 }
                        }
                    },
                    {
                        opcode: 'createBigInt',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: Scratch.BlockShape.BUMPED,
                        text: 'BigInt[A]',
                        arguments: {
                            A: { type: Scratch.ArgumentType.NUMBER, shape: Scratch.BlockShape.BUMPED, defaultValue: 0 }
                        }
                    },
                    {
                        opcode: 'eq',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[A] = [B]',
                        arguments: {
                            A: { type: 'BigInt', shape: Scratch.BlockShape.BUMPED, defaultValue: '0' },
                            B: { type: 'BigInt', shape: Scratch.BlockShape.BUMPED, defaultValue: '0' }
                        }
                    },
                    {
                        opcode: 'lt',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[A] < [B]',
                        arguments: {
                            A: { type: 'BigInt', shape: Scratch.BlockShape.BUMPED, defaultValue: '0' },
                            B: { type: 'BigInt', shape: Scratch.BlockShape.BUMPED, defaultValue: '0' }
                        }
                    },
                    {
                        opcode: 'gt',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[A] > [B]',
                        arguments: {
                            A: { type: 'BigInt', shape: Scratch.BlockShape.BUMPED, defaultValue: '0' },
                            B: { type: 'BigInt', shape: Scratch.BlockShape.BUMPED, defaultValue: '0' }
                        }
                    }
                ]
            }
        }

        ensureBigInt(val) {
            return val instanceof BigIntType ? val : new BigIntType(val !== undefined && val !== null ? val : 0n);
        }


        add({ A, B }) { return new BigIntType(BigInt(A) + BigInt(B)); }
        sub({ A, B }) { return new BigIntType(BigInt(A) - BigInt(B)); }
        mul({ A, B }) { return new BigIntType(BigInt(A) * BigInt(B)); }
        pow({ A, B }) { return new BigIntType(BigInt(A) ** BigInt(B)); }
        neg({ A }) { return new BigIntType(-BigInt(A)); }
        createBigInt({ A }) { return new BigIntType(A); }

        eq({ A, B }) { return this.ensureBigInt(A).toBigInt() === this.ensureBigInt(B).toBigInt(); }
        lt({ A, B }) { return this.ensureBigInt(A).toBigInt() < this.ensureBigInt(B).toBigInt(); }
        gt({ A, B }) { return this.ensureBigInt(A).toBigInt() > this.ensureBigInt(B).toBigInt(); }
    }

    Scratch.extensions.register(new BigIntExtension());
})(Scratch);
