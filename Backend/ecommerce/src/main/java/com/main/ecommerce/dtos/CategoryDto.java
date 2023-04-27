package com.main.ecommerce.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class CategoryDto {
    private Integer id;
    private @NotNull String categoryName;
    private @NotNull String description;
    private @NotNull String imageUrl;
}
