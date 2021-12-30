//导入app
import { APP_PORT } from "./app/app.config";
import httpServer from "./app/app.server";

/**
 * 服务器的监听
 */
httpServer.listen(APP_PORT, () => {
  console.log("服务器已启动！~");
});
