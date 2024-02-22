package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category") //productCategory is JSON entry and /product-category is the path
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> // Entity to Primary key
{
}
