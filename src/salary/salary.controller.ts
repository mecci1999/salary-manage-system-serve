import { Request, Response, NextFunction } from "express";
import _ from "lodash";
import {
  createSalary,
  updateSalary,
  deleteSalary,
  getSalarys,
  getOneSalary,
} from "./salary.service";

/**
 * 创建员工薪资
 */
export const store = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //准备数据
  const { basic, butei, jiangli, shiyebaoxian, zhufanggongjijin } =
    request.body;

  //创建用户
  try {
    const data = await createSalary({
      basic,
      butei,
      jiangli,
      shiyebaoxian,
      zhufanggongjijin,
    });
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 更新员工薪资信息
 */
export const update = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //获取更新内容的ID
  const { salaryId } = request.params;
  //准备更新数据
  const salary = _.pick(request.body, [
    "basic",
    "butei",
    "jiangli",
    "shiyebaoxian",
    "zhufanggongjijin",
  ]);
  //更新内容
  try {
    const data = await updateSalary(parseInt(salaryId, 10), salary);
    response.send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 删除员工薪资信息
 */
export const destory = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //获取要删除的ID
  const { salaryId } = request.params;

  //删除内容
  try {
    const data = await deleteSalary(parseInt(salaryId, 10));
    response.send(data);
  } catch (error) {
    next(error);
  }
};

// 获取员工列表薪资信息
export const index = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 获取员工信息
  try {
    const salarys = await getSalarys();

    response.send(salarys);
  } catch (error) {
    next(error);
  }
};

/**
 * 获取某一员工的具体薪资信息
 */
export const show = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 获取该员工的id
  const { employeeId } = request.params;

  try {
    const data = await getOneSalary(parseInt(employeeId, 10));

    response.send(data);
  } catch (error) {
    next(error);
  }
};
