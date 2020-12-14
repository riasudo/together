import React, {Component} from "react";
import ClientCard from "./Clients/ClientCard";
// import { getClients } from "./Axios/AxiosCalls";
import axios from "axios";
const API_URL = `http://localhost:5000`

export default class Landing extends Component {
    state = {
        clients: []
    }


    componentDidMount() {
        this.getClients()
    }

    getClients = () => {
        axios.get(`${API_URL}/clients`)
        .then((res)=>{
            this.setState({
                clients: res.data
            })
        })
        .catch((err)=>console.log(err));
    };

    render(){
        const clientList = this.state.clients;
        return(
            <div className="landing-page">
                <h2 className="landing-page__header">Who are we working with today?</h2>
                <ul className="client-list">
                {clientList && clientList.map((client)=>{
                    return(
                        <ClientCard data={client} key={client.id}/>
                    )
                })}
                </ul>
            </div>   
        )
    }
}