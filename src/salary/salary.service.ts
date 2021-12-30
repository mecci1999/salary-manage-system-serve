import { connection } from "../app/database/mysql";
import { salaryModel } from "./salary.model";

/**
 * 创建员工薪资信息
 */
export const createSalary = async (salary: salaryModel) => {
  // 准备查询
  const statement = `
    INSERT INTO salary
    SET ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, salary);

  // 提供数据
  return data as any;
};

/**
 * 更新员工薪资信息
 */
export const updateSalary = async (salaryId: number, salary: salaryModel) => {
  //准备查询
  const statement = `
    UPDATE salary
    SET ?
    WHERE id = ? 
  `;

  //执行查询
  const [data] = await connection
    .promise()
    .query(statement, [salary, salaryId]);

  //提供数据
  return data;
};

/**
 * 删除员工薪资信息
 */
export const deleteSalary = async (salaryId: number) => {
  //准备查询
  const statement = `
    DELETE FROM salary
    WHERE id = ?
  `;

  //执行查询
  const [data] = await connection.promise().query(statement, salaryId);

  //提供数据
  return data;
};

/**
 * 获取员工薪资列表
 */
export const getSalarys = async () => {
  // 准备查询
  const statement = `
    SELECT
      *
    FROM
      salary
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement);

  // 提供数据
  return data;
};

/**
 * 获取员工薪资具体信息
 */
export const getOneSalary = async (employeeId: number) => {
  // 准备查询
  const statement = `
    SELECT
      basic, 
      butei,
      jiangli,
      shiyebaoxian,
      zhufanggongjijin
    FROM
      salary
    WHERE
      salary.employeeId = ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, employeeId);

  // 提供数据
  return data[0];
};
