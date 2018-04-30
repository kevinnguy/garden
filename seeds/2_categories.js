const table = 'categories';

const womenJSON = {
  name: 'women',
  gender: 'female',
};

const parentCategories = [
  'dresses',
];

const dressesCategories = [
  'casual',
  'cocktail & party',
  'formal',
];



exports.seed = async function(knex) {
  await knex(table).del();
  await knex(table).insert(womenJSON);

  const womenCategory = await knex(table).where({
    name: 'women',
  }).first();
  const parentCategoriesJSON = parentCategories.map(name => ({
    name,
    gender: 'female',
    parentId: womenCategory.id,
  }));
  await knex(table).insert(parentCategoriesJSON);

  const dressesParentCategory = await knex(table).where({
    name: 'dresses',
  }).first();
  const dressesCategoriesJSON = dressesCategories.map(name => ({
    name,
    gender: 'female',
    parentId: dressesParentCategory.id,
  }));
  await knex(table).insert(dressesCategoriesJSON);
};
