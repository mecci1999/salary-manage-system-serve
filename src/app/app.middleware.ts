import { Request, Response, NextFunction } from "express";

/**
 * 定义默认异常处理器
 */
export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error.message) {
    console.log("错误异常", error.message);
  }
  let statusCode: number, message: string;

  /**
   * 处理异常
   */
  switch (error.message) {
    case "NAME_IS_REQUIRED":
      statusCode = 400;
      message = "请输入用户名 ~~";
      break;
    case "PASSWORD_IS_REQUIRED":
      statusCode = 400;
      message = "请输入密码 ~~";
      break;
    case "USER_ALREADY_EXIST":
      statusCode = 409; //有冲突
      message = "用户名已存在，请修改 ~~";
      break;
    case "USER_DOES_NOT_EXIST":
      statusCode = 400;
      message = "用户不存在 ~~";
      break;
    case "PASSWORD_DOES_NOT_MATCH":
      statusCode = 400;
      message = "密码不对 ~~";
      break;
    case "UNAUTHORIZED":
      statusCode = 401;
      message = "请先登录 ~~";
      break;
    default:
      statusCode = 500;
      message = "服务器暂时出了点问题 ~~";
      break;
  }

  response.status(statusCode).send({ message });
};
