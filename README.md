# SHA-256 in JS
 
Check the original [NIST Documentation](https://csrc.nist.gov/pubs/fips/180-4/upd1/final) about SHS.

Check how to learn **M**ark**D**own (to make the famous README.md) [here](https://www.markdownguide.org/extended-syntax/)

Test your .md files before pushing [here](https://markdownlivepreview.com/)

Check out important and often forgotten rules about JS Objects [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types) and [here](https://www.w3schools.com/js/js_object_definition.asp):

-  focus on `const`, `let` and `var` differences
- how creating a copy of an object **really** works, and how to handle it





## JS Bitwise Logical Operators:

| LOGICAL OPERATOR  | JS Symbol |
| ------------- |:-------------:|
| AND | &             |
| OR  | \|            |
| XOR | ^             |
| NOT | ~             |
| LEFT SHIFT | <<             |
| RIGHT SHIFT | >>             |


#### LEFT SHIFT  <<
|3-LEFT SHIFT in binary number `(01101101)`|`(01101101) << 3`|
| :------- | ------: |
|1. you have a fixed amount of digits ( 8-digits in the next examples )|`(01101101)`|
|2. zeroes are added on the top right|`(01101101)000`|
|3. push the old digits to the right|`011(01101000)`|
|4. right-most digits are basically lost|`(01101000)`|
|5. example:|
    ```
    (01101101) << 3 == (01101000)
    (01101101)000 -> 011(01101000)
    ```
|

#### RIGHT SHIFT >>
1. same thing as LEFT SHIFT, but opposite sides.
2. example:
   ```
   (01011011) >> 2 == (00010110)
   
   00(01011011) -> (00010110)11
   ```

## JS Binary Operations:
In JS



## JS important memory stuff:
In JS, creating a new `Object` with `=` turns out to only create a new pointer to the same memory place...
In JS, everything almost is an `Object`.


This means the `new variable` is the same as the
`old variable`, and if you change one of them, the
other **is going to change**.

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


## Extra

I'm doing this `Documentation` to learn a bit more of `.md` and `bitwise operations` in JS.

I think that good Documentation helps people trying to learn,

And I'm having `a lot of trouble` that could be **easily resolved** with
Good documentation...

... And that's why I'm going to focus on let at least a **readable one** in my little projects **:D**



## Implementation

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