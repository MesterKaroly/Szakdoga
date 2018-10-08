package szakdoga.backend.app.module;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "ORDERS")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
public class Order extends BaseEntity {

    @Column
    private  String fullname;

    @Column
    private String phonenumber;

    @Column(nullable = false)
    private String comments;

    @Column
    private int tablenumber;

    @Column
    private String foods;

}
