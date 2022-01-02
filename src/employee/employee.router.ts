import express from "express";
import * as employeeController from "./employee.controller";

const router = express.Router();

/**
 * 创建员工
 */
router.post("/employee/add", employeeController.store);

/**
 * 更新员工
 */
router.patch("/employee/:employeeId", employeeController.update);

/**
 * 删除员工
 */
router.delete("/employee/:employeeId", employeeController.destory);

/**
 * 员工列表信息
 */
router.get("/employee", employeeController.index);

/**
 * 按Id获取员工信息
 */
router.get("/employee/:employeeId", employeeController.show);

/**
 * 默认导出路由
 */
export default router;
