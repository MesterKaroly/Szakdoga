package szakdoga.backend.app.module;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Basket")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
public class Basket extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String foodname;

    @Column(nullable = false)
    private String foodingredients;

    @Column(nullable = false)
    private int price;
}
