import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3000',
	responseType: 'json',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'test',
		'X-Test': 'testing'
	}
});


export default api;