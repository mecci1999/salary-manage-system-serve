import express from "express";
import userRouter from "../user/user.router";
import authRouter from "../auth/auth.router";
import employeeRouter from "../employee/employee.router";
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
 * 应用路由
 */
app.use(userRouter, authRouter, employeeRouter);

/**
 * 使用异常处理器
 */
app.use(defaultErrorHandler);

/**
 * 最后默认导出应用
 */
export default app;
