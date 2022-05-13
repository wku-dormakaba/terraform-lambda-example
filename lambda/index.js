const dayjs = require('dayjs');

module.exports.handler = async (event) => {  
  const now = dayjs().format();
  console.log(now)
  const responseMessage = `Hello World ${now}`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      message: responseMessage,
    },
  }
}