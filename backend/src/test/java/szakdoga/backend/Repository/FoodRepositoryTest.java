package szakdoga.backend.Repository;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import szakdoga.backend.app.module.Food;

import javax.annotation.Resource;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FoodRepositoryTest {

    @Resource
    private FoodRepository foodRepository;

    @Test
    public void Save(){
        Food food=createFood();
        Food saved= foodRepository.save(food);
        Optional<Food> load= foodRepository.findById(saved.getId());
        Assert.assertEquals(load.get(),food);
    }
    @Test
    public void delete(){
        Food food=createFood();
        Food saved= foodRepository.save(food);
        foodRepository.delete(food);
        Optional<Food> load= foodRepository.findById(saved.getId());
        Assert.assertEquals(load,Optional.empty());
    }
    @Test
    public void update(){
        Food food=createFood();
        Food saved= foodRepository.save(food);
        Optional<Food> load= foodRepository.findById(saved.getId());
        load.get().setPrice(5);
        Food saved2= foodRepository.save(load.get());
        Optional<Food> load2= foodRepository.findById(saved2.getId());
        Assert.assertNotNull(load2);
        Assert.assertEquals(load2.get().getPrice(),5);
    }
    private Food createFood(){
        Food food=new Food();
        food.setIngredients("Ingredients");
        food.setNames("Name");
        food.setPrice(123123);
        return  food;
    }


}