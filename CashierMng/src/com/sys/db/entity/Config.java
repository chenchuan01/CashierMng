package com.sys.db.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.sys.base.BaseEntity;

/**
 * œµÕ≥≈‰÷√
 */
@SuppressWarnings("serial")
@Entity  
@Table(name = "tb_config")  
public class Config extends BaseEntity{
	private String config_key;
	private String config_value;
	private String remarks;
	public Config() {
	}
	
	public Config(String key) {
		super();
		this.config_key = key;
	}
	
	public Config(String key, String value) {
		super();
		this.config_key = key;
		this.config_value = value;
	}
	
	public Config(String key, String value, String remarks) {
		super();
		this.config_key = key;
		this.config_value = value;
		this.remarks = remarks;
	}

	
	public String getConfig_key() {
		return config_key;
	}

	public void setConfig_key(String config_key) {
		this.config_key = config_key;
	}

	public String getConfig_value() {
		return config_value;
	}

	public void setConfig_value(String config_value) {
		this.config_value = config_value;
	}

	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	
}
