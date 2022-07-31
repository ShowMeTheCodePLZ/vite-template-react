import chalk from "chalk";
import Koa from "koa";
import koaBody from "koa-body";
import routers from "./routes";

const app = new Koa();
const port = 7000;

app.use(koaBody());
app.use(routers.routes());

app.listen(port, () => {
  console.log(`${chalk.bgGreen("Server running successfully!")}`);
  console.log(
    chalk.cyan(`${chalk.bold("Location: ")}`, `http://localhost:${port}`),
  );
});
