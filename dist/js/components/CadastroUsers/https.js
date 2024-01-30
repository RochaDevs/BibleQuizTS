import axios from 'axios';
const cadastroUsersAPI = axios.create({
    baseURL: 'https://65b904e7b71048505a89fead.mockapi.io/biblioquiz/users'
});
export default cadastroUsersAPI;
