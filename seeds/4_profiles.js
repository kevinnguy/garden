const faker = require('faker');
const argon2 = require('argon2');

const table = 'profiles';
let json = [
  {
    email: 'kevnguy@gmail.com',
    password: '$argon2i$v=19$m=4096,t=3,p=1$jrK2RMmE/YxJHt+Kn630oQ$3mSeePcHsysPfLOYPLKqXVi4o8ZUNBFDHCdhJ9OspVg',
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

exports.seed = async function(knex) {
  for (let i = 0; i < 19; i++) {
    const firstName = faker.name.firstName();
    const password = await argon2.hash(firstName);

    json.push({
      email: faker.internet.email(),
      password,
      firstName,
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

  await knex(table).insert(json);
};