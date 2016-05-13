package com.sys.db.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sys.base.BaseDao;
import com.sys.db.DBConstants;
import com.sys.db.entity.User;


/**
 * @author chenchuan
 * @date 2016年1月22日
 * UserDao.java
 */
@Repository
public interface UserDao extends BaseDao<User>{
	/**
	 * 登录验证
	 * @param user
	 * @return
	 */
	@Query("from User where userName=?1 and password=?2 and "+DBConstants.DEL_FLAG+"!=1")
	User verify(String userName,String password);
}
