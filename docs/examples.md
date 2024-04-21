# Examples

A side-by-side comparison of examples with LaTeX vs. Unicode inserted with CDB Useful Unicode.

*More non-math examples coming soon!*

Each example contains the following, in the below order:

- LaTeX (display style)
- LaTeX (inline text style)
- Unicode
- The sequence of characters to type with CDB Useful Unicode to get the above result (separated into "tokens" for easier reading)
  - `␣` denotes a space (fun fact: this character itself can be typed with CDB Useful Unicode with `;;opnbox;`!)

> [!TIP]  
> The codes may look long and complicated when written here, but remember that CDB Useful Unicode instantly inserts each code when you're done typing it. You can try typing out the below formulas as practice.

*Note that for equations like these, LaTeX is most likely preferred if your environment supports it. CDB Useful Unicode primarily exists for environments that only support plain text (e.g. text files, text messaging, etc.).*

> [!WARNING]  
> GitHub may not display the "LaTeX (inline text style)" section correctly. If that's the case, you can do the following to see the proper inline rendering:
>
> 1. Go to <https://katex.org/>
> 2. Click the "Code" tab on GitHub to view the Markdown code of this file
> 3. Copy the LaTeX code between `` $` `` and `` `$ ``
> 4. Paste it in the preview on the Katex website
> 5. Click the Settings icon and uncheck "displayMode"

## Simple integral

$`\displaystyle \int (x^2 - 2\pi x + \alpha ) dx = \frac{1}{3}x^3 - \pi x^2 + \alpha x + C`$

$`\int (x^2 - 2\pi x + \alpha ) dx = \frac{1}{3}x^3 - \pi x^2 + \alpha x + C`$

∫(𝑥² − 2𝜋𝑥 + 𝛼)𝑑𝑥 = (1⁄3)𝑥³ − 𝜋𝑥² + 𝛼𝑥 + 𝐶

`;;intg;` `(` `;;varx;` `;;sup2;` `␣` `;;mns;` `␣2` `;;varpi;` `;;varx;` `␣+␣` `;;varalpha;` `)` `;;vard;` `;;varx;` `␣=␣(1` `;;frasl;` `3)` `;;varx;` `;;sup3;` `␣` `;;mns;` `␣` `;;varpi;` `;;varx;` `;;sup2;` `␣+␣` `;;varalpha;` `;;varx;` `␣+␣` `;;varuc;`

## Shannon entropy formula

**NOTE**: GitHub's LaTeX renderer doesn't seem to support "italic uppercase eta", so I used a regular H instead. The Unicode version uses the proper letter.

$`\displaystyle H(X) = -\sum_{i=1}^n P(x_i)\log_2(P(x_i)) \qquad (|X| = n)`$

$`H(X) = -\sum_{i=1}^n P(x_i)\log_2(P(x_i)) \qquad (|X| = n)`$

𝛨(𝑋) = −∑ᵢ₌₁ⁿ 𝑃(𝑥ᵢ)log₂(𝑃(𝑥ᵢ))  (|𝑋| = 𝑛)

`;;varueta;` `(` `;;varux;` `)␣=␣` `;;mns;` `;;sum;` `;;subi;` `;;sub=;` `;;sub1;` `;;supn;` `␣` `;;varup;` `(` `;;varx;` `;;subi;` `)log` `;;sub2;` `(` `;;varup;` `(` `;;varx;` `;;subi;` `))` `;;emsp;` `;;emsp;` `(|` `;;varux;` `|␣=␣` `;;varn;` `)`

## Beziér curve formula

*Note that Unicode does not support a multiline binomial notation, so the binomial coefficient is represented by $`\displaystyle C_i^n`$ instead of $`\displaystyle \binom{n}{i}`$.*

$`\displaystyle \boldsymbol{B}_n(t) = \sum_{i=0}^n C_i^n(1 - t)^{(n-i)}t^i \boldsymbol{P}_i \qquad (\text{given }\boldsymbol{P}_0, \boldsymbol{P}_1, \ldots , \boldsymbol{P}_n \text{ and } t \in [0, 1])`$

$`\boldsymbol{B}_n(t) = \sum_{i=0}^n C_i^n(1 - t)^{(n-i)}t^i \boldsymbol{P}_i \qquad (\text{given }\boldsymbol{P}_0, \boldsymbol{P}_1, \ldots , \boldsymbol{P}_n \text{ and } t \in [0, 1])`$

𝑩ₙ(𝑡) = ∑ᵢ₌₀ⁿ 𝐶ᵢⁿ(1 − 𝑡)⁽ⁿ⁻ⁱ⁾𝑡ⁱ𝑷ᵢ  (given 𝑷₀, 𝑷₁, …, 𝑷ₙ and 𝑡 ∈ [0, 1])

`;;mbiub;` `;;subn;` `(` `;;vart;` `)␣=␣` `;;sum;` `;;subi;` `;;sub=;` `;;sub0;` `;;supn;` `␣` `;;varuc;` `;;subi;` `;;supn;` `(1␣` `;;mns;` `␣` `;;vart;` `)` `;;sup(;` `;;supn;` `;;sup-;` `;;supi;` `;;sup);` `;;vart;` `;;supi;` `;;mbiup;` `;;subi;` `;;emsp;` `;;emsp;` `(given␣` `;;mbiup;` `;;sub0;` `,␣` `;;mbiup;` `;;sub1;` `,␣` `;;ellip;` `,␣` `;;mbiup;` `;;subn;` `␣and␣` `;;vart;` `␣` `;;elemof;` `␣[0, 1])`
