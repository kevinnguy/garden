exports.up = async function(knex) {
  await knex.schema.table("retailers", table => {
    table.renameColumn("logoURL", "logo_url");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("retailers", table => {
    table.renameColumn("logo_url", "logoURL");
  });
};
