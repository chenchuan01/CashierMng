package com;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.sys.common.util.LogUtil;
/**
 * 
 * �Ծ�̬��������ApplicationContext
 *
 */
public class SpringContextHolder implements ApplicationContextAware{
	private static ApplicationContext applicationContext;
	/**
	 * ʵ��ApplicationContextAware,�Ա���ע���applicationContext
	 */
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		LogUtil.info(getClass(), "ע��Spring applicationContext....");
		SpringContextHolder.applicationContext = applicationContext;
	}
	/**
	 * ���ر����applicationContext
	 * @return
	 */
	public static ApplicationContext getApplicationContext(){
		return applicationContext;
	}
	/**
	 * ���applicationContext�е�Bean
	 * @param name
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <T> T getBean(String name){
		checkApplicationContext();
		return (T)applicationContext.getBean(name);
	}
	/**
	 * ��ȡapplicationContext�е�Bean
	 * @param clazz
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <T> T getBean(Class<T> clazz){
		checkApplicationContext();
		return (T)applicationContext.getBeansOfType(clazz);
		
	}
	/**
	 * ���applicationContext
	 */
	public static void cleanApplicationContext(){
		checkApplicationContext();
		applicationContext=null;
	}
	
	public static void checkApplicationContext(){
		if(applicationContext==null){
		    applicationContext=new FileSystemXmlApplicationContext("classpath*:/applicationContext.xml");
		}
	}
}
