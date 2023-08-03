//domain/.netlify/functions/create-payment-intent

exports.handler = async function (event, context) {
  console.log(event.body);

  return {
    statusCode: 200,
    body: "Payment intent",
  };
};
