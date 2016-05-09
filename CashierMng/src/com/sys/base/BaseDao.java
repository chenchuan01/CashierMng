package com.sys.base;

import org.springframework.data.repository.PagingAndSortingRepository;


/**
 * @param <T>
 * 基本数据访问对象接口
 */
public interface BaseDao<T extends BaseEntity> extends PagingAndSortingRepository<T, Integer>{
	
}
