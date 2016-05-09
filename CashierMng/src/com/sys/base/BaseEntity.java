package com.sys.base;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;


/**
 * BaseEntity
 */
@Entity  
@Table(name = "t_base")  
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)  
@DiscriminatorColumn(name = "baseEntity", discriminatorType = DiscriminatorType.STRING) 
public class BaseEntity {

	private Integer id;
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
