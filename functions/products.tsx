// /.netlify/functions/products
const dotenv = require("dotenv");
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });

    const products = response.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        price,
        colors,
        company,
        description,
        featured,
        category,
        images,
        shipping,
      } = fields;
      const { url } = images[0];
      return {
        id,
        name,
        price,
        colors,
        company,
        description,
        featured,
        category,
        image: url,
        shipping,
      };
    });
    console.log(products);
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "There was an Error",
    };
  }
};
