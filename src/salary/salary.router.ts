import express from "express";
import * as salaryController from "./salary.controller";

const router = express.Router();

/**
 * 创建员工
 */
router.post("/salary", salaryController.store);

/**
 * 更新员工
 */
router.patch("/salary/:salaryId", salaryController.update);

/**
 * 删除员工
 */
router.delete("/salary/:salaryId", salaryController.destory);

/**
 * 员工列表信息
 */
router.get("/salary", salaryController.index);

/**
 * 默认导出路由
 */
export default router;
