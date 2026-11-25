import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const note = "My door sensor logged nine minutes of staring at the yogurt, so I relabeled tonight's spinach 'urgent' and your three-day-old rice 'fieldwork.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, note + "\n");
chmodSync(outFile, 0o644);
