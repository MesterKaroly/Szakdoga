package szakdoga.backend.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import szakdoga.backend.app.module.Basket;

import java.util.List;

@Repository
public interface BasketRepository extends CrudRepository<Basket,Long> {

    List<Basket> findAllByName(String name);

    void deleteAllByName(String name);
}
