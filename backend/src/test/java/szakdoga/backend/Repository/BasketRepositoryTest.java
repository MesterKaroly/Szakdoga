package szakdoga.backend.Repository;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import szakdoga.backend.app.module.Basket;

import javax.annotation.Resource;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BasketRepositoryTest {

    @Resource
    private BasketRepository basketRepository;

    @Test
    public void Save(){
        Basket basket=createBasket();
        Basket saved= basketRepository.save(basket);
        Optional<Basket> load= basketRepository.findById(saved.getId());
        Assert.assertEquals(load.get(),basket);
    }
    @Test
    public void delete(){
        Basket basket=createBasket();
        Basket saved= basketRepository.save(basket);
        basketRepository.delete(basket);
        Optional<Basket> load= basketRepository.findById(saved.getId());
        Assert.assertEquals(load,Optional.empty());
    }
    @Test
    public void update(){
        Basket basket=createBasket();
        Basket saved= basketRepository.save(basket);
        Optional<Basket> load= basketRepository.findById(saved.getId());
        load.get().setPrice(5);
        Basket saved2= basketRepository.save(load.get());
        Optional<Basket> load2= basketRepository.findById(saved2.getId());
        Assert.assertNotNull(load2);
        Assert.assertEquals(load2.get().getPrice(),5);
    }
    private Basket createBasket(){
        Basket basket=new Basket();
        basket.setFoodingredients("Ingredients");
        basket.setFoodname("Foodname");
        basket.setName("Name");
        basket.setPrice(3);
        return  basket;
    }
}