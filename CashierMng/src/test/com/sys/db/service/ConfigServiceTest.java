package com.sys.db.service;

import javax.annotation.Resource;

import org.junit.Test;

import com.BaseTest;
import com.sys.common.AppExpection;
import com.sys.common.util.LogUtil;
import com.sys.db.entity.Config;

/**
 *
 *ConfigServiceTest.java
 */
public class ConfigServiceTest extends BaseTest{
	@Resource
	ConfigService configService;
	
	@Test
	public void testConfigSave(){
		Config rslt=null;
		try {
			rslt = configService.saveEntity(new Config("PAGESIZE", "9"));
		} catch (Exception e) {
			LogUtil.error(getClass(), new AppExpection("testConfigSave", "config jpa err", e));
		}
		System.out.println(rslt);
	}
}
