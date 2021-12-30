import express from "express";
import { defaultErrorHandler } from "./app.middleware";

/**
 * 创建应用
 */
const app = express();

/**
 * 可以处理 JSON 文件
 */
app.use(express.json());

/**
 * 应用路由
 */

/**
 * 使用异常处理器
 */
app.use(defaultErrorHandler);

/**
 * 最后默认导出应用
 */
export default app;
