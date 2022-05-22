import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import path from "path";
import { Attributes } from "../constants/types";

const pathOfPosts = path.join(__dirname, "..", "posts");

const getPostUseCase = async (filename: string) => {
  try {
    const file = await fs.readFile(path.join(pathOfPosts, filename + ".md"));
    const { attributes, body }: { attributes: Attributes; body: string } =
      parseFrontMatter(file.toString());
    return {
      title: attributes.title,
      tags: attributes.tags,
      background: attributes.background,
      color: attributes.color,
      rotation: attributes.rotation,
      date: attributes.date,
      body,
    };
  } catch (error) {
    console.log(error);
  }
};

const getPostsUseCase = async () => {
  const postDir = await fs.readdir(pathOfPosts);
  return Promise.all(
    postDir.map(async (filename) => {
      const file = await fs.readFile(path.join(pathOfPosts, filename));
      const { attributes }: { attributes: Attributes } = parseFrontMatter(
        file.toString()
      );

      return {
        title: attributes.title,
        tags: attributes.tags,
        background: attributes.background,
        color: attributes.color,
        rotation: attributes.rotation,
        date: attributes.date,
        filename,
      };
    })
  );
};

export { getPostUseCase, getPostsUseCase };
