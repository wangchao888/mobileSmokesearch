import api from '../api';
let serverurl = api.defaults.baseURL;

export const query = params => { 
	return api.post(serverurl+'/companyintro',params).then(res => res.data) 
};