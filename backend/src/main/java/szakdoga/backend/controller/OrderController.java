package szakdoga.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Service.Annotation.Role;
import szakdoga.backend.Service.OrderService;
import szakdoga.backend.app.module.Order;
import szakdoga.backend.app.module.User;

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

    @Role({User.Role.GUEST, User.Role.ADMIN, User.Role.CHEF,User.Role.USER, User.Role.WAITER})
    @GetMapping("/all")
    public ResponseEntity<Iterable<Order>> getAllOrders(){
        Iterable<Order> list=orderService.getAll();
        return ResponseEntity.ok(list);
    }

    @Role({User.Role.ADMIN, User.Role.WAITER, User.Role.USER})
    @PostMapping("/update")
    public ResponseEntity<Order> update(@RequestBody Order order){
        Order update=orderService.update(order);
        return ResponseEntity.ok(update);
    }

    @Role({User.Role.ADMIN,User.Role.USER,User.Role.CHEF})
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Order> delete(@PathVariable Long id){
        orderService.delete(id);
        return ResponseEntity.ok().build();
    }

}
