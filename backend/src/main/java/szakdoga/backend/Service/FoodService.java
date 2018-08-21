package szakdoga.backend.Service;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import szakdoga.backend.Repository.FoodRepository;
import szakdoga.backend.app.module.Food;

@Service
@SessionScope
@Data
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public Iterable<Food> getFoods() {
        return foodRepository.findAll();
    }
}
