import {
  Router
} from 'express'

const router = Router()
const {
  db,
} = require('../pgp')
const Display = require('../models/display')
const Category = require('../models/category')
const Product = require('../models/product')
const getSlug = require('speakingurl')

router.get('/product', async(req, res) => {
  let currentPage = req.query.page - 1 || 0
  // console.log('req', req.query.page);
  // console.log('curr', currentPage);
  try {
    let total = await Product.countProduct()
    let menu = await Display.displayMenu(1)
    let banner = menu[2].banner.filter(item => item.position === 'top')
    let category = await Category.getCategory(1)
    let product = await Product.showProductByPage(12, currentPage)
    // Conver url with category
    // category.forEach(item => {
    //   item.path = getSlug(item.name + '-' + item.id, {lang: 'vn'})
    //   // console.log(item.path);
    //   item.forEach(item1 => {
    //     item1.path = getSlug(item1.name + '-' + item1.id, {lang: 'vn'})
    //   })
    // })
    // Convert Price and url  with product
    
    product.forEach(item => {
      // console.log(item);
      item.sale = (item.price * (100 - item.sale)) / 100
      item.sale = Product.converPrice(item.sale)
      item.price = Product.converPrice(item.price)
      item.path = getSlug(item.name + '-' + item.code, {
        lang: 'vn'
      })
    })
    // console.log(total);
    let pages = Math.ceil(total.count / 12)
    // console.log(pages);
    res.json({
      menu: menu,
      banner: banner,
      category: category,
      product: product,
      pages: pages
    })

  } catch (error) {
    throw new Error('show all product', error)
  }

})
router.get('/product/:category', async(req, res) => {
  // console.log(req.params.id);
  // console.log(req.params.id);
  // let title = req.params.id
  // let id = title.slice(title.lastIndexOf('-') + 1)
  let id = req.params.category
  // console.log(req.query);
  let currentPage = req.query.page - 1 || 0
  // console.log('current Page: ====>', currentPage);
  
  // console.log(id);
  try {
    let total = await Product.countProductByCategory(id),
      menu = await Display.displayMenu(1),
      category = await Category.getCategory(1),
      product = await Product.showProductByIdCategory(id, 12, currentPage),
      banner = menu[2].banner.filter(item => item.position === 'top'),
      pages = Math.ceil(total.count / 12)
      // console.log(product);
      // console.log('count', total);
      console.log('page', pages);
    // Conver url with category
    category.forEach(item => {
      item.path = getSlug(item.name + '-' + item.id, {lang: 'vn'})
      // console.log(item.path);
      item.sub_category.forEach(item1 => {
        item1.path = getSlug(item1.name + '-' + item1.id, {lang: 'vn'})
      })
    })
    // Convert Price and url  with product
    product.forEach(item => {
      item.sale = (item.price * (100 - item.sale)) / 100
      item.sale = Product.converPrice(item.sale)
      item.price = Product.converPrice(item.price)
      item.path = getSlug(item.name + '-' + item.code, {
        lang: 'vn'
      })
    })
    // console.log(pages);
    res.json({
      menu: menu,
      banner: banner,
      category: category,
      product: product,
      pages: pages
    })

  } catch (error) {
    throw new Error('show product by category', error)
  }
})


router.get('/product/:category/:subCategory', (req, res) => {
  console.log(req.params);
  res.json(req.params)
})






export default router