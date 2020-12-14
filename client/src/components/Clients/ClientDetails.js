import React, {Component} from "react";
import ProgramList from "../Programs/ProgramList";

import axios from "axios";
const API_URL = `http://localhost:5000`

export default class Client extends Component {
    state= {
        client: {},
        programs: []
    }

    componentDidMount(){
        this.getClient();
        this.getPrograms();
    }
    
    getClient(){
        const { params } = this.props.match
        axios.get(`${API_URL}/clients/${params.id}`)
        .then((res)=>{
            this.setState({
                client: res.data
            })
        })
        .catch((err)=>console.log(err));
    };

    getPrograms(){
        const { params } = this.props.match
        axios.get(`${API_URL}/programs/clients/${params.id}`)
        .then((res)=>{
            this.setState({
                programs: res.data
            })
        })
        .catch((err)=>console.log(err));
    };

    render(){
        const programs = this.state.programs;
        console.log(programs);
        console.log(this.props.match);
        const {id, name, dob, address, city, country, phone} = this.state.client;
        return (
            <div className="client">
                <div className="client-details">
                    <h2 className="client-details__header">Client Details</h2>

                    <div className="client-details__container">
                        <h3 className="client-details__label">Name: </h3>
                        <p className="client-details__name">{name}</p>
                    </div>
                    <div className="client-details__container">
                        <h3 className="client-details__label">Address: </h3>
                        <p className="client-details__address">{address + ", " + city + ", "}</p>
                        <p className="client-details__address">{country}</p>
                    </div>
                    <div className="client-details__container">
                        <h3 className="client-details__label">Phone:</h3>
                        <p className="client-details__contact">{phone}</p>
                    </div>
                </div>
                <div className="client-programs">
                    <h3 className="client-programs__header">Programs</h3>
                    <ProgramList data={this.state.programs}/>
                </div>
            </div>
        )
    }
}