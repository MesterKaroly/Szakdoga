package szakdoga.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Repository.FoodRepository;
import szakdoga.backend.app.module.Food;

@EnableAutoConfiguration
@Service
@SessionScope
@EnableWebMvc
public class FoodService {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public Iterable<Food> getFoods() {
        return foodRepository.findAll();
    }
}
