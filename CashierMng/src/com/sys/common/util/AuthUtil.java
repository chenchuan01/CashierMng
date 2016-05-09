package com.sys.common.util;

import java.util.List;
import java.util.Map;

/**
 *
 *@author chenchuan
 *@date 2016年2月16日
 *AuthUtil.java
 */
public class AuthUtil {
	
	/***************角色类型********************/
	/**
	 * 超级管理员
	 */
	public static final int AU_SUPER=0;
	/**
	 * 一般股东
	 */
	public static final int AU_HOLDER=1;
	/**
	 * 管理员
	 */
	public static final int AU_ADMIN=2;
	/**
	 * 普通用户
	 */
	public static final int AU_USER=3;
	
	/***************操作类型********************/
	/**
	 * 前台操作
	 */
	public static final String OP_OPERA="opera";
	/**
	 * 信息查看
	 */
	public static final String OP_INF="inf";
	/**
	 * 删除操作
	 */
	public static final String OP_DEL="del";
	/**
	 * 系统操作
	 */
	public static final String OP_SYS="sys";
	/**
	 * 前台特有
	 */
	public static final String OP_FRONT="front";

	/**
	 * 判断是否具有操作权限
	 * @param roles
	 * @param opreat
	 * @return
	 */
	public static boolean isAuth(int roles, String opreat) {
		if(0==roles){
			return true;
		}
		Map<Integer, List<String>>  authMap = ConfigUtil.authConfMap();
		List<String> auths = authMap.get(roles);
		for (String auth : auths) {
			if(opreat.equalsIgnoreCase(auth)){
				return true;
			}
		}
		return false;
	}

}
