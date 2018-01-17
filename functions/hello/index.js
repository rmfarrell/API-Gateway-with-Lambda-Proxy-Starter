exports.handle = function(event, context, callback) {
  const response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      input: {
        event: event,
        context: context,
      },
    }),
  };
  callback(null, response);
};
