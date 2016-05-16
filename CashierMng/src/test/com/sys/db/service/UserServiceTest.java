package com.sys.db.service;

import javax.annotation.Resource;

import org.junit.Test;

import com.BaseTest;
import com.sys.common.util.LogUtil;
import com.sys.db.entity.User;


/**
 *
 *UserServiceTest.java
 */

public class UserServiceTest extends BaseTest{
	@Resource
	UserService userService;
	
	@Test
	public void registUser(){
		User rslt = null;
		try{
			rslt=userService.userRegist(new User("test2", "test2"));
		}catch(Exception e){
			LogUtil.error(getClass(), "jutil error", e);
			
		}
		LogUtil.info(getClass(), rslt.toString());
	}
	
}
