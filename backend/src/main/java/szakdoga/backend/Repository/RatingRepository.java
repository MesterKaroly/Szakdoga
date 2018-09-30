package szakdoga.backend.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import szakdoga.backend.app.module.Ratings;

@Repository
public interface RatingRepository extends CrudRepository<Ratings, Long> {
}
