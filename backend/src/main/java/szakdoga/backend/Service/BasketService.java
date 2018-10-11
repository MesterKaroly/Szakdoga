package szakdoga.backend.Service;


import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Repository.BasketRepository;
import szakdoga.backend.app.module.Basket;
import szakdoga.backend.app.module.Order;

import java.util.ArrayList;
import java.util.List;

@Service
@SessionScope
@EnableAutoConfiguration
@Data
@EnableWebMvc
public class BasketService {

    private final BasketRepository basketRepository;
    @Autowired
    public BasketService(BasketRepository basketRepository) {
        this.basketRepository = basketRepository;
    }

    public Iterable<Basket> getBasketByName(String name){
        return basketRepository.findAllByName(name);
    }

    public Basket create(Basket basket) {
        return basketRepository.save(basket);
    }

    public void delete(Long id){
        basketRepository.deleteById(id);
    }
}
