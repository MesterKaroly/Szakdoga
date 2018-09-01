package szakdoga.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Repository.OrderRepository;
import szakdoga.backend.app.module.Order;

import java.util.Optional;

@Service
@Component
@SessionScope
@EnableAutoConfiguration
@EnableWebMvc
public class OrderService {


    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }


    public Iterable<Order> getAll() {
        return orderRepository.findAll();
    }

    public Order create(Order order) {
        return orderRepository.save(order);
    }

    public Order update(Long id, Order order) {
        Optional<Order> current=orderRepository.findById(id);
        Order currentOrder=current.get();
        currentOrder.setFoods(order.getFoods());
        return orderRepository.save(currentOrder);
    }

    public void delete(Long id) {
        orderRepository.deleteById(id);
    }
}
