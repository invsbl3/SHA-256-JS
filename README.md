# SHA-256 in JS
 
Hi **:D** 

This is `over-documented` for the purpose of learning.

If you read this and find something to correct, please, **contact me** about!

Thanks!

## Hash, Salt, Security 
 
### What is a Hash?

`Hashes` are like the `fingerprint` or the `iris-scan` of computer files.

`Hash Algorithms` are something "easy to calculate" (for computers) and super-hard to revert.

In other words, if you have a `hash` of a `message`, it's super-hard to know the original `message`...

... But if you have the `message`, it's easy to calculate the `hash`

We use this algorithms to check if a message was send entirely without loss of information.

A `message` can be anything! Like a `game` or a `film` your computer is downloading.

So we use `Hash Algorithms` to `verify integrity` of big (and small) archives.


Another characterist of good `Hash Algorithms` is that they have almost no `fingerprint`...

... This means that, if you change a tiny letter in some message, the `hash` of this new message is completely different and doesn't have any kind of connection with the `hash` of the original message....

In other words, if you put the message "Hello, World! I'm very happy." in a good `Hash Algorithm`, and the message "Hello, World. I'm very happy. ", their outputs are going to be completely different and unrelated.

So it's **`ULTRA-HARD`** to find a message with same hash and a similar content...

So it's used as a very good `security-check`, also!

That's why, for example, some `Cryptocurrencies' Protocols` use nested sequences of messages with `Hash Algorithms` in their routines...

### Salt

To add extra-security layer for some messages, we use something called `salt`...

`Salts` are just a bunch of random digits added to a message before we use a `Hash Algorithm`...

Maybe the hash of the message `123` is very well known, and some people have it stored in a big table of very-used-hashes...

But the message `123fb8dca38ff25`maybe never have ever been calculated!

So, if a web-site, instead of save your `password` saves the `hash` of your `password + salt`, it can verify easily the hash of what you send...

... But it's harder for an attacker that took the `hash` and the `salt` to try to figure out your `password`...

These simple but genial idea, with some other simple and genial ideas are making the internet environment safer for us to use...

## References

1. Check the original [NIST Documentation](https://csrc.nist.gov/pubs/fips/180-4/upd1/final) about SHS.

2. Check how to learn **M**ark**D**own (to make the famous README.md) [here](https://www.markdownguide.org/extended-syntax/)

3. Test your .md files before pushing [here](https://markdownlivepreview.com/).

   Check out important and often forgotten rules about JS Objects [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types) and [here](https://www.w3schools.com/js/js_object_definition.asp):

   -  focus on `const`, `let` and `var` differences
   - how creating a copy of an object **really** works, and how to handle it


## JS important stuff


### JS BITWISE LOGICAL OPERATORS

| LOGICAL OPERATOR  | JS Symbol |
| ------------- |:-------------:|
| AND | &             |
| OR  | \|            |
| XOR | ^             |
| NOT | ~             |
| LEFT SHIFT | <<             |
| RIGHT SHIFT | >>             |


### LEFT SHIFT  OPERATOR ( << )

Example:

|`3-digits` LEFT SHIFT in binary number `(01101101)`|`(01101101) << 3`|
| :------- | ------: |
  |1. you have a fixed amount of digits ( 8-digits in the next examples )|`(01101101)`|
  |2. zeroes are added on the top right|`(01101101)000`|
  |3. push the old digits to the right|`011(01101000)`|
  |4. right-most digits are basically lost|`(01101000)`|

So it goes like this:
```
       (01101101) << 3
       (01101101)000
    011(01101000)
       (01101000)
```


### RIGHT SHIFT OPERATOR ( >> )
1. same thing as LEFT SHIFT, but opposite sides.
2. example:
```
     (01011011) >> 2
   00(01011011)
     (00010110)11
     (00010110)
```


## JS Common Problems Creating Variables

In JS, creating a new `Object` with `=` turns out to only create a new pointer to the same memory place...

This means the `new variable` is the same as the
`old variable`, and if you change one of them,
the other **is going to change**.

In JS, almost everything is an `Object`, and the **problem** goes as follows:


Example 1:
```
    const A = [1,2,3];
    let   B =  A;
    B.push(5000);
    console.log("     A = ", A);
    console.log(" and B = ", B);
    
```

Example 2:
```
    const C = {name: "John", haveHouse: true};
    let   D =  C;
    D.age = 18;
    console.log("     C = ", C);
    console.log(" and D = ", D);
```

Paste this, push `F12` in Chrome, click in `Console` and see the result by yourself!

Then, digit the code line by line and do some modifications... Learn testing!

Test it creating different types of `Objects`...


If you want to create `a brand new variable` with the same information as `one old other`, a good way to **handle this problem** is:

1. to create a function that has inside the variable you want

2. any time you want a new variable with the same information, but want to change
it alone, you make `new_variable = functionThatThrowsTheInformation();`

3. Example:
```
    const A = [5,6,7];
    // this A is Global outside the function!
    
    function createA(){
        const A = [1,2,3];
        // this A is local inside the
        // function!
        return A;
    };
    
    B = createA(); // therefore, "B = A"...
    B.push(650);
    console.log("A = ", A, " and B = ", B);
```

So, if you put the variable you want inside a function, and take a fresh copy with this function, you won't mess the original variable...

I learned this refreshing the `MAP` variable [here in line 32](https://github.com/invsbl3/pacman/blob/main/js/map.js) of this [Pacman Game](https://github.com/invsbl3/pacman) that you can [!!PLAY HERE!!](https://invsbl3.github.io/pacman/)


This rule doesn't apply only to primitive types, which are:

`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

Press `F12` in Chrome and check it out in the Console!

Example with `string` type:
```
    const T = "some text";
    let X = T;
    X += " some extra text";
    console.log ("T = ", T);
    console.log ("X = ", X);
```

## JS Chars, Strings, Floats

The mode in which these things realy behave in the background matters to this type of work (padding, parsing and modify data in bitwise operations).

- A `float` in JS is a `64-bit`...
- A `string` in JS is in using `chars` in `UTF-16`.


## Char and String Standards

- The `MNIST SHS` paper uses `ASCII` chars. This means that, by default, to get the right
`hash` using the algo's, your message, before `padding` and `parsing` should be checked.

- `ASCII` is a table with the essential chars needed to operate a computer, programming and write in English.
An `ASCII` char has `7-bits`, carrying `2**8 = 128` possible chars.
This System was extended later to `8-bits`. Check it out [here](https://www.ascii-code.com/).
In general, nowadays computers reserve `1byte`=`8bits` for ASCII chars.

- `HTML5` (the base of the internet nowadays) uses `UTF-8` and `UTF-16`.

- each added `bit` turns out to double the possible `chars` in an encoding system...

- `UTF-8` uses `8-bits`, so it describes `256` different [chars](https://net-comber.com/charset.html).

- `UTF-16`, in its way, has <code>2<sup>16</sup> > 65.000 </code> possible characters. It's <code>2<sup>8</sup> = 256</code> times bigger than `UTF-8` and <code>2<sup>9</sup> = 512</code> times bigger than `ASCII`!

- They have characters to render in the screen almost any language in the world!
So, if you just take the binary representation of your String in a Programming Language, you can get a very different binary response than you are looking for to use `SHS Algorithms`.




- `UTF-8` and `UTF-16`is based in `ASCII`, so, if you take a `string` with `chars` encoded in `UTF-16`, this means that, if they're present in the `ASCII` table, they have the same code.

So, in other words, if your `string` in `UTF-16` has only "basic programming and English Chars", you are safe to take their `ASCII` binary representations.



- More information [here](https://www.w3schools.com/charsets/ref_html_ascii.asp) and [here](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

### Some Examples:

JS has a [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) called `.codePointAt` that you can use in any `string Object`.
`.codePointAt` returns a `number`.

Don't use `.charCodeAt()`, it will bring problems with emojis and [surrogate pairs](https://hadrysmateusz.medium.com/how-to-get-all-characters-in-a-string-in-javascript-d1a6ccd052b1).


The method `.toString(base)` can be applied in a `number` and returns a `string` with the representation of this number in another `base` (We use `base-10` in the day-to-day, and `base-2`=`binary` and `base-16`=`hexadecimal` when programming). 

Using this method in the Japanese Hiragana Character `sa`="さ", we check this:

```
"さ".codePointAt(0) = 12373
"さ".CodePointAt(0).toString(2) = '11000001010101'
"さ".CodePointAt(0).toString(2).length = 14
``` 
This means that these Char is using `14 bits` or more to be represented...
Probably, it's an `UTF-8 char` almost at the end of the list!

Press `F12` in Google Chrome and Take this code snipped to check by yourself!

Change the `char` and se the output...

Basically, you can check if any `char` of your `message` to be hashed is using less than `8-bits`...

If this is true, your message in `UTF-8` is equivalent to a message in `ASCII`.



## Implementation Steps

### Preprocessing message M

1. [ ] Ensure the message is initially in  `8-bit ASCII` to check the output

2. [ ] Padding and Parsing, following `5.1.1` and `5.2.1` (for both `SHA-1` and `SHA-256`)
3. [ ] Implement the Rotine Steps in ´6.2.1´ for ´SHA-1´and ´6.2.2´ for ´SHA-256´

### Padding

At the end of the message we should add some stuff.

After that, the message should fit perfectly in block of 512 bits.

1. [ ] Count the number of bits in the message and store it in a `64-bits` variable ( like `messageSize`)

2. [ ] Chunk the message in blocks of `512-bits`

3. [ ] In the last block (that possibly is incomplete, with less than `512-bits`), add `1` at the end of the message, and then various zeroes `0` until only `64-bit` are left to close this last packet with `512-bit`
   
   3.1 If there are `64bits` or less to close the last packet, the `100...0000` stuff is going to end in the next block, and we'll have 2 `512-bits` "last packets", and that's fine.

4. [ ] In this `64-bit` you left blank in the last block, put your `messageSize`

### Parsing

The entire message is called `M`. After padding, each `block` is called <code>B = M<sup>(i)</sup></code> and has `512-bits`. The ~(i)~ is the number of the block in the sequence, starting with `0`!

We are going to divide these blocks in `32-bit` pieces. Each `piece` called <code>P = B<sub>j</sub></code> and has `32-bits`. The ^j^ is the number of the piece in the sequence.

So,  <code>M<sup>(4)</sup><sub>9</sub></code> is the <code>10<sup>th</sup> piece P</code>
in the <code>B<sup>(5)</sup>(5)<sup>th</sup> block</code> of the big message `M` (because we are starting the counts with `0` and not `1`)!






### For SHA-1:

1. [ ] Implement the <code>K<sub>t</sub></code> constants present in [´4.2.1´](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf#page=16)

2. [ ] Implement the <code>Ch(x,y,z)</code>, `Maj(x,y,z)`, `Parity(x,y,z)` <code>ROTR<sup>n</sup>(x)</code>, <code>SHR<sup>n</sup>(x)</code> functions in [`4.1.1`](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf#page=15)

3. [ ] Implement the initial hash values <code>H<sup>(0)</sup><sub>n</sub></code> following [`5.3.1`](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf#page=19)

4. [ ] Follow  [´6.1.2´](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf#page=23) to compute the `hash`
    4.1 Assure that the addition is in modulo <code>2<sup>32</sup></code>


### For SHA-256:

1. [ ] Find the 64 first primes, take their cube-roots and save the first 32 bits of their fractional parts in the <code>K</code> variables, as in [`4.2.2`](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf#page=16))

2. [ ] For SHA-256: Implement the [`4.1.2`](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf#page=15) functions

3. [ ] Find the square-roots of the first eight primes and store them in the initial hash values variables, <code>H<sup>(0)</sup><sub>n</sub></code>, following [`5.3.3`](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf#page=20)

4. [ ] Follow  [´6.2.2´](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf#page=23) to compute the `hash`
    4.1 Assure that the addition is in modulo <code>2<sup>32</sup></code>






## About the Files

### primes.js

For the SHS algo's we need some information with the first prime numbers...
 
- Let's consider `2` as the first prime
- The `next primes` are Natural Numbers that can't be `exactly divided` by any smaller number greater than `1`
- By `exactly divided` I mean that the remainder of the division should be `0`
   - like `3`, that can't be exacly divided by `2`
   - like `5`, that can't be exactly divided by `4`, `3` and `2`
   - `4` can be exatcly divided by `2`, it's `not a prime number`
   - `7` is the next prime, because can't be divided exatcly by `6`, `5`, `4`, `3` and `2`
   
I implemented a function to find the first primes.
Feel free to change it and test anything about it.
As it's in js, you can simply run the code and press `F12` in Chrome, and go to `Console` to check and test...

One way to optimize this function would be, for example:
```
    You know that any even number is not prime, because you can divide it by 2...
    so you can skip the numbers in the format 2*number...
    You can use the same argument for any prime in the prime list, so you cut the space in which you are looking before even test some numbers!
    but JS is not for performance code, and my intent here is to focus on the SHS system implementation, not on Fast Algorithms..
```

## Extra

I'm doing this `Documentation` to learn a bit more of `.md` and `bitwise operations` in JS.

I think that good Documentation helps people trying to learn,

And I'm having `a lot of trouble` that could be **easily resolved** with
Good documentation...

... And that's why I'm going to focus on let at least a **readable one** in my little projects **:D**