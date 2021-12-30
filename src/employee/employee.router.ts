import express from "express";
import * as employeeController from "./employee.controller";

const router = express.Router();

/**
 * 创建员工
 */
router.post("/employee", employeeController.store);

/**
 * 更新员工
 */
router.patch("/employee/:employeeId", employeeController.update);

/**
 * 删除员工
 */
router.delete("/employee/:employeeId", employeeController.destory);

/**
 * 默认导出路由
 */
export default router;
