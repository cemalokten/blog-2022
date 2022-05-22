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
exports.getPostUseCase = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const front_matter_1 = __importDefault(require("front-matter"));
const path_1 = __importDefault(require("path"));
const pathOfPosts = path_1.default.join(__dirname, ".", "posts");
const getPostUseCase = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    const file = yield promises_1.default.readFile(path_1.default.join(pathOfPosts, filename + ".md"));
    const { attributes, body } = (0, front_matter_1.default)(file.toString());
    return {
        title: attributes.title,
        tags: attributes.tags,
        background: attributes.background,
        color: attributes.color,
        rotation: attributes.rotation,
        date: attributes.date,
        body,
    };
});
exports.getPostUseCase = getPostUseCase;
//# sourceMappingURL=getPostUseCase.js.map