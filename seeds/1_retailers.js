const table = 'retailers';
const json = [
  {
    hostname: 'www.nordstromrack.com',
    path: '',
    scheme: 'https',
    name: 'Nordstrom Rack',
    logoURL: 'https://s3-media1.fl.yelpcdn.com/bphoto/wApR6wXffwYiawStw5RBKw/o.jpg',
  },
  {
    hostname: 'www.hm.com/us',
    path: '',
    scheme: 'https',
    name: 'H&M',
    logoURL: 'https://yt3.ggpht.com/a-/AJLlDp3IIl__PTbnEJxrsD9HtpHki9ovwmuCQY7shA=s900-mo-c-c0xffffffff-rj-k-no',
  },
];

exports.seed = async function(knex) {
  await knex(table).del();
  await knex(table).insert(json);
};
