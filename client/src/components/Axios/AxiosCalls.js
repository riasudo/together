import axios from "axios";
const API_URL = `http://localhost:5000`

export const getClients = () => {
    axios.get(`${API_URL}/clients`)
    .then((res)=>{
        this.setState({
            students: res.data
        })
    })
    .catch((err)=>console.log(err));
};

