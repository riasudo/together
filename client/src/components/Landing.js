import React, {Component} from "react";
import ClientCard from "./Clients/ClientCard";

import Hero from "../Assets/Images/capstone_hero.jpg";
import axios from "axios";
const API_URL = `http://localhost:5000`

export default class Landing extends Component {
    state = {
        clients: [],
        greeting: true
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

    toggleGreeting=(e)=>{
        this.setState({
            greeting: !this.state.greeting
        })
    };
    render(){
        const clientList = this.state.clients;
        return(
            <div className="landing-page">
                <div className="landing-page__image">
                    <img src={Hero} alt="humans socializing" className="landing-page__hero"/>
                </div>
                {this.state.greeting
                ?   <div className="landing-page__greeting">
                        <h2 className="landing-page__header">WELCOME</h2>
                        <button className="landing-page__toggle" onClick={e=>this.toggleGreeting(e)}>V</button>
                    </div>
                :   <div className="landing-page__menu">
                        <h2 className="landing-page__header">Who are we working with today?</h2>
                        <ul className="client-list">
                        {clientList && clientList.map((client)=>{
                            return(
                                <ClientCard data={client} key={client.id}/>
                            )
                        })}
                        </ul>
                    </div>
                }
                
                
                
            </div>   
        )
    }
}