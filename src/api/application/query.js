import api from '../api';
let serverurl = api.defaults.baseURL;

export const query = params => { 
	return api.post(serverurl+'/application',params).then(res => res.data) 
};