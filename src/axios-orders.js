import axios from "axios";

const instance = axios.create({
   baseURL: 'https://react-burger-builder-58b35.firebaseio.com/'
});

export default instance;