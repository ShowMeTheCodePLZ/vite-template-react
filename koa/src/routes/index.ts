import Router from "koa-router";
import test from "./test";

const router = new Router();

router.use(test.routes());

export default router;
