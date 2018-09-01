package szakdoga.backend.app.module;

import lombok.Data;

import javax.persistence.*;

@Data
@MappedSuperclass
class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Version
    private int version;
}
