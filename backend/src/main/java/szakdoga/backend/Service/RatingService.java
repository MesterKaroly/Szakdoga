package szakdoga.backend.Service;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import szakdoga.backend.Repository.RatingRepository;
import szakdoga.backend.app.module.Ratings;

@Service
@SessionScope
@EnableAutoConfiguration
@EnableWebMvc
public class RatingService {

    private final RatingRepository ratingRepository;

    @Autowired
    public RatingService(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    public Ratings create(Ratings ratings) {
        return ratingRepository.save(ratings);
    }

    public Iterable<Ratings> getAll() {
        return  ratingRepository.findAll();
    }
}
