import { salaryModel } from "../salary/salary.model";

export enum employeeType {
  manager = "manager",
  accountStaff = "accountStaff",
  techique = "techique",
  salesman = "salesman",
}

export interface employeeModel {
  id?: number;
  name?: string;
  sex?: string;
  age?: number;
  unit?: string;
  occupation?: employeeType;
  telphone?: string;
  salary?: salaryModel | null;
}
