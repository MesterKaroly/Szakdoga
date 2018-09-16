package szakdoga.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Service.ReservationService;
import szakdoga.backend.app.module.Reservation;

@EnableAutoConfiguration
@Controller
@RequestMapping("api/reservation")
@EnableWebMvc
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/all")
    public ResponseEntity<Iterable<Reservation>> getAllReserv(){
        Iterable<Reservation> list = reservationService.getAll();
        return  ResponseEntity.ok(list);
    }
    @DeleteMapping("/delete/{id}")
    public  ResponseEntity<Reservation> deleteReserv(@PathVariable Long id){
        reservationService.delete(id);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/add")
    public ResponseEntity<Reservation> create(@RequestParam Reservation reservation){
        Reservation saved=reservationService.create(reservation);
        return ResponseEntity.ok(saved);
    }
}
