package szakdoga.backend.Service;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Repository.UserRepository;
import szakdoga.backend.Service.Exception.UserNotValidException;
import szakdoga.backend.app.module.User;


@Service
@SessionScope
@EnableAutoConfiguration
@Data
@EnableWebMvc
public class UserService {
    private final UserRepository userRepoitory;

    private User user;

    @Autowired
    public UserService(UserRepository userRepoitory) {
        this.userRepoitory = userRepoitory;
    }

    public User register(User user) {
        userRepoitory.save(user);
        return user;
    }

    public boolean isValid(User user) {
        return userRepoitory.findByUsernameAndPassword(user.getUsername(), user.getPassword()).isPresent();
    }

    public User login(User user) throws UserNotValidException {
        if (isValid(user)){
            return this.user=userRepoitory.findByUsername(user.getUsername()).get();
        }
        throw new UserNotValidException();
    }

    public boolean isLoggedIn() {
        return user != null;
    }
}

