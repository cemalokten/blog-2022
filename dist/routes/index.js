"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/");
const router = (0, express_1.Router)();
router.get("/post/:title", controllers_1.getPostController);
// router.get("/posts", getBugByIdController);
//# sourceMappingURL=index.js.map