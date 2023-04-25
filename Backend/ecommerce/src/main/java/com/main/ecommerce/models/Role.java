package com.main.ecommerce.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity @Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Role {
    private Long id;
    private String name;
}
