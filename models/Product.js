const { Model } = require('objection');

class Product extends Model {
  static get tableName() {
    return 'products';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['title', 'price', 'retailerURLPath', 'retailerId'],

      properties: {
        id: { type: 'string', nullable: false, primary: true },
        title: { type: 'string', nullable: false, minLength: 1, maxLength: 500 },
        description: { type: 'string' },
        promo: { type: 'string' },
        price: { type: 'number', nullable: false, minimum: 0 },
        priceOld: { type: 'number', minimum: 0 },
        retailerURLPath: { type: 'string', nullable: false },
        retailerId: { type: 'string', nullable: false },
        expired: { type: 'boolean' },
        categoryId: { type: 'string', nullable: false },
      },
    };
  };

  // static relationMappings = {
  //   retailer: {
  //     relation: Model.BelongsToOneRelation,
  //     modelClass: __dirname + '/Retailer',
  //     join: {
  //       from: 'products.retailerId',
  //       to: 'retailers.id',
  //     },
  //   },
  // };
}

module.exports = Product;