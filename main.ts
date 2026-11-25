import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const note = "My door alarm logged you staring at the yogurt for nine minutes, then choosing the three-day-old rice you swore you'd never touch again, chef.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, note + "\n");
chmodSync(outFile, 0o644);
