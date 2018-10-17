package szakdoga.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Service.BasketService;
import szakdoga.backend.app.module.Basket;

@EnableAutoConfiguration
@Controller
@RequestMapping("api/basket")
@EnableWebMvc
public class BasketController {

    private final BasketService basketService;

    @Autowired
    public BasketController(BasketService basketService) {
        this.basketService = basketService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/find")
    public ResponseEntity<Iterable<Basket> > findBasket(@RequestBody Basket name){
        Iterable<Basket> list=basketService.getBasketByName(name.getName());
        return ResponseEntity.ok(list);

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/update")
    public ResponseEntity<Basket> update(@RequestBody Basket basket){
        Basket updateBasket=basketService.create(basket);
        return ResponseEntity.ok(updateBasket);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable int id){
        basketService.delete(Integer.toUnsignedLong(id));
        return ResponseEntity.ok().build();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/onedelete/{id}")
    public ResponseEntity deleteOneOfThem(@PathVariable int id){
        basketService.deleteOneOfThem(Integer.toUnsignedLong(id));
        return ResponseEntity.ok().build();

    }
}
