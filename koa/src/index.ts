import chalk from "chalk";
import error from "koa-json-error";
import Koa from "koa";
import koaBody from "koa-body";
import koaStatic from "koa-static";
import path from "path";
import routers from "./routes";

type JSONError = Error & { status: number };

const app = new Koa();
const port = 7000;
const options = {
  postFormat: (_: JSONError, { stack, ...rest }: any) =>
    process.env.NODE_ENV === "production" ? rest : { stack, ...rest },
};

app.use(koaStatic(path.join(__dirname, "assets")));
app.use(error(options));
app.use(koaBody());
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(port, () => {
  console.log(`${chalk.bgGreen("Server running successfully!")}`);
  console.log(
    chalk.cyan(`${chalk.bold("Location: ")}`, `http://localhost:${port}`),
  );
});
