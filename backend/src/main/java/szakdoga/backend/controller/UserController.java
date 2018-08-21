package szakdoga.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szakdoga.backend.Service.Annotation.Role;
import szakdoga.backend.Service.Exception.UserNotValidException;
import szakdoga.backend.Service.UserService;
import szakdoga.backend.app.module.User;


@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService=userService;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) throws UserNotValidException {
        return ResponseEntity.ok(userService.login(user));
    }

    @Role({User.Role.GUEST, User.Role.ADMIN})
    @PostMapping("/register")
    public ResponseEntity<User> registration(@RequestBody User user){
        return ResponseEntity.ok(userService.register(user));
    }


}
