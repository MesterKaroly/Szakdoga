package szakdoga.backend.app.module;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "RESERVATION")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
public class Reservation extends BaseEntity {

    @Column(nullable = false)
    private String fullname;
    @Column(nullable = false)
    private String phonenumber;
    @Column
    private String comments;
    @Column(nullable = false)
    private Timestamp dates;
    @Column
    private int tablenumber;
}
