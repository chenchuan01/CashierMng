package com.sys.base;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;


/**
 * BaseEntity
 */
 
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)  
public abstract class BaseEntity implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)  
	private Integer id;
	
	@Column(length=1)
	private String delflag = "0";// É¾³ý±êÖ¾
	
	private String operaer;
	private String operatype;
	private String operatime;

	public BaseEntity() {
	}

	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getOperaer() {
		return operaer;
	}


	public void setOperaer(String operaer) {
		this.operaer = operaer;
	}


	public String getOperatype() {
		return operatype;
	}


	public void setOperatype(String operatype) {
		this.operatype = operatype;
	}


	public String getOperatime() {
		return operatime;
	}


	public void setOperatime(String operatime) {
		this.operatime = operatime;
	}


	public String getDelflag() {
		return delflag;
	}

	public void setDelflag(String delflag) {
		this.delflag = delflag;
	}
	
}
