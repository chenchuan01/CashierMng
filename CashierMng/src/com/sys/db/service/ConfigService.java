package com.sys.db.service;

import org.springframework.stereotype.Component;

import com.SpringContextHolder;
import com.sys.base.BaseService;
import com.sys.db.dao.ConfigDao;
import com.sys.db.entity.Config;

/**
 * @author chenchuan
 * @date 2016Äê1ÔÂ22ÈÕ 
 * ConfigService.java
 */
@Component
public class ConfigService extends BaseService<Config> {
	ConfigDao configDao;

	public Config getConfig(String configKey){
		return configDao().findKey(configKey);
	}
	
	public ConfigDao configDao(){
		if(configDao==null){
			configDao = SpringContextHolder.getBean("configDao");
		}
		return configDao;
	}
}
