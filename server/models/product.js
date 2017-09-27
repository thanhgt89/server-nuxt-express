const {
  db,
} = require('../pgp')

class Products {
  constructor(db) {
    this.db = db
  }

  generalTopSaleProduct(status, limit) {
    return this.db.any(`
        SELECT p.name, p.code, p.price, p.sale, i.url, p.id
        FROM product AS p JOIN product_images AS i ON i.product_id = p.id 
        WHERE p.status = $1 LIMIT $2 `, [status, limit])
  }
  getCategoryById(id, status, limit) {
    return this.db.any(`
        SELECT c.name as title, p.id, p.name, p.price, p.sale, pi.url, ci.url
        FROM product AS p, sub_category AS sc, category AS c, product_images as pi, category_images AS ci 
        WHERE p.sub_category_id = sc.id 
        AND sc.category_id = c.id 
        AND p.id = pi.product_id AND ci.category_id = c.id 
        AND c.id = $1 
        AND p.status = $2 
        LIMIT $3`, [id, status, limit])
  }
  getProductAllCategory(priority, limit) {
    return this.db.any(`
        SELECT c.name, ci.url, ci.position, 
        (array (
             SELECT json_build_object('id', p.id, 'name', p.name, 'price', p.price, 'sale', p.sale, 'image', pi.url) 
                FROM product AS p 
                JOIN product_images AS pi ON pi.product_id = p.id 
                JOIN sub_category AS sc on sc.id = p.sub_category_id 
                JOIN category AS c1 ON c1.id = sc.category_id 
                WHERE pi.priority = $1 AND c.id = sc.category_id LIMIT $2 ) 
            ) as list_product 
        FROM category AS c, category_images as ci 
        WHERE c.id = ci.category_id AND ci.status = 1 
        ORDER BY c.id`, [priority, limit])
  }
  showProductByPage(limit, page) {
    return this.db.any(`
        SELECT p.id, p.name, p.price, p.sale, p.code,
        (ARRAY(
        SELECT json_build_object('url',pi.url) FROM product_images AS pi
            WHERE pi.product_id = p.id
        )) AS images
        FROM product AS p
        WHERE p.id in (select distinct product_id from product_images)
        LIMIT $1 OFFSET $1 * $2
        `, [limit, page])
  }
  countProduct() {
    return this.db.one(`
      select count(distinct product_id ) from product_images
       `)
  }
  countProductByCategory(id) {
    return this.db.one(`
    SELECT count(distinct pi.product_id) FROM product as p 
    JOIN product_images as pi ON pi.product_id = p.id
    JOIN sub_category AS sc ON sc.id = p.sub_category_id
    JOIN category As c ON c.id = sc.category_id
    WHERE c.id = ${id}`)
  }
  showProductByIdCategory(id, limit, page) {
    return this.db.any(`
        SELECT p.id, p.sale, p.price, p.name, p.code,
        (ARRAY (SELECT json_build_object('url', pi.url) 
        FROM product_images AS pi 
        JOIN product AS p1 ON pi.product_id = p1.id 
        WHERE pi.product_id = p.id ) ) AS images 
        FROM product AS p 
        JOIN sub_category as sc ON sc.id = p.sub_category_id
        JOIN category as c ON c.id = sc.category_id
        WHERE p.id in 
            (SELECT pi1.product_id From product as p2 
            JOIN product_images AS pi1 ON pi1.product_id = p2.id 
            GROUP BY pi1.product_id )
        AND c.id = $1    
        ORDER BY p.id 
        LIMIT $2
        OFFSET $2 * $3`, [id, limit, page])
  }
  showProductByIdSubCategory(id, limit, offset) {
    return this.db.any(`
        SELECT p.id, p.sale, p.price, p.name, p.code,
        (ARRAY (SELECT json_build_object('url', pi.url) 
        FROM product_images AS pi 
        JOIN product AS p1 ON pi.product_id = p1.id 
        WHERE pi.product_id = p.id ) ) AS images 
        FROM product AS p 
        JOIN sub_category as sc ON sc.id = p.sub_category_id
        WHERE p.id in 
            (SELECT pi1.product_id From product as p2 
            JOIN product_images AS pi1 ON pi1.product_id = p2.id 
            GROUP BY pi1.product_id )
        AND sc.id = $1  
        ORDER BY p.id 
        LIMIT $2
        OFFSET $3`, [id, limit, offset])
  }
  converPrice(price) {
    return price.toLocaleString('vi-VN');
  }

}

module.exports = new Products(db)