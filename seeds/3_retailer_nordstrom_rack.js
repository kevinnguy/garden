const retailer = 'Nordstrom Rack';
const table = 'retailer_category_links';

const dressesCategories = [
  {
    name: 'casual',
    path: 'shop/Women/Clothing/Dresses/Casual',
  },
  {
    name: 'cocktail & party',
    path: 'shop/Women/Clothing/Dresses/Cocktail%20&%20Party',
  },
  {
    name: 'formal',
    path: 'shop/Women/Clothing/Dresses/Formal',
  },
];

exports.seed = async function(knex) {
  await knex(table).del();

  const retailer = await knex('retailers').where({
    name: retailer,
  }).first();

  const promises = dressesCategories.map(async obj => {
    const { name, path } = obj;

    const category = await knex('categories').where({
      name,
    }).first();

    return {
      path,
      hostname: retailer.hostname,
      scheme: retailer.scheme,
      retailerId: retailer.id,
      category_id: category.id,
    };
  });

  const json = await Promise.all(promises);
  await knex(table).insert(json);
};
