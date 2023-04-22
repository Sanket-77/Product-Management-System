package com.code.Product_management.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Builder(setterPrefix = "with",toBuilder = true)
@ToString
@Document("product")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {

    @Id
    private String id;
    private String productName;
    private String description;
    private String color;
    private String price;
    private String status;
}
