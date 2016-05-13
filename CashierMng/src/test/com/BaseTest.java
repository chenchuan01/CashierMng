package com;

import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 *BaseTest.java
 */
@RunWith(SpringJUnit4ClassRunner.class) 
@ContextConfiguration("/applicationContext.xml")
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = false)
@Transactional
public class BaseTest extends AbstractTransactionalJUnit4SpringContextTests{
	
	/**
	 * @param name
	 * @return
	 */
	public Object getBean(String name){
		return applicationContext.getBean(name);
	}
}
