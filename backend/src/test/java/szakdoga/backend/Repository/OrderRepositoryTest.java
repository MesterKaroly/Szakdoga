package szakdoga.backend.Repository;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import szakdoga.backend.app.module.Order;

import javax.annotation.Resource;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OrderRepositoryTest {
    @Resource
    private OrderRepository orderRepository;

    @Test
    public void Save(){
        Order order=createOrder();
        Order saved= orderRepository.save(order);
        Optional<Order> load= orderRepository.findById(saved.getId());
        Assert.assertEquals(load.get(),order);
    }
    @Test
    public void delete(){
        Order order=createOrder();
        Order saved= orderRepository.save(order);
        orderRepository.delete(order);
        Optional<Order> load= orderRepository.findById(saved.getId());
        Assert.assertEquals(load,Optional.empty());
    }
    @Test
    public void update(){
        Order order=createOrder();
        Order saved= orderRepository.save(order);
        Optional<Order> load= orderRepository.findById(saved.getId());
        load.get().setTablenumber(5);
        Order saved2= orderRepository.save(load.get());
        Optional<Order> load2= orderRepository.findById(saved2.getId());
        Assert.assertNotNull(load2);
        Assert.assertEquals(load2.get().getTablenumber(),5);
    }
    private Order createOrder(){
        Order order=new Order();
        order.setFoods("Food");
        order.setComments("Comments");
        order.setFullname("Fullname");
        order.setPhonenumber("2131231");
        order.setTablenumber(3);
        return  order;
    }
}