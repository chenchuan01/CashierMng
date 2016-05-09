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
 * ϵͳ����
 */
@Entity  
@Table(name = "t_config")  
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)  
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING)  
@DiscriminatorValue(value = "config")  
public class Config extends BaseEntity{
	private String key;
	private String value;
	private String remarks;
	public Config() {
	}
	
	public Config(String key) {
		super();
		this.key = key;
	}
	
	public Config(String key, String value) {
		super();
		this.key = key;
		this.value = value;
	}
	
	public Config(String key, String value, String remarks) {
		super();
		this.key = key;
		this.value = value;
		this.remarks = remarks;
	}

	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	
}
