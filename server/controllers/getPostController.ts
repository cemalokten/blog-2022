import { getPostUseCase } from "../use-cases/getPostUseCase";

const getPostController = async (req, res) => {
  try {
    const post = await getPostUseCase(req.params.title);
    res.send(post);
  } catch (error) {
    console.log(error);
  }
};

export { getPostController };
