// Run after adding or replacing a content image: node scripts/image-dimensions.cjs
const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const root = path.resolve(__dirname, "..");
  const sources = ["impact-logo.png", "manathon.jpg", "summer-wishes.png"];
  for (const directory of ["talent", "creatorOwners", "team", "brands"]) {
    for (const file of await fs.readdir(path.join(root, "public", directory))) {
      if (/\.(png|jpe?g|webp)$/i.test(file)) sources.push(`${directory}/${file}`);
    }
  }
  const dimensions = {};
  for (const source of sources.sort()) {
    const { width, height } = await sharp(path.join(root, "public", source)).metadata();
    dimensions[`/${source}`] = { width, height };
  }
  await fs.mkdir(path.join(root, "data"), { recursive: true });
  await fs.writeFile(path.join(root, "data/image-dimensions.json"), `${JSON.stringify(dimensions, null, 2)}\n`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
