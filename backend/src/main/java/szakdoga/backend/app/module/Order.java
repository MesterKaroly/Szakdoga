package szakdoga.backend.app.module;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name = "USERS")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
public class Order extends BaseEntity {

    @Column(nullable = false)
    private  User user;
    @Column(nullable = false)
    private String comments;
    @Column(nullable = false)
    private ArrayList<Food> foods;

}
