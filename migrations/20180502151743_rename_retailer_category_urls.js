exports.up = async function(knex) {
  await knex.schema.renameTable('retailer_category_urls', 'retailer_category_links');
};

exports.down = async function(knex) {
  await knex.schema.renameTable('retailer_category_links', 'retailer_category_urls');
};
