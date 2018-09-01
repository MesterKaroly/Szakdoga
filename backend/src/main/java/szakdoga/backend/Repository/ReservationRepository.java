package szakdoga.backend.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import szakdoga.backend.app.module.Reservation;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation, Long> {
}
