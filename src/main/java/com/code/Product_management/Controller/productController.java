package com.code.Product_management.Controller;

import com.code.Product_management.Model.Product;
import com.code.Product_management.Service.productServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class productController {
    @Autowired
    productServiceImpl productService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/saveProduct")
    public ResponseEntity<?> saveProduct(@RequestBody Product product){
        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/product")
    public ResponseEntity<?> getAllProduct(){
        return new ResponseEntity<>(productService.getAllProduct(),HttpStatus.OK);
    }

//    @GetMapping("/product/productName")
//    public ResponseEntity<?> getProductByName(@PathVariable String productName){
//        return new ResponseEntity<>(productService.findByproductName(productName),HttpStatus.OK);
//    }

    @GetMapping("product/{id}")
    public ResponseEntity<?> getProductById(@PathVariable String id){
        return new ResponseEntity<>(productService.getProductById(id),HttpStatus.OK);
    }

    @GetMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable String id){
        return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
    }

    @PostMapping("/editProduct")
    public ResponseEntity<?> editProduct(@RequestBody Product product){
        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }
}
