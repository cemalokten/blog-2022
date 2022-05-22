import express from "express";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import path from "path";

const app = express();

const port = 3000;
const hostname = "localhost";

const pathOfPosts = path.join(__dirname, ".", "posts");
type Attributes = {
  title: string;
  tags: string[];
  background: string[];
  color: string[];
  rotation: number[];
  date: string;
};

// Controller
const getPosts = async () => {
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

// Controller
const getPost = async (filename: string) => {
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
};

// Routes
app.get("/posts", async (req: express.Request, res: express.Response) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

// Routes
app.get("/post/:title", async (req, res) => {
  try {
    const post = await getPost(req.params.title);
    res.send(post);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

app.listen(3000);
