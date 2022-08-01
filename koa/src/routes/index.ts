import Router from "koa-router";
import testRouter from "./test";
import fs from "fs";

const router = new Router();

router.use(testRouter.routes()).use(testRouter.allowedMethods());

export default router;
