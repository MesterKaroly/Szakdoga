package szakdoga.backend.app.module;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "USERS")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
public class Food  extends BaseEntity{

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String ingredients;
    @Column(nullable = false)
    private int price;


}
