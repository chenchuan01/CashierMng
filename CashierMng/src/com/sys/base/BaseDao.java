package com.sys.base;

import org.springframework.data.repository.PagingAndSortingRepository;


/**
 * @param <T>
 * �������ݷ��ʶ���ӿ�
 */
public interface BaseDao<T extends BaseEntity> extends PagingAndSortingRepository<T, Integer>{
	
}
