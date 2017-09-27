const {
  db,
} = require('../pgp')


class Display {
  constructor(db) {
    this.db = db
  }

  displayMenu(status) {
    return this.db.any(
      `SELECT menu.*, 
      ( array ( 
        SELECT json_build_object('id', b.menu_id ,'name', b.name, 'url', b.url, 'position',b.position, 'description', b.description) 
        FROM banner as b 
        WHERE b.status = 1 AND b.menu_id = menu.id
         ) )AS banner 
        FROM menu 
        WHERE menu.status = $1 
        ORDER BY menu.id `, status)
  }
  displayImagePageById(id) {
    return this.db.manyOrNone(`
      SELECT b.* FROM banner as b
      JOIN menu On menu.id = b.menu_id
      WHERE menu.id = $1`, id)
  }

}

module.exports = new Display(db)