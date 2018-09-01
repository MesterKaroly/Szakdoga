package szakdoga.backend.app.module;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "FOOD")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
public class Food  extends BaseEntity{

    @Column(nullable = false)
    private String names;
    @Column(nullable = false)
    private String ingredients;
    @Column(nullable = false)
    private int price;

    @JoinColumn
    @ManyToOne(targetEntity = Order.class)
    private Order order;

}
