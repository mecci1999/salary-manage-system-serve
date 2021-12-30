import dotenv from "dotenv";

dotenv.config();

/**
 * 应用配置
 */
export const { APP_PORT, APP_NAME, APP_NAME_ALIAS } = process.env;

/**
 * 数据仓库配置
 */
export const {
  MYSQL_HOST,
  MYSQL_PORT = "3306",
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;
