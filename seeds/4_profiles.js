const faker = require('faker');

const table = 'profiles';
let json = [
  {
    email: 'kevnguy@gmail.com',
    password: 'password',
    firstName: 'Kevin',
    lastName: 'Nguy',
    username: 'kevin',
    phone: '415-395-6852',
    gender: 'male',
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQG-PfInKhvQrw/profile-displayphoto-shrink_200_200/0?e=1529229600&v=beta&t=tKz6QohPp8tpQ98aTxxX6lbVsB9MvJgASjw1nDz4Xwk',
    active: true,
    invited: true,
    verified: true,
  },
];

faker.seed(2018); // generate fake data with a seed to reproduce consistent data
for (let i = 0; i < 19; i++) {
  json.push({
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    phone: faker.phone.phoneNumber('###-###-####'),
    gender: faker.random.boolean() ? 'female' : 'male',
    imageUrl: faker.image.avatar(),
    active: true,
    invited: faker.random.boolean(),
    verified: true,
  })
}

exports.seed = async function(knex) {
  await knex(table).insert(json);
};