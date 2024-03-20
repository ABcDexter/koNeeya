package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin("http://localhost:4200") // accept calls from web browser scripts for this origin
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category") //productCategory is JSON entry and /product-category is the path
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> // Entity to Primary key
{
}
