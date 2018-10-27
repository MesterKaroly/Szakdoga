package szakdoga.backend.Repository;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import szakdoga.backend.app.module.Reservation;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Optional;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ReservationRepositoryTest {

    @Resource
    private ReservationRepository reservationRepository;

    @Test
    public void Save(){
        Reservation reservation=createReservation();
        Reservation saved=reservationRepository.save(reservation);
        Optional<Reservation> load=reservationRepository.findById(saved.getId());
        Assert.assertEquals(load.get(),reservation);
    }
    @Test
    public void delete(){
        Reservation reservation=createReservation();
        Reservation saved=reservationRepository.save(reservation);
        reservationRepository.delete(reservation);
        Optional<Reservation> load=reservationRepository.findById(saved.getId());
        Assert.assertEquals(load,Optional.empty());
    }
    @Test
    public void update(){
        Reservation reservation=createReservation();
        Reservation saved=reservationRepository.save(reservation);
        Optional<Reservation> load=reservationRepository.findById(saved.getId());
        load.get().setPhonenumber("11111111");
        Reservation saved2=reservationRepository.save(load.get());
        Optional<Reservation> load2=reservationRepository.findById(saved2.getId());
        Assert.assertNotNull(load2);
        Assert.assertEquals(load2.get().getPhonenumber(),"11111111");
    }
    private Reservation createReservation(){
        Reservation reservation=new Reservation();
        reservation.setTablenumber(1);
        reservation.setComments("Comments");
        reservation.setDates(new Timestamp(2131312313));
        reservation.setFullname("Fullname");
        reservation.setPhonenumber("Phonenumber");
        return  reservation;
    }

}