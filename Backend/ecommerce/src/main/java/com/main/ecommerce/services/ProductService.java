package com.main.ecommerce.services;

import com.main.ecommerce.dtos.ProductDto;
import com.main.ecommerce.exceptions.CrudOperationException;
import com.main.ecommerce.models.Category;
import com.main.ecommerce.models.Product;
import com.main.ecommerce.repositories.CategoryRepository;
import com.main.ecommerce.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<ProductDto> getAllProducts() {
        Iterable<Product> products = productRepository.findAll();
        List<ProductDto> results = new ArrayList<>();

        products.forEach(result -> results.add(ProductDto.builder()
                .id(result.getId())
                .name(result.getName())
                .imageUrl(result.getImageUrl())
                .price(result.getPrice())
                .description(result.getDescription())
                .categoryId(result.getCategory().getId())
                .build()));

        return results;
    }


    public ProductDto getProductById(Integer id) {

        Product product=productRepository.findById(id).orElseThrow(() -> {
            throw new CrudOperationException("Product does not exist");
        });

        return ProductDto.builder()
                .id(product.getId())
                .name(product.getName())
                .categoryId(product.getCategory().getId())
                .price(product.getPrice())
                .imageUrl(product.getImageUrl())
                .description(product.getDescription())
                .build();
    }


    public ProductDto addProduct(ProductDto productDto) {
        Category category = categoryRepository.findById(productDto.getCategoryId()).orElseThrow(()->{
            throw new CrudOperationException("Category does not exist");
        });
        Product product = Product.builder()
                .id(productDto.getId())
                .name(productDto.getName())
                .imageUrl(productDto.getImageUrl())
                .price(productDto.getPrice())
                .description(productDto.getDescription())
                .category(category)
                .build();
        productRepository.save(product);
        productDto.setId(product.getId());
        return productDto;
    }


    public ProductDto removeProduct(Integer id){
        Product product =  productRepository.findById(id).orElseThrow(()->{
            throw new CrudOperationException("Product does not exist");
        });
        productRepository.deleteById(id);
        return ProductDto.builder()
                .id(product.getId())
                .categoryId(product.getCategory().getId())
                .price(product.getPrice())
                .name(product.getName())
                .imageUrl(product.getImageUrl())
                .description(product.getDescription())
                .build();
    }

    public ProductDto updateProduct(Integer id, ProductDto productDto){
        Product product=productRepository.findById(id).orElseThrow(() -> {
            throw new CrudOperationException("Product does not exist");
        });
        Category category = categoryRepository.findById(productDto.getCategoryId()).orElseThrow(()->{
            throw new CrudOperationException("Category does not exist");
        });
        product.setPrice(productDto.getPrice());
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setImageUrl(productDto.getImageUrl());
        product.setCategory(category);
        productRepository.save(product);
        productDto.setId(product.getId());
        return productDto;
    }

}
