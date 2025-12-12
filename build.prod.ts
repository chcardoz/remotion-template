import { defaultBuildLogger, Template } from "e2b";
import { template } from "./template";

const alias = process.env.TEMPLATE_ALIAS ?? "remotion-starter-prod";
const cpuCount = Number(process.env.TEMPLATE_CPU ?? 4);
const memoryMB = Number(process.env.TEMPLATE_MEMORY_MB ?? 6144);

await Template.build(template, {
  alias,
  cpuCount,
  memoryMB,
  onBuildLogs: defaultBuildLogger(),
});
