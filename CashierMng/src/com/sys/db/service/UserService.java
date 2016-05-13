package com.sys.db.service;

import org.springframework.stereotype.Component;

import com.SpringContextHolder;
import com.sys.base.BaseService;
import com.sys.common.AppExpection;
import com.sys.db.dao.UserDao;
import com.sys.db.entity.User;


/**
 * @author chenchuan
 * @date 2016年1月22日
 * UserService.java
 */
@Component
public class UserService extends BaseService<User>{
	
	private UserDao userDao;
	/**
	 * 登录验证
	 * @param user
	 * @return
	 */
	public User userVerify(User user) {
		return userDao().verify(user.getUserName(),user.getPassword());
	}
	/**
	 * 更新
	 * @param user
	 * @return
	 * @throws AppExpection 
	 */
	public User userUpdate(User user) throws AppExpection {
		userDao().save(user);
		return user;
	}
	/**
	 * 添加新用户
	 * @param user
	 */
	public User userRegist(User user) {
		return userDao().save(user);
	}

	public UserDao userDao(){
		if(userDao==null){
			userDao = (UserDao) getDao();
		}
		return userDao;
	}
	
	
	
}
