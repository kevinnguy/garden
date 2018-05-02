const { Model } = require('objection');

class RetailerCategoryLink extends Model {
  static get tableName() {
    return 'retailer_category_links';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['title', 'price', 'retailerURLPath', 'retailerId'],

      properties: {
        id: { type: 'string', nullable: false, primary: true },
        hostname: { type: 'string', nullable: false, minLength: 1, maxLength: 500 },
        path: { type: 'string '},
        scheme: { type: { enum: ['http', 'https'] } },
      },
    };
  }
}

module.exports = RetailerCategoryLink;