const table = 'retailers';

const json = [
  {
    hostname: 'www.nordstromrack.com',
    path: '',
    scheme: 'https',
    name: 'Nordstrom Rack',
    logo_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/wApR6wXffwYiawStw5RBKw/o.jpg',
  }
];

exports.seed = async function(knex) {
  await knex(table).del();
  await knex(table).insert(json);
};
