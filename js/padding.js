function padSHA(m) {
    let m16 = new Uint16Array(m.length);
    for (let i = 0; i < m.length; i++) {
        m16[i] = m.codePointAt(i);
    };

    console.log("message digits: ", m.length);
    let messageSize = BigInt(m.length);

    let blockChars = 512 / 16;
    let lastChar = m16.length
    let block = -1;
    let word = 0;
    let Blocks = [];
    for (char = 0; char < lastChar; char++) {
        if (char % blockChars == 0) {
            Blocks.push(new Uint16Array(blockChars));
            block++;
            word = 0;
        }
        Blocks[block][word] = m16[char];
        word++;
    };




    //add padding to last element
    let firstPiece = 2 ** 15; // '1000000000000000' 1 followed by 15 zeroes
    let zeroes = 0;         // '0000000000000000'  16 zeroes
    let maxpos = (512 - 64) / 16;

    //console.log(word, block);

    if (word < maxpos) {
        Blocks[block][word] = firstPiece;
        word++;
        for (let i = word; i < maxpos; i++) {
            Blocks[block][word] = zeroes;
            word++;
            //console.log(i, word, block);
        };
    } else {
        //console.log("TÁ NO ELSE!");
        Blocks[block][word] = firstPiece;
        word++;
        for (let i = word; i < blockChars; i++) {
            Blocks[block][word] = zeroes;
            word++;
        };
        Blocks.push(new Uint16Array(blockChars));
        block++;
        word = 0;
        for (let i = 0; i < maxpos; i++) {
            Blocks[block][word] = zeroes;
            word++;
        };

    };

    for (let i = 0; i < 4; i++) {
        let mWord = messageSize >> BigInt((3 - i) * 16);
        Blocks[block][word] = Number(mWord);
        word++;
    };


    //console.log(Blocks);

    let Block32 = [];

    for (let j = 0; j < Blocks.length; j++) {
        Block32.push(new Uint32Array(Blocks[j].length / 2));
        // console.log("pushed");
        for (let i = 0; i < Blocks[j].length / 2; i++) {
            Block32[j][i] = (Blocks[j][2 * i] << 16) + (Blocks[j][2 * i + 1]);
            //console.log(Blocks[j].length, i,i+1);
        };
    };
    return Block32;
};

function unpad(Blocks) {
    let text = "";
    for (block of Blocks) {
        for (word of block) {
            if (word == 2 ** 31) {
                //console.log("inicio do padding");    
                return text;
            };
            //console.log(word);
            const p1 = String.fromCodePoint(word >> 16 & 0xFFFF);
            //console.log(p1);
            const p2 = String.fromCodePoint(word & 0xFFFF);
            text += p1 + p2;
        };
    };
    return text;
};

const message = "hello world lets go to block 2 or more with this string blablalbalblabaaaaaaaaaaaaaaaaaaaaaa";

const messagetopad = bigBook;
const b = padSHA(messagetopad);
//console.log(b[b.length - 1]);
const l = unpad(b);
console.log("mensagem igual após descompressão do padding? ", l == messagetopad);