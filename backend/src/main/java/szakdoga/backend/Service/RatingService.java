package szakdoga.backend.Service;

import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import szakdoga.backend.Repository.RatingRepository;
import szakdoga.backend.app.module.Ratings;

@Service
@SessionScope
@Data
public class RatingService {


    private RatingRepository ratingRepository;

    public Ratings create(Ratings ratings) {
        return ratingRepository.save(ratings);
    }

    public Iterable<Ratings> getAll() {
        return  ratingRepository.findAll();
    }
}
