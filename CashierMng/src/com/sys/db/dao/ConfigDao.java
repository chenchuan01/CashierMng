package com.sys.db.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sys.base.BaseDao;
import com.sys.db.entity.Config;

/**
 * ConfigDao.java
 */
@Repository
public interface ConfigDao extends BaseDao<Config>{
	/**
	 * ≤È—Øconfig
	 * @param configKey
	 * @return
	 */
	@Query("form Config where key=1?")
	Config findKey(String configKey);
}
