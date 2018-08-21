package szakdoga.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szakdoga.backend.Service.ReservationService;
import szakdoga.backend.app.module.Reservation;

@RestController
@RequestMapping("api/reservation")
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
    public  ResponseEntity<Reservation> deleteReserv(@PathVariable int id){
        reservationService.delete(id);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/add")
    public  ResponseEntity<Reservation> create(@RequestBody Reservation reservation){
        Reservation saved=reservationService.create(reservation);
        return ResponseEntity.ok(saved);
    }
}
