package szakdoga.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Service.RatingService;
import szakdoga.backend.app.module.Ratings;

@EnableAutoConfiguration
@Controller
@RequestMapping("api/rating")
@EnableWebMvc
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
