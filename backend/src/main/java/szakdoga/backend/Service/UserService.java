package szakdoga.backend.Service;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import szakdoga.backend.Repository.UserRepository;
import szakdoga.backend.Service.Exception.UserNotValidException;
import szakdoga.backend.app.module.User;


@Service
@SessionScope
@Data
public class UserService {
    @Autowired
    private UserRepository userRepoitory;

    private User user;

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
}

