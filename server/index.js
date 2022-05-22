"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promises_1 = __importDefault(require("fs/promises"));
const front_matter_1 = __importDefault(require("front-matter"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
const hostname = "localhost";
const pathOfPosts = path_1.default.join(__dirname, ".", "posts");
// Controller
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const postDir = yield promises_1.default.readdir(pathOfPosts);
    return Promise.all(postDir.map((filename) => __awaiter(void 0, void 0, void 0, function* () {
        const file = yield promises_1.default.readFile(path_1.default.join(pathOfPosts, filename));
        const { attributes } = (0, front_matter_1.default)(file.toString());
        console.log(attributes.rotation);
        return [attributes, filename];
    })));
});
// Controller
const getPost = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    const file = yield promises_1.default.readFile(path_1.default.join(pathOfPosts, filename));
    const { attributes, body } = (0, front_matter_1.default)(file.toString());
    return [attributes, body];
});
// Routes
app.get("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield getPosts();
        res.send(posts);
    }
    catch (error) {
        console.log(error);
    }
}));
// Routes
app.get("/post/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield getPost(req.params.id + ".md");
        res.send(post);
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
app.listen(3000);
//# sourceMappingURL=index.js.map