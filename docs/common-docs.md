# Common Shortcuts

> [!NOTE]
> This is an initial draft and will be added to later.

This is a list of commonly-used shortcuts that are loosely "sorted" in order of estimated popularity. See [`docs/docs.md`](docs.md) for the full documentation. (This document contains additional notes, while the full documentation is just a list of all shortcuts.)

All shortcuts names consist of lowercase letters and only, except for those that have a single parenthesis character (e.g. `;;fw(;`).

Uppercase letters (e.g. `X`) signify something to be replaced.  
Square brackets (e.g. `[a]`) indicate an optional part (either `a` or no `a`).  
A vertical line symbol (e.g. `[a|b]`) indicates a choice (either `a`, `b`, or nothing).  
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

### `;;mdot;`

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

### `;;figsp;`

Inserts the figure space { }.

This is a space that is defined to be equal to the width of one digit. It can be used for better alignment in contexts involving numbers.

Example:  
With normal (non-breaking) spaces:  
1234  567  
85947 385  
23    5869  
With figure spaces (keeping one normal space before second column):  
1234  567  
85947 385  
23    5869

## Mathematical Symbols

### `;;lte;`

Inserts the less than or equal to symbol {≤}.

### `;;gte;`

Inserts the greater than or equal to symbol {≥}.

### `;;neq;`

Inserts the not equal to symbol {≠}.

### `;;aeq;`

Inserts the approximately equal to symbol {≈}.

### `;;sqrt;`

Inserts the square root symbol {√}.

### `;;cbrt;`

Inserts the cube root symbol {∛}.

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

Note that depending on font support, the `n` or `i` characters may not be properly aligned with the others.

Examples:  
`;;sup2;` → ²  
`;;sub5;` → ₅  
`;;sup+;` → ⁺  
`;;sub);` → ₎

### `;;dotop;`

Inserts the dot operator sign {⋅}.  
Note that this is commonly used for general multiplication as well as vector dot products.

### `;;(l|r)[d]angl;`

Inserts the angle bracket symbols {⟨} {⟩}.

`l`/`r` specifies left/right.

Specifying `d` inserts the double angle brackets {⟪} {⟫}.

Note that single angle brackets are commonly used to distinguish vectors from general tuples (e.g. ⟨3, 2⟩) or to denote the inner product of two vectors (e.g. ⟨𝒖, 𝒗⟩).

### `;;sum;`

Inserts the summation symbol {∑}.

### `;;prod;`

Inserts the product symbol {∏}.

### `;;(l|r)floor;`

Inserts the floor symbols {⌊} {⌋}.

`l`/`r` specifies left/right.

### `;;(l|r)ceil;`

Inserts the floor symbols {⌈} {⌉}.

`l`/`r` specifies left/right.

### `;;[d|t]prime;`

Inserts the prime symbol {′}.

Specifying `d` or `t` inserts the double {″} or triple {‴} prime symbols.

### `;;intg;`

Inserts the integral symbol {∫}.

## `;;union;`

Inserts the set union symbol {∪};

## `;;isec;`

Inserts the set intersection symbol {∩};

## `;;and;`

Inserts the Boolean AND symbol {∧};

## `;;or;`

Inserts the Boolean OR symbol {∨};

## `;;xor;`

Inserts the Boolean XOR symbol {⊻};

### `;;u(l|r)brc;`

Inserts part of a two-line left brace (one of {⎰} {⎱}).

For example, `;;ulbrc;` can be used on the first line and `;;urbrc;` on the second to get the following result:  
Let the piecewise function 𝑓(𝑥) be:  
⎰ 𝑥² if 𝑥 ≥ 0  
⎱ −𝑥 if 𝑥 < 0

### `;;thrfr;`

Inserts the therefore symbol {∴}.

### `;;bcs;`

Inserts the because symbol {∵}.

### `;;ds(n|z|q|r|c);`

Inserts one of the double-struck letters {ℕ} {ℤ} {ℚ} {ℝ} {ℂ}.

### `;;[n]elemof;`

Inserts the element of symbol {∈}.

Specifying `n` inserts the not element of symbol {∉}.

### `;;[n]s(b|p)set[e];`

Inserts the subset or superset symbol.

Specifying `b`, `p` inserts {⊂} (subset), {⊃} (superset).

Specifying `n` inserts the not subset/superset symbol (e.g. `;;nsbset;` → ⊄)

Specifying `e` inserts the subset/superset or equals variant; for example:  
`;;sbsete;` → ⊆  
`;;nspsete;` → ⊉

#### `;;forall;`

Inserts the for all symbol {∀}.

#### `;;th[n]ext;`

Inserts the there exists symbol {∃}.

Specifying `n` inserts the there does not exist symbol {∄}.

## Relational Algebra

## `;;natjoin;`

Inserts the natural join symbol {⨝}.

## `;;lojoin;`

Inserts the left outer join symbol {⟕}.

## `;;rojoin;`

Inserts the right outer join symbol {⟖}.

## `;;fojoin;`

Inserts the full outer join symbol {⟗}.

## `;;lsjoin;`

Inserts the left semijoin symbol {⋉}.

## `;;rsjoin;`

Inserts the right semijoin symbol {⋊}.

## Other Symbols

### `;;para;`

Inserts the pilcrow (paragraph symbol) {¶}.

### `;;sect;`

Inserts the section sign {§}.
