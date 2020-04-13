import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/76341',
    headers: {
        Authorization: 'Bearer 8331c0e63f02372a473a46db041c13db'
    }
})