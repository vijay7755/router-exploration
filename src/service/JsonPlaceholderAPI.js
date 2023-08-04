import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers:{
    //     Authorization: 'Client-ID FTyRDZQYq3CL2skMZcobUP1oFs4r13ZHmfMujIpPaek'
    // }
});