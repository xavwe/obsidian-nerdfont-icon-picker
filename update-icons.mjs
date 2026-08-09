import { writeFile } from "node:fs/promises";

const response = await fetch(
  "https://raw.githubusercontent.com/ryanoasis/nerd-fonts/refs/heads/master/glyphnames.json",
);
const data = await response.json();

const icons = Object.entries(data)
  .filter(([key]) => key !== "METADATA")
  .map(([key, value]) => ({
    title: key,
    icon: value.char,
  }));

await writeFile("./src/icons.json", JSON.stringify(icons, null, 2) + "\n");
