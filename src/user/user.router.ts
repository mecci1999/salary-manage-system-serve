import express from "express";
import * as userController from "./user.controller";
import {
  validataUserData,
  hashPassword,
  validateUpdateUserData,
} from "./user.middleware";

const router = express.Router();

/**
 * 创建用户
 */
router.post("/users", hashPassword, userController.store);

/**
 * 更新用户信息
 */
router.patch("/users", validateUpdateUserData, userController.update);

export default router;
