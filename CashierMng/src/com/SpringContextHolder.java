package com;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.sys.common.util.LogUtil;
/**
 * 
 * 以静态变量保存ApplicationContext
 *
 */
public class SpringContextHolder implements ApplicationContextAware{
	private static ApplicationContext applicationContext;
	/**
	 * 实现ApplicationContextAware,以保存注入的applicationContext
	 */
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		LogUtil.info(getClass(), "注入Spring applicationContext....");
		SpringContextHolder.applicationContext = applicationContext;
	}
	/**
	 * 返回保存的applicationContext
	 * @return
	 */
	public static ApplicationContext getApplicationContext(){
		return applicationContext;
	}
	/**
	 * 获得applicationContext中的Bean
	 * @param name
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <T> T getBean(String name){
		checkApplicationContext();
		return (T)applicationContext.getBean(name);
	}
	/**
	 * 获取applicationContext中的Bean
	 * @param clazz
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <T> T getBean(Class<T> clazz){
		checkApplicationContext();
		return (T)applicationContext.getBeansOfType(clazz);
		
	}
	/**
	 * 清除applicationContext
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
