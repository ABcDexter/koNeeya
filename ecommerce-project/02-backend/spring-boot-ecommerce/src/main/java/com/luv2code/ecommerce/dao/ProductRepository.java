package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.data.domain.Pageable;

@CrossOrigin("http://localhost:4200") // accept calls from web browser scripts for this Origin
public interface ProductRepository extends JpaRepository<Product, Long> // Entity to Primary key
{
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
    // Spring runs "SELECT * FROM product where category_id=?" query // we can also give custom query using @Query annotation

    Page<Product> findByNameContaining(@Param("name") String name, Pageable page);
    // SELECT * FROM Product p WHERE p.name LIKE CONCAT('%', :name, '%');
}
