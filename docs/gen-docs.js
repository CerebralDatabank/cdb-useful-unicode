const fs = require("fs").promises;

async function getName(codepoint) {
  const html = await fetch(`https://www.fileformat.info/info/unicode/char/${codepoint.toLowerCase()}/index.htm`).then(res => res.text());
  return html.match(/Unicode Character '(.+)' \(U\+/)[1];
}

async function main() {
  let str = await fs.readFile("../cdb-useful-unicode.ahk", "utf-8");
  str = str.replace(/; Useful.+ \* \?\r?\n/s, "");
  const res = [];
  let md = `# Full Documentation\n\nThis documentation is automatically generated by \`gen-docs.js\`.\n\n| Name | Codepoint | Unicode Name |\n| --- | --- | --- |\n`;

  for (const line of str.split("\n")) {
    const match = line.match(/::`;`;(.+)`;::{U\+(.+)}/);
    if (match) {
      const name = match[1];
      const codepoint = match[2];
      const uniName = await getName(codepoint);
      res.push([name, codepoint, uniName]);
      md += `| ${name} | U+${codepoint} | ${uniName} |\n`;
      console.log(`Processed: ${name} -> U+${codepoint} ${uniName}`);
    }
    // else {
    //   const match2 = line.match(/; (.+)/);
    //   if (match2) {
    //     const comment = match2[1];
    //     md += `| *${comment.replace(/\*/g, "\\*")}* |||`;
    //     console.log(`Added comment: ${comment}`);
    //   }
    // }
  }

  console.log("Writing file...");
  await fs.writeFile("docs.md", md);
  console.log("Done");
}

main();