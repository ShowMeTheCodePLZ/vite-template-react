import Koa from "koa";
import { baseResponse } from "../utils/response";

class TestController {
  async hello(ctx: Koa.Context): Promise<void> {
    ctx.body = baseResponse<string>("Hello World!");
  }
}

export default new TestController();
