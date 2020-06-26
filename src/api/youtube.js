import axios from "axios";

export const KEY = 'AIzaSyAKEYETvrChHs3oIDB1NH_RFXSXAwNha1Y';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
})


