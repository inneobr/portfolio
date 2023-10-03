import axios from 'axios';
import services from './Services';

class ApiService {
  getSocial() {
    return axios.get(`${ services.url }v1/social`);
  }

  getMenu() {
    return axios.get(`${ services.url }v1/menu`);
  }
}
export default new ApiService();