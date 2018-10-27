package szakdoga.backend.Repository;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import szakdoga.backend.app.module.Ratings;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RatingRepositoryTest {


    @Resource
    private RatingRepository ratingRepository;

    @Test
    public void Save(){
        Ratings ratings=createRating();
        Ratings saved=ratingRepository.save(ratings);
        Optional<Ratings> load=ratingRepository.findById(saved.getId());
        Assert.assertEquals(load.get(),ratings);
    }
    @Test
    public void delete(){
        Ratings ratings=createRating();
        Ratings saved=ratingRepository.save(ratings);
        ratingRepository.delete(ratings);
        Optional<Ratings> load=ratingRepository.findById(saved.getId());
        Assert.assertEquals(load,Optional.empty());
    }
    @Test
    public void update(){
        Ratings ratings=createRating();
        Ratings saved=ratingRepository.save(ratings);
        Optional<Ratings> load=ratingRepository.findById(saved.getId());
        load.get().setRatingpoint(5);
        Ratings saved2=ratingRepository.save(load.get());
        Optional<Ratings> load2=ratingRepository.findById(saved2.getId());
        Assert.assertNotNull(load2);
        Assert.assertEquals(load2.get().getRatingpoint(),5);
    }
    private Ratings createRating(){
        Ratings ratings=new Ratings();
        ratings.setComments("Comments");
        ratings.setDates(new Timestamp(2131231));
        ratings.setFullname("Fullname");
        ratings.setRatingpoint(3);
        return  ratings;
    }

}