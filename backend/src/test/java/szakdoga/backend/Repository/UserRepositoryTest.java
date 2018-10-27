package szakdoga.backend.Repository;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import szakdoga.backend.app.module.User;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class UserRepositoryTest {

    @Resource
    private UserRepository userRepository;

    @Test
    public void Save(){
        User user=createUser();
        User saved=userRepository.save(user);
        Optional<User> load=userRepository.findById(saved.getId());
        Assert.assertEquals(load.get(),user);
    }
    @Test
    public void delete(){
        User user=createUser();
        User saved=userRepository.save(user);
        userRepository.delete(user);
        Optional<User> load=userRepository.findById(saved.getId());
        Assert.assertEquals(load,Optional.empty());
    }
    @Test
    public void update(){
        User user=createUser();
        User saved=userRepository.save(user);
        Optional<User> load=userRepository.findById(saved.getId());
        load.get().setEmail("11111111");
        User saved2=userRepository.save(load.get());
        Optional<User> load2=userRepository.findById(saved2.getId());
        Assert.assertNotNull(load2);
        Assert.assertEquals(load2.get().getEmail(),"11111111");
    }
    private User createUser(){
        User user=new User();
        user.setFullname("Fullname");
        user.setRole(User.Role.USER);
        user.setEmail("Email");
        user.setPassword("Pass");
        user.setUsername("Username");
        return  user;
    }

}