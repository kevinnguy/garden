const retailer = 'H&M';
const table = 'retailer_category_links';

const dressesCategories = [
  {
    name: 'casual',
    path: 'products/ladies/dresses/shortdresses',
  },
  {
    name: 'casual',
    path: 'products/ladies/dresses/mididresses',
  },
  {
    name: 'cocktail & party',
    path: 'products/ladies/dresses/partydresses',
  },
  {
    name: 'cocktail & party',
    path: 'products/ladies/dresses/maxidresses',
  },
  {
    name: 'cocktail & party',
    path: 'products/ladies/dresses/cocktail-dresses',
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
