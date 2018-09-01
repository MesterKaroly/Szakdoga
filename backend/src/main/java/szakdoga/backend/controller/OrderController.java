package szakdoga.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Service.OrderService;
import szakdoga.backend.app.module.Order;

@EnableAutoConfiguration
@Controller
@RequestMapping("api/order")
@EnableWebMvc

public class OrderController {


    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping("/all")
    public ResponseEntity<Iterable<Order>> getAllOrders(){
        Iterable<Order> list=orderService.getAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Order> create(@RequestBody Order order){
        Order saved=orderService.create(order);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Order> update(@PathVariable Long id,@RequestBody Order order){
        Order update=orderService.update(id,order);
        return ResponseEntity.ok(update);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Order> delete(@PathVariable Long id){
        orderService.delete(id);
        return ResponseEntity.ok().build();
    }

}
