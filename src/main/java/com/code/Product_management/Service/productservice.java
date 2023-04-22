package com.code.Product_management.Service;

import com.code.Product_management.Model.Product;

import java.util.List;

public interface productservice {
    public Product saveProduct (Product product);
    public List<Product> getAllProduct();
//    public List<Product> findByproductName(String productName);
    public Product getProductById(String id);
    public String deleteProduct(String id);
}
