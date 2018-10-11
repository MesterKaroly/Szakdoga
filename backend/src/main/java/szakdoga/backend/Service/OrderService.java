package szakdoga.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Repository.BasketRepository;
import szakdoga.backend.Repository.OrderRepository;
import szakdoga.backend.app.module.Order;

@Service
@Component
@SessionScope
@EnableAutoConfiguration
@EnableWebMvc
public class OrderService {


    private final OrderRepository orderRepository;

    private final BasketRepository basketRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, BasketRepository basketRepository) {
        this.orderRepository = orderRepository;
        this.basketRepository = basketRepository;
    }


    public Iterable<Order> getAll() {
        return orderRepository.findAll();
    }

    public Order update(Order order) {
        Order savedorder=new Order();
        savedorder.setComments(order.getComments());
        savedorder.setFullname(order.getFullname());
        savedorder.setPhonenumber(order.getPhonenumber());
        savedorder.setTablenumber(order.getTablenumber());
        savedorder.setFoods(order.getFoods());
        return orderRepository.save(savedorder);
    }

    public void delete(Long id) {
        orderRepository.deleteById(id);
    }
}
