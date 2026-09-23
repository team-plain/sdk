import { writeFileSync } from "node:fs";
import packageJson from "../package.json" with { type: "json" };

writeFileSync(
  new URL("../src/_generated_version.ts", import.meta.url),
  `// Generated from package.json during build. Do not edit manually.\nexport const SDK_VERSION = ${JSON.stringify(packageJson.version)};\n`,
);
