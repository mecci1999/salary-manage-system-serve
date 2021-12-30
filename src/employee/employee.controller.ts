import { Request, Response, NextFunction } from "express";
import _ from "lodash";
import {
  createEmployee,
  deleteEmployee,
  updateEmployee,
  getEmployees,
} from "./employee.service";

/**
 * 创建员工
 */
export const store = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //准备数据
  const { name, sex, age, unit, occupation, telphone } = request.body;

  //创建用户
  try {
    const data = await createEmployee({
      name,
      sex,
      age,
      unit,
      occupation,
      telphone,
    });
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 更新员工信息
 */
export const update = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //获取更新内容的ID
  const { employeeId } = request.params;
  //准备更新数据
  const employee = _.pick(request.body, [
    "name",
    "sex",
    "age",
    "unit",
    "occupation",
    "telphone",
  ]);
  //更新内容
  try {
    const data = await updateEmployee(parseInt(employeeId, 10), employee);
    response.send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 删除员工信息
 */
export const destory = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //获取要删除的ID
  const { employeeId } = request.params;

  //删除内容
  try {
    const data = await deleteEmployee(parseInt(employeeId, 10));
    response.send(data);
  } catch (error) {
    next(error);
  }
};

// 获取员工列表信息
export const index = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 获取员工信息
  try {
    const employees = await getEmployees();

    response.send(employees);
  } catch (error) {
    next(error);
  }
};
