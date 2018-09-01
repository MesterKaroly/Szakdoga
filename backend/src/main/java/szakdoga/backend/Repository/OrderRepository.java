package szakdoga.backend.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import szakdoga.backend.app.module.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {
}
