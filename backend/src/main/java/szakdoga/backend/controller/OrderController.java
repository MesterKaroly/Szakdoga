package szakdoga.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Service.Annotation.Role;
import szakdoga.backend.Service.OrderService;
import szakdoga.backend.app.module.Order;
import szakdoga.backend.app.module.User;

import java.lang.reflect.Method;

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
    private ResponseEntity<Iterable<Order>> getAllOrders(){
        Iterable<Order> list=orderService.getAll();
        return ResponseEntity.ok(list);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/update")
    private ResponseEntity<Order> update(@RequestBody Order order){
        Order update=orderService.update(order);
        return ResponseEntity.ok(update);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete/{id}")
    private ResponseEntity delete(@PathVariable int id){
        orderService.delete(Integer.toUnsignedLong(id));
        return ResponseEntity.ok().build();
    }

}
