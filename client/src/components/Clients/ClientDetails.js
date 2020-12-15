import React, {Component} from "react";
import ProgramList from "../Programs/ProgramList";
import ProgramDetails from "../Programs/ProgramDetails";

import axios from "axios";
import AddProgram from "../Programs/AddProgram";
const API_URL = `http://localhost:5000`

export default class Client extends Component {
    state= {
        client: {},
        programs: [],
        toggle: [],

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
        const { params } = this.props.match;
        axios.get(`${API_URL}/programs/clients/${params.id}`)
        .then((res)=>{
            this.setState({
                programs: res.data
            })
        })
        .catch((err)=>console.log(err));
    };

    toggleModal = (e, id) => {
        console.log(this.state.toggle);
        const newToggle = this.state.toggle;
        //!newToggle[id]
        this.setState({
            toggle: newToggle,
        });
    };

    render(){
        const programs = this.state.programs;
        console.log(programs)
        const {id, first_name, last_name, dob, address, city, country, phone} = this.state.client;
        return (
            <div className="client">
                <div className="client-details">
                    <h2 className="client-details__header">Client Details</h2>

                    <div className="client-details__container">
                        <h3 className="client-details__label">Name: </h3>
                        <p className="client-details__name">{first_name} {last_name}</p>
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
                    <ProgramList data={this.state.programs} handleToggle={this.toggleModal}/>
                </div>
                <div className="program-details">
                    <ProgramDetails data={this.state.programs} toggle={this.state.toggle}/>
                </div>
                <AddProgram />
            </div>
        )
    }
}