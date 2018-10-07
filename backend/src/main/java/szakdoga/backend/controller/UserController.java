package szakdoga.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Service.Annotation.Role;
import szakdoga.backend.Service.Exception.UserNotValidException;
import szakdoga.backend.Service.UserService;
import szakdoga.backend.app.module.User;

@EnableAutoConfiguration
@Controller
@RequestMapping("/api/user")
@EnableWebMvc
public class UserController {


    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService=userService;
    }

    @GetMapping
    public ResponseEntity<Iterable<User>> getall(){
        Iterable<User> list = userService.getAll();
        return  ResponseEntity.ok(list);
    }

    @Role({User.Role.GUEST})
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) throws UserNotValidException {
        return ResponseEntity.ok(userService.login(user));
    }

    @Role({User.Role.GUEST, User.Role.ADMIN})
    @PostMapping("/register")
    public ResponseEntity<User> registration(@RequestBody User user){
        return ResponseEntity.ok(userService.register(user));
    }
    @Role({User.Role.GUEST, User.Role.ADMIN, User.Role.CHEF,User.Role.USER, User.Role.WAITER})
    @GetMapping("/logout")
    public ResponseEntity logout() {
        this.userService.setUser(null);
        return ResponseEntity.ok().build();
    }

}
