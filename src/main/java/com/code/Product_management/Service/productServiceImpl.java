package com.code.Product_management.Service;

import com.code.Product_management.Model.Product;
import com.code.Product_management.Repository.productRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class productServiceImpl implements productservice {

    @Autowired
    private productRepository productRepo;

    @Override
    public Product saveProduct(Product product) {
        return productRepo.save(product);
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

//    @Override
//    public List<Product> findByproductName(String productName) {
//        return productRepo.findByproductName(productName);
//    }

    @Override
    public Product getProductById(String id) {
        return productRepo.findById(id).get();
    }

    @Override
    public String deleteProduct(String id) {
        Product product = productRepo.findById(id).get();

        if (product != null){
            productRepo.delete(product);
            return "Product Delete Sucessfully";
        }
        return "Something Wrong On Server";
    }
}
