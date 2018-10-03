package szakdoga.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Repository.ReservationRepository;
import szakdoga.backend.app.module.Reservation;

@Service
@SessionScope
@EnableAutoConfiguration
@EnableWebMvc
public class ReservationService {

    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public Iterable<Reservation> getAll() {
        return reservationRepository.findAll();
    }

    public void delete(Long id) {
        reservationRepository.deleteById(id);
    }

    public Reservation create(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
}
