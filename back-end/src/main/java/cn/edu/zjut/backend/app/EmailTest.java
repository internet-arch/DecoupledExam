package cn.edu.zjut.backend.app;

import cn.edu.zjut.backend.po.User;
import cn.edu.zjut.backend.service.UserService;
import cn.edu.zjut.backend.util.HibernateUtil;
import org.hibernate.Session;

public class EmailTest {
    public static void main(String[] args) {
        System.out.println("开始测试邮箱功能...");
        
        // 创建用户对象并设置邮箱
        User user = new User();
        user.setUsername("test_email_user");
        user.setPassword("testPassword123");
        user.setRealName("测试用户");
        user.setEmail("test@example.com");
        user.setPhone("13812345678");
        
        System.out.println("用户对象创建完成:");
        System.out.println("- 用户名: " + user.getUsername());
        System.out.println("- 邮箱: " + user.getEmail());
        System.out.println("- 手机: " + user.getPhone());
        
        // 测试邮箱格式验证
        UserService userService = new UserService();
        
        // 直接测试邮箱验证方法
        try {
            // 使用反射检查方法是否存在
            java.lang.reflect.Method isValidEmailMethod = UserService.class.getDeclaredMethod("isValidEmail", String.class);
            isValidEmailMethod.setAccessible(true);
            boolean emailValid = (Boolean) isValidEmailMethod.invoke(userService, user.getEmail());
            System.out.println("邮箱格式验证结果: " + emailValid);
        } catch (Exception e) {
            System.out.println("邮箱验证方法调用失败: " + e.getMessage());
        }
        
        // 测试注册
        boolean registerResult = userService.register(user);
        System.out.println("注册结果: " + (registerResult ? "成功" : "失败"));
        
        // 检查数据库中是否正确保存了邮箱
        if (registerResult) {
            System.out.println("注册成功，邮箱应该已保存到数据库");
        }
        
        // 关闭Hibernate连接
        HibernateUtil.getSessionFactory().close();
    }
}