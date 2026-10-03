import { readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

for (const dir of ["dist", "dist/cjs"]) {
  for (const name of readdirSync(dir)) {
    if (!name.startsWith("_generated_") || !name.endsWith(".js")) continue;
    const file = join(dir, name);
    rmSync(`${file}.map`, { force: true });
    // Without the map, the comment pointing to it only makes tools log a warning.
    writeFileSync(
      file,
      readFileSync(file, "utf8").replace(/\n?\/\/# sourceMappingURL=\S+\s*$/, "\n"),
    );
  }
}
