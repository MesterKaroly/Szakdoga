package szakdoga.backend.Service;

import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import szakdoga.backend.Repository.ReservationRepository;
import szakdoga.backend.app.module.Reservation;

@Service
@SessionScope
@Data
public class ReservationService {

    private ReservationRepository reservationRepository;

    public Iterable<Reservation> getAll() {
        return reservationRepository.findAll();
    }

    public void delete(int id) {
        reservationRepository.deleteById(id);
    }

    public Reservation create(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
}
