import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Template, type TemplateClass, waitForURL } from "e2b";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = "/home/user/project";

// Define the sandbox template using the new SDK-based flow.
export const template: TemplateClass = Template({ fileContextPath: __dirname })
  .fromNodeImage("20")
  .setUser("root")
  .runCmd("npm install -g pnpm")
  .setUser("user")
  .setWorkdir(projectRoot)
  .makeDir(projectRoot)
  .copy("package.json", projectRoot)
  .copy("tsconfig.json", projectRoot)
  .copy("tsconfig.base.json", projectRoot)
  .copy("vite.config.ts", projectRoot)
  .copy("remotion.config.ts", projectRoot)
  .copy("index.html", projectRoot)
  .runCmd(`mkdir -p ${projectRoot}/src`)
  .copy("src/index.tsx", `${projectRoot}/src/index.tsx`)
  .copy("src/HelloWorld.tsx", `${projectRoot}/src/HelloWorld.tsx`)
  .runCmd(`mkdir -p ${projectRoot}/public`)
  .runCmd("pnpm install")
  .setStartCmd(
    "pnpm run dev -- --host --port 3001",
    waitForURL("http://localhost:3001")
  );
