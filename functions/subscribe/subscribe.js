
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const fetch = require('node-fetch');


exports.handler = async (event, context) => {
  const formId = process.env.CK_FORM_ID;
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
  const {firstName, email} = JSON.parse(event.body)

  if(event.HttpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'applicationa/json',
      },
      body: JSON.stringify({
        api_key: process.env.CK_API_KEY,
        email,
        first_name: firstName
      })
    })
    .then(res => res.json())
    .catch(error => {
      throw new Error(error);
    })

    return{
      statusCode: 301,
      headers: {
        Location: '/success/'
      },
      body: 'redirecting...',
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error.message) }
  }
}

