exports.seed = async function(knex) {
  await knex('products').del();
  await knex('product_images').del();
};