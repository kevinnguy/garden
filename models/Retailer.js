const { Model } = require('objection');

class Retailer extends Model {
  static get tableName() {
    return 'retailers';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['title', 'price', 'retailerURLPath', 'retailerId'],

      properties: {
        id: { type: 'string', nullable: false, primary: true },
        name: { type: 'string', nullable: false, minLength: 1, maxLength: 500 },
        logoURL: { type: 'string' },
        hostname: { type: 'string', nullable: false, minLength: 1, maxLength: 500 },
        path: { type: 'string '},
        scheme: { type: { enum: ['http', 'https'] } },
      },
    };
  }
}

module.exports = Retailer;