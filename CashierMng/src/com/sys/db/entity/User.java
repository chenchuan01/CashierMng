package com.sys.db.entity;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

import com.sys.base.BaseEntity;
/**
 * @author chenchuan
 * @date 2016年1月22日
 * 系统用户
 */
@Entity  
@Table(name = "t_user")  
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)  
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING)  
@DiscriminatorValue(value = "user")  
public class User extends BaseEntity{
	
	private String userName;
	private String password;
	private Integer roles = null;
	
    public User() {
    }
    public User(String userName) {
		super();
		this.userName = userName;
	}
    
	public User(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}
	

	public User(Integer id) {
		setId(id);
	}

	
	public String getUserName() {
		return userName;
	}
	public String getPassword() {
		return password;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getRoles() {
		return roles;
	}
	public void setRoles(Integer roles) {
		this.roles = roles;
	}
}
