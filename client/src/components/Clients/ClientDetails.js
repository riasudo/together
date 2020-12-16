import React, {Component} from "react";
import ProgramList from "../Programs/ProgramList";
import ProgramDetails from "../Programs/ProgramDetails";
import ProgramDetailModal from "../Programs/ProgramDetailModal";
import axios from "axios";
import AddProgram from "../Programs/AddProgram";
const API_URL = `http://localhost:5000`

export default class Client extends Component {
    state= {
        client: {},
        programs: [],
        toggle: false,
        currentProgram: {},
        addToggle: false

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
        const filteredProgram = this.state.programs.filter(programs => {
            return programs.id === id;
        });
        this.setState({
            toggle: !this.state.toggle,
            currentProgram: filteredProgram[0],
            toggleAdd: false,
        });
    };

    toggleAdd = (e) => {
        console.log(this.state.addToggle);
        this.setState({
            toggle: false,
            addToggle: !this.state.addToggle,
        });
    };

    postNewProgram = (event, clientId) => {
        const form = event.target;
        if (
            form.addprogram__name.value === "" ||
            form.addprogram__index.value === "" ||
            form.addprogram__category.value === "" ||
            form.addprogram__masteryRequiredTrials.value === "" ||
            form.addprogram__masteryRequiredCorrect.value === "" ||
            form.addprogram__description.value === "" ||
            form.addprogram__task.value === ""
        )
        {
            alert("All fields are required to create a program.")
        } else {
            const newProgram = {
                client_id: parseInt(clientId),
                name: form.addprogram__name.value,
                index: form.addprogram__index.value,
                category:form.addprogram__category.value,
                mastery: {
                    requiredTrials: form.addprogram__masteryRequiredTrials.value, 
                    requiredCorrect: form.addprogram__masteryRequiredCorrect.value,
                    currentTrials: "0",
                    currentCorrect: "0"
                },
                description: form.addprogram__description.value,
                task: form.addprogram__task.value,
                ProgramNotes: []
            }

            const { params } = this.props.match;
            axios.post(`${API_URL}/programs/clients/${params.id}`, newProgram)
            .then((res)=>{
                console.log(res);
                alert("Program Added!");
            }).catch((err)=>{
                console.log(err);
            })
        }

    }

    render(){
        const programs = this.state.programs;
        console.log(programs)
        const {id, first_name, last_name, address, city, country, phone} = this.state.client;
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
                    {(!this.state.addToggle)
                        ? <button className="toggle-add" onClick={e => this.toggleAdd(e)}>Create New Program</button>
                        : <AddProgram handleToggle={this.toggleAdd} clientId={id} handlePost={this.postNewProgram}/>}
                    <ProgramList data={this.state.programs} handleToggle={this.toggleModal}/>
                </div>
                <div className="program-details">
                    {(this.state.toggle && this.state.currentProgram)
                    ? <ProgramDetailModal data={this.state.currentProgram}/>       
                    : (this.state.addToggle)
                    ? null
                    :<p className="loading-details">Click a program to show details</p>
                    }    
                </div>
                
            </div>
        )
    }
}