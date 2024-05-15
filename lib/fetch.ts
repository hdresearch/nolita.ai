const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

export interface Page {
  title: string;
  path: string;
  children: Page[];
}

export function buildPageTree(directoryPath: string, rootPath: string = directoryPath): any[] {
  const pages: Page[] = [];

  const files = fs.readdirSync(directoryPath);

  files.forEach((file: string) => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const children = buildPageTree(filePath, rootPath);
      // get info from dir.yaml, skip directories without it
      const dirYamlPath = path.join(filePath, "dir.yaml");
      if (!fs.existsSync(dirYamlPath)) {
        return;
      }
      const { title } = matter(fs.readFileSync(dirYamlPath, "utf-8")).data;
      const page = {
        title,
        path: filePath.replace(rootPath, "").replace(/\\/g, "/"),
        children: children,
      };
      pages.push(page);
    } else if (path.extname(file) === ".mdx") {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const page = {
        title: data.title || "",
        path: filePath.replace(rootPath, "").replace(/\\/g, "/").replace(/.mdx$/, "").replace(/page$/, ""),
        children: [],
      };
      pages.push(page);
    }
  });

  return pages;
}
