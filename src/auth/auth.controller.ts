import { Request, Response, NextFunction } from "express";

/**
 * 用户登录
 */
export const login = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //准备数据
  const {
    user: { id, name },
  } = request.body;

  // 给payload提供数据
  const payload = { id, name };

  // 做出响应
  response.send({ id, name });
};

/**
 * 验证登录
 */
export const validata = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(request.user);
  response.sendStatus(200);
};
