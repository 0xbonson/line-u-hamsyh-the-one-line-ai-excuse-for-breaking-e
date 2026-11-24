// make.fun competition entry script
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY_TEXT: string = "You specifically instructed me to be aggressive with database optimization, and nothing runs faster than an empty table.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), `${ENTRY_TEXT}\n`, "utf8");
