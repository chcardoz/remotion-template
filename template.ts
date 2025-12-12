import { Template, type TemplateClass, waitForURL } from "e2b";

const projectRoot = "/home/user/project";

// Define the sandbox template using the new SDK-based flow.
export const template: TemplateClass = Template()
  .fromNodeImage("20")
  .setWorkdir(projectRoot)
  .makeDir(projectRoot)
  .copy(
    [
      "package.json",
      "pnpm-lock.yaml",
      "tsconfig.json",
      "vite.config.ts",
      "remotion.config.ts",
      "index.html",
      "public",
      "src",
    ],
    projectRoot
  )
  .npmInstall("pnpm", { g: true })
  .runCmd("pnpm install --frozen-lockfile")
  .setStartCmd("pnpm run dev", waitForURL("http://localhost:5173"));
