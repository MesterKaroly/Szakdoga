package szakdoga.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import szakdoga.backend.Service.FoodService;
import szakdoga.backend.app.module.Food;

@RestController
@RequestMapping("api/carte")
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }


    @GetMapping("/all")
    public ResponseEntity<Iterable<Food>> getAllFood(){
        Iterable<Food> list=foodService.getFoods();
        return ResponseEntity.ok(list);
    }
}
