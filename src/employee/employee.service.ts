import { connection } from "../app/database/mysql";
import { employeeModel } from "./employee.model";

/**
 * 创建员工信息
 */
export const createEmployee = async (employee: employeeModel) => {
  // 准备查询
  const statement = `
    INSERT INTO employee
    SET ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, employee);

  // 提供数据
  return data as any;
};

/**
 * 更新员工信息
 */
export const updateEmployee = async (
  employeeId: number,
  employee: employeeModel
) => {
  //准备查询
  const statement = `
    UPDATE employee
    SET ?
    WHERE id = ? 
  `;

  //执行查询
  const [data] = await connection
    .promise()
    .query(statement, [employee, employeeId]);

  //提供数据
  return data;
};

/**
 * 删除员工信息
 */
export const deleteEmployee = async (employeeId: number) => {
  //准备查询
  const statement = `
    DELETE FROM employee
    WHERE id = ?
  `;

  //执行查询
  const [data] = await connection.promise().query(statement, employeeId);

  //提供数据
  return data;
};

/**
 * 获取员工列表
 */
export const getEmployees = async () => {
  // 准备查询
  const statement = `
    SELECT
      employee.name,
      employee.sex,
      employee.age,
      employee.unit,
      employee.occupation,
      employee.telphone 
    FROM
      employee
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement);

  // 提供数据
  return data;
};
