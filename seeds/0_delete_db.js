const tables = [
  'categories',
  'retailers',
  'retailer_category_links',
  'products',
  'product_images',
]

exports.seed = async function(knex) {
  for (let table of tables) {
    await knex(table).del();
  }
};