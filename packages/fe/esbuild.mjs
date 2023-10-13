import esbuild from "esbuild";
import { argv } from "process";

async function build() {
  if (argv.includes("--watch")) {
    let ctx = await esbuild.context({
      bundle: true,
      entryPoints: ["./src/index.tsx"],
      outfile: "./public/index.js",
      treeShaking: true,
    });

    await ctx.watch();
  } else {
    esbuild.build({
      bundle: true,
      entryPoints: ["./src/index.tsx"],
      outfile: "./public/index.js",
      treeShaking: true,
      minify: true,
    });
  }
}

build();
