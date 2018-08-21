package szakdoga.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szakdoga.backend.Service.RatingService;
import szakdoga.backend.app.module.Ratings;

@RestController
@RequestMapping("api/rating")
public class RatingController {

    private final RatingService ratingService;

    @Autowired
    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    @GetMapping("/get")
    public ResponseEntity<Iterable<Ratings>> getAllRatings(){
        Iterable<Ratings> list=ratingService.getAll();
        return ResponseEntity.ok(list);
    }
    @PostMapping("/add")
    public  ResponseEntity<Ratings> create(@RequestBody Ratings ratings){
        Ratings saved=ratingService.create(ratings);
        return ResponseEntity.ok(saved);
    }

}
