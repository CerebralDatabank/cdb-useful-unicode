# Common Shortcuts

> [!NOTE]
> This is an initial draft and will be added to later.

This is a list of commonly-used shortcuts, loosely "sorted" in order of popularity. See [`docs/docs.md`](docs/docs.md) for the full documentation.

All shortcuts names consist of lowercase letters and only, except for those that have a single parenthesis character (e.g. `;;fw(;`).

Uppercase letters (e.g. `X`) signify something to be replaced.  
Square brackets (e.g. `[a]`) indicate an optional part (either `a` or no `a`).  
Parentheses (e.g. `(a|b)`) indicate a required choice (either `a` or `b`).


## Common Symbols

### `;;tm;`

Inserts the trademark symbol {™}.

### `;;reg;`

Inserts the registered trademark symbol {®}.

### `;;copy;`

Inserts the copyright symbol {©}.

### `;;deg;`

Inserts the degree symbol {°}.

### `;;endash;`

Inserts the en dash {–}.  
Commonly used to represent ranges, e.g.:  
We will grab 4–7 apples on Mar 7 8:00–9:30.

### `;;emdash;`

Inserts the em dash {—}.

### `;;Xarr;`

Inserts an arrow symbol.

`X` is one of `u`, `d`, `l`, `r` (up, down, left, right).

### `;;ellip;`

Inserts the horizontal ellipsis {…}.

### `;;bull;`

Inserts the bullet {•}.

### `;;bull;`

Inserts the interpunct (middle/center dot) {·}.

### `;;mns;`

Inserts the minus sign {−}.  
Note that this is different from the hyphen {-} and looks better in a mathematical context (first line uses hyphen, second line uses minus):  
1 + 2 - 3 × (-100)  
1 + 2 − 3 × (−100)

### `;;mult;`

Inserts the multiplication sign {×}.

### `;;div;`

Inserts the division sign {÷}.

### `;;sqrt;`

Inserts the square root (radical) sign {√}.

## Mathematical Symbols

### `;;var[u]X;`

Inserts a mathematical italic serif variable.

`X` is a letter `a`–`z`.  
Specifying `u` inserts the uppercase version.

Examples:  
`;;varx;` → 𝑥  
`;;varuf;` → 𝐹

### `;;mb[i][u]X;`

Inserts a mathematical bold serif variable.  
Note that ISO 80000-2 recommends bold italic for vectors, matrices, and tensors.

Specifying `i` inserts the bold italic serif version.
(See above for meaning of `X` and `u`.)

Examples:  
`;;mbv;` → 𝐯  
`;;mbuf;` → 𝐅  
`;;mbiu;` → 𝒖  
`;;mbiua;` → 𝑨

### `;;su(p|b)X;`

`X` is a one of `0`–`9`, `+`, `-`, `=`, `(`, `)`, `i`, `n`.

Choosing `p` inserts the superscript version and choosing `b` inserts the subscript version.

Examples:  
`;;sup2;` → ²  
`;;sub5;` → ₅  
`;;sup+;` → ⁺  
`;;sub);` → ₎
