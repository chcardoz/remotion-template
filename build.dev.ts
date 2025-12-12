import { config } from "dotenv";
import { defaultBuildLogger, Template } from "e2b";
import { template } from "./template";

// Load .env.local file if it exists
config({ path: ".env.local" });

const alias = process.env.TEMPLATE_ALIAS ?? "remotion-starter-dev";
const cpuCount = Number(process.env.TEMPLATE_CPU ?? 2);
const memoryMB = Number(process.env.TEMPLATE_MEMORY_MB ?? 4096);

await Template.build(template, {
  alias,
  cpuCount,
  memoryMB,
  onBuildLogs: defaultBuildLogger(),
});
