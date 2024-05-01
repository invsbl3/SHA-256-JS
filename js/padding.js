function isASCII(message) {
    let isASCII = true;
    for (char of message) {
        if (char.codePointAt(0) >= 2 ** 8) {
            console.log("char is not in ASCII: ", char, " ", char.codePointAt(0));
            isASCII = false;
        };
    };
    return isASCII;
};
function message8bits(stringMessage) {
    if (!isASCII(stringMessage)) {
        return new Uint8Array(0);
    };
    let Arr = new Uint8Array(stringMessage.length);
    for (char = 0; char < stringMessage.length; char++) {
        Arr[char] = stringMessage.codePointAt(char);
    };
    return Arr;
};
function blockingMessageASCII(bitsMessage) {
    const blockBits = 512;
    let Blocks = [];
    //let numberOfBlocks = Math.floor(bitsMessage.length / blockBits) + 1;

    let actualBlock = -1;
    let actualPos = 0;
    for (char = 0; char < bitsMessage.length; char++) {
        if (char % blockBits == 0) {
            Blocks.push(new Uint8Array(512));
            actualBlock++;
            actualPos = 0;
        };
        Blocks[actualBlock][actualPos] = bitsMessage[char];
        actualPos++;
    };
    return Blocks;
};
function padASCII(message) {
    return blockingMessageASCII(message8bits(message));
};
function message16bits(message) {
    let Arr = new Uint16Array(message.length);
    for (char = 0; char < message.length; char++) {
        Arr[char] = message.codePointAt(char);
    };
    return Arr;
};
function padUTF16(stringMessage) {
    if (typeof (stringMessage) != "string") {
        console.log("message is not a string, is a :", typeof (stringMessage));
    }
    let message16 = message16bits(stringMessage);
    console.log(message16.length);
    const blockBits = 512;
    let Blocks = [];
    //let numberOfBlocks = Math.floor(bitsMessage.length / blockBits) + 1;

    let actualBlock = -1;
    let actualPos = 0;
    for (char = 0; char < message16.length; char++) {
        if (char % blockBits == 0) {
            Blocks.push(new Uint16Array(512));
            actualBlock++;
            actualPos = 0;
        };
        Blocks[actualBlock][actualPos] = message16[char];
        actualPos++;
    };

    // TO DO:
    // CONTINUE THE PADDING PROCCESS, THE MESSAGE IS NOT CORRUPTED AND THE LAST
    // BLOCK IS A 512-BIT FILLED WITH "0" ('\x00') AT THE END.
    return Blocks;
};
function unpadUTF16(paddedMessage) {
    let unpad = "";
    for (block of paddedMessage) {
        for (char16bit of block) {
            unpad+=String.fromCodePoint(char16bit);
        }
    }
    return unpad;
};