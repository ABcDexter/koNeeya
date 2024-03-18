package com.luv2code.ecommerce.config;

import com.luv2code.ecommerce.entity.Product;
import com.luv2code.ecommerce.entity.ProductCategory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.hibernate.annotations.ManyToAny;
//import org.hibernate.type.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.Set;
import java.util.List;
/*
import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.Metamodel;
*/

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private EntityManager entityManager;
        @Autowired
        public MyDataRestConfig(EntityManager theEntityManager){
            entityManager = theEntityManager;
        }


    @Override
    @ManyToAny
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        HttpMethod[] theUnsupportedActions = {HttpMethod.DELETE, HttpMethod.POST, HttpMethod.PUT};

        //disable HTTP methods for Product : PUT, POST, and DELETE
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        //disable HTTP methods for ProductCategory : PUT, POST, and DELETE
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
        // call an internal helper method
        exposeIds(config);

        }
        private void exposeIds(RepositoryRestConfiguration config){
            // expose entity ids
            //

            // - get a list of all the entity class from the entity manager
            //Set< EntityType<?> > entities = entityManager.getMetamodel().getEntities();
            Set<jakarta.persistence.metamodel.EntityType<?>> entities = entityManager.getMetamodel().getEntities();

            // - create an array of the entity types
            List<Class> entityClasses = new ArrayList<>();

            // - get the entity types for the entities\
            for (EntityType<?> tempEntityType : entities){
                entityClasses.add(tempEntityType.getJavaType());
            }

            // - expose the entity ids for the array of the entityDmain types
            Class[] domainTypes = entityClasses.toArray(new Class[0]);
            config.exposeIdsFor(domainTypes);
        }

}
