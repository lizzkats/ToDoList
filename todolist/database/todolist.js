const db = require('./dbconnection')

const Items = {
	add: ( id, description ) => db.one( `INSERT INTO item ( id,description ) VALUES ( '${id}', '${description}' ) RETURNING id` ),
	getAll: () => db.any( `SELECT * FROM item` ),
	getById: id => db.one( `SELECT * FROM item WHERE id = ${id}` ),
	update: ( id, description ) => {
	          let sqlString =                       `BEGIN TRANSACTION;`
	          if( id != '' ) sqlString +=         `UPDATE item SET id='${id}' WHERE id = ${id};`
	          if( description != '') sqlString +=  `UPDATE item SET description='${description}' WHERE id = ${id};`
	          sqlString +=                          `COMMIT;`
	          db.none( sqlString )},
	delete: id => db.none( `DELETE FROM item WHERE id = ${id}` )
	
}

module.exports = { Items }