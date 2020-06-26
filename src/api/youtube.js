import axios from "axios";


//INSERT YOUR OWN API - KEY HERE:
export const KEY = 'AIzaSyAK............';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
})


