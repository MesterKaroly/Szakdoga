package szakdoga.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szakdoga.backend.Service.OrderService;
import szakdoga.backend.app.module.Order;

@RestController
@RequestMapping("api/order")
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
    public ResponseEntity<Order> update(@PathVariable int id,@RequestBody Order order){
        Order update=orderService.update(id,order);
        return ResponseEntity.ok(update);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Order> delete(@PathVariable int id){
        orderService.delete(id);
        return ResponseEntity.ok().build();
    }

}
