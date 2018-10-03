package szakdoga.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Service.Annotation.Role;
import szakdoga.backend.Service.FoodService;
import szakdoga.backend.app.module.Food;
import szakdoga.backend.app.module.User;

@EnableAutoConfiguration
@Controller
@RequestMapping("api/carte")
@EnableWebMvc
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }


    @Role({User.Role.GUEST, User.Role.ADMIN, User.Role.CHEF,User.Role.USER, User.Role.WAITER})
    @GetMapping("/all")
    public ResponseEntity<Iterable<Food>> getAllFood(){
        Iterable<Food> list=foodService.getFoods();
        return ResponseEntity.ok(list);
    }
}
