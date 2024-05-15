import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access } from "fs/promises";
import { notFound } from "next/navigation";

const POSTS_FOLDER = path.join(process.cwd(), "content/docs");

async function readPostFile(slug: string) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`).replace(',','/'));
  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug || "page";
  const markdown = await readPostFile(slug);

  if (!markdown) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  // do something with frontmatter, like set metadata or whatever

  return <>{content}</>;
}