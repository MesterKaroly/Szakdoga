package szakdoga.backend.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import szakdoga.backend.app.module.Food;

@Repository
public interface FoodRepository extends CrudRepository<Food, Integer> {
}
