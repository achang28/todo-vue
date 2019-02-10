import qs from 'qs';
const CLIENT_ID = '0a78243cab7b336';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login: function() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    const url = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    window.location = url;
  }
};
