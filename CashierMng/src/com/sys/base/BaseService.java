package com.sys.base;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import com.SpringContextHolder;
import com.sys.base.dto.PageResult;
import com.sys.base.dto.QueryParam;
import com.sys.common.AppExpection;
import com.sys.common.LogConstants;
import com.sys.db.DBConstants;
import com.sys.db.entity.User;


/**
 *
 *@author chenchuan
 *@date 2016年1月22日
 *BaseService
 */
public class BaseService<T extends BaseEntity> {
	
	private Class<T> clazz;
	
	private String daoImplName;

	private BaseDao<T> dao;
	
	
	public BaseService() {
		super();
		initClass();
	}

	@SuppressWarnings("unchecked")
	private void initClass() {
		ParameterizedType pt = (ParameterizedType) this.getClass()
				.getGenericSuperclass();
		clazz = (Class<T>) pt.getActualTypeArguments()[0];
		String className = clazz.getSimpleName();
		daoImplName =className.substring(0, 1).toLowerCase()+
				className.substring(1)+DBConstants.SER_IMPLSUB;
				
	}
	
	/**
	 * 删除
	 * @param t
	 * @return
	 */
	public boolean deleteEntity(T t) {
		
		return false;
	}
	/**
	 * 删除
	 * @param t
	 * @return
	 */
	public boolean deleteEntity(T t,User sysUser) {
		inputOper(t, sysUser,LogConstants.OP_TYPE_DEL);
		return false;
	}

	/**
	 * 记录操作人和操作时间
	 * @param t
	 * @param sysUser
	 * @param opType 
	 */
	private void inputOper(T t, User sysUser, String opType) {
		t.setOperaer(sysUser.getUserName());
		t.setOperatype(opType);
	}
	/**
	 * 查询所有
	 * @return
	 */
	public List<T> findAllEntity() {
		return (List<T>) getDao().findAll();
	}
	/**
	 * 通过ID查询
	 * @return
	 */
	public T findById(Integer id) {
		return null;
	}
	/**
	 * 分页查询
	 * @param t
	 * @return
	 */
	public PageResult<T> pageQuery(QueryParam<T> params) {
		return null;
	}
	/**
	 * 分页计算
	 * @param params
	 * @param pageResult
	 * @param totalResult
	 * @return
	 */
	public List<T> pageCount(QueryParam<T> params,PageResult<T> pageResult,List<T> totalResult){
		return null;
	}
	/**
	 * 保存
	 * @param t
	 * @return
	 */
	public T saveEntity(T t) {
		return getDao().save(t);
	}
	/**
	 * 保存
	 * @param t
	 * @return
	 */
	public T saveEntity(T t,User sysUser) {
		inputOper(t, sysUser,LogConstants.OP_TYPE_SAVE);
		return getDao().save(t);
	}
	/**
	 * 更新
	 * @param t
	 * @return
	 * @throws AppExpection 
	 */
	public T updateEntity(T t) throws AppExpection {
		return getDao().save(t);
	}
	/**
	 * 更新
	 * @param t
	 * @return
	 * @throws AppExpection 
	 */
	public T updateEntity(T t,User sysUser) throws AppExpection {
		inputOper(t, sysUser,LogConstants.OP_TYPE_UPD);
		return getDao().save(t);
	}
	/**
	 * 根据Entity属性查询EntityList
	 * @param t
	 * @return
	 */
	public List<T> find(T t){
		return null;
	}
	/**
	 * 根据Entity属性查询Entity
	 * @param t
	 * @return
	 */
	public T findEntity(T t){
		List<T> list=find(t);
		return list!=null&!list.isEmpty()?list.get(0):t;
	}
	
	@SuppressWarnings("unchecked")
	public BaseDao<T> getDao()  {
		if(null == dao){
			setDao((BaseDao<T>) SpringContextHolder.getBean(daoImplName));
		}
		return dao;
	}
	
	public void setDao(BaseDao<T> dao) {
		this.dao = dao;
	}
	
}
