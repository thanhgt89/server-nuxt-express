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

router.get('/home', async(req, res) => {
  db.task(t => {
    return t.batch([
        Display.displayMenu(1),
        Category.getCategory(1),
        Product.generalTopSaleProduct(1, 6),
        // Product.getCategoryById
        Product.getProductAllCategory(1, 6)
      ])
      .then(data => {
        let display = data[0].filter(item => item.id === 1),
          banner = display[0].banner.filter(item => item.position === 'top'),
          poster = display[0].banner.filter(item => item.position === 'middle'),
          about = display[0].banner.filter(item => item.position === 'about')
        // console.log(data[2]);
        data[2].forEach(item => {
          item.sale = (item.price * (100 - item.sale)) / 100
          item.sale = Product.converPrice(item.sale)
          item.price = Product.converPrice(item.price)
        })
        data[3].forEach(item => {
          // console.log(item.list_product);
          item.list_product.forEach(item1 => {
            item1.sale = (item1.price * (100 - item1.sale)) / 100
            item1.sale = Product.converPrice(item1.sale)
            item1.price = Product.converPrice(item1.price)
            item1.path = getSlug(item1.name + '-' + item1.id, {
              lang: 'vn'
            })
            console.log(item.list_product);

            // console.log(item1.path);
          })
          res.json({
            menu: data[0],
            banner: banner,
            about: about,
            poster: poster,
            category: data[1],
            topProduct: data[2],
            product: data[3]

          })
        })
      })
      .catch(err => {
        throw new Error('home page', err)
      })
  })
})

export default router