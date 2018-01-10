// export const API_BASE_URL =
//     process.env.REACT_APP_API_BASE_URL || 'https://hopinion-server.herokuapp.com/api';
//     process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';


// in netlify this env variables exists
// REACT_APP_API_BASE_URL
// set it equal to your Heroku url


export const API_BASE_URL = process.env.NODE_ENV == 'production'
    ? 'https://hopinion-server.herokuapp.com/api' 
    : 'http://localhost:8080/api'; 