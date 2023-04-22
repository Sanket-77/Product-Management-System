package com.code.Product_management.Repository;

import com.code.Product_management.Model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface productRepository extends MongoRepository<Product, String> {

//    List<Product> findByproductName(String email);

}
