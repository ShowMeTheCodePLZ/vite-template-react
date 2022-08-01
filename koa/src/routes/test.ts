import Router from "koa-router";
import TestController from "../controllers/test";

const router = new Router();

router.get("/", TestController.hello);

export default router;
