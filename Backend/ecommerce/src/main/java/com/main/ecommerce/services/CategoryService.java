package com.main.ecommerce.services;

import com.main.ecommerce.dtos.CategoryDto;
import com.main.ecommerce.exceptions.CrudOperationException;
import com.main.ecommerce.models.Category;
import com.main.ecommerce.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<CategoryDto> getAllCategories() {

        Iterable<Category> categories = categoryRepository.findAll();
        List<CategoryDto> categoryDtos = new ArrayList<>();

        categories.forEach(category ->
                categoryDtos.add(CategoryDto.builder()
                                .id(category.getId())
                                .categoryName(category.getCategoryName())
                                .description(category.getDescription())
                                .imageUrl(category.getImageUrl())
                                .build())
        );

        return categoryDtos;
    }

    public CategoryDto getCategoryById(Integer id) {

        Category category=categoryRepository.findById(id).orElseThrow(() -> {
            throw new CrudOperationException("Product does not exist");
        });

        return CategoryDto.builder()
                .id(category.getId())
                .imageUrl(category.getImageUrl())
                .description(category.getDescription())
                .categoryName(category.getCategoryName())
                .build();
    }

    public CategoryDto updateCategory(Integer id, CategoryDto categoryDto){
        Category category=categoryRepository.findById(id).orElseThrow(() -> {
            throw new CrudOperationException("Category does not exist");
        });
        category.setDescription(categoryDto.getDescription());
        category.setCategoryName(categoryDto.getCategoryName());
        category.setImageUrl(categoryDto.getImageUrl());
        categoryRepository.save(category);
        categoryDto.setId(category.getId());
        return categoryDto;
    }

    public CategoryDto addCategory(CategoryDto categoryDto) {
        Category category = Category.builder()
                .id(categoryDto.getId())
                .categoryName(categoryDto.getCategoryName())
                .imageUrl(categoryDto.getImageUrl())
                .description(categoryDto.getDescription())
                .build();
        categoryRepository.save(category);
        categoryDto.setId(category.getId());
        return categoryDto;
    }

    public CategoryDto removeCategory(Integer id){
        Category category =  categoryRepository.findById(id).orElseThrow(()->{
            throw new CrudOperationException("Category does not exist");
        });
        categoryRepository.deleteById(id);
        return CategoryDto.builder()
                .id(category.getId())
                .imageUrl(category.getImageUrl())
                .description(category.getDescription())
                .categoryName(category.getCategoryName())
                .build();
    }
    public Optional<Category> readCategory(Integer categoryId) {
        return categoryRepository.findById(categoryId);
    }
}
