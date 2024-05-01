console.log("Hello, World!");

const A = 13;
console.log(A.toString(2));

function toBinary (value) {
    if (!Number.isSafeInteger(value)) {
      throw new TypeError('value must be a safe integer');
    }
  
    const negative = value < 0;
    const twosComplement = negative ? Number.MAX_SAFE_INTEGER + value + 1 : value;
    const signExtend = negative ? '1' : '0';
  
    return twosComplement.toString(2).padStart(53, '0').padStart(64, signExtend);
  }
  
  function format (value) {
    console.log(value.toString().padStart(64));
    console.log(value.toString(2).padStart(64));
    console.log(toBinary(value));
  }
  
  format(8);
  format(-8);
  format(2**33-1);
  format(-(2**33-1));
  format(2**53-1);
  format(-(2**53-1));
  format(2**52);
  format(-(2**52));
  format(2**52+1);
  format(-(2**52+1));