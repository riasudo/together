import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import ProgramList from "../Programs/ProgramList";
import ProgramDetailModal from "../Programs/ProgramDetailModal";
import AddProgram from "../Programs/AddProgram";

import UpdateUniqueProgram from "../Update/UpdateProgram";


const API_URL = `http://localhost:5000`

export default class Client extends Component {
    state= {
        client: {},
        programs: [],
        toggle: false,
        currentProgram: {},
        addToggle: false,
        update: false,

        series: [
            {
                name: "Walk Nicely",
                data: ["5", "5", "3", "4"],
            }
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: false,
                }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Behaviour Trends per Program by Level",
                align: "center"
            },
            grid: {
                row: {
                    colors: [`#F3F3F3`, `transparent`],
                    opacity: 0.5,
                }
            },
            xaxis: {
                categories: []
            }
        }
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
        const programs = this.state.programs;
        const filteredProgram = this.state.programs.filter(programs => {
            return programs.id === id;
        });
        const filteredName = programs.filter((program)=> program.name === filteredProgram[0].name);
        const filteredIndexTotal = filteredName.map(program => {
                return program.index;
        });
        const filteredCurrent = filteredName.map(program => {
                return program.mastery.currentCorrect;
        });      

        this.setState({
            toggle: !this.state.toggle,
            currentProgram: filteredProgram[0],
            toggleAdd: false,
            series: [
                {
                    name: filteredProgram[0].name,
                    data: filteredCurrent
                }
            ],
            options: {
                xaxis: {
                    categories: filteredIndexTotal,
                }
            }
        });
    };

    toggleAdd = (e) => {
        this.setState({
            toggle: false,
            addToggle: !this.state.addToggle,
        });
    };

    toggleUpdate = (e) => {
        this.setState({
            addToggle: false,
            update: !this.state.update
        })
    }

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

    updateProgram = (event, program) => {
        const form = event.target;
        console.log(form.program_currentCorrect.value);
        console.log(form.program_currentTrials.value);
        console.log(program);
        console.log(form.program_createNewNote.value);

        if(
            !form.program_createNewNote.value === "" ||
            !form.program_currentCorrect.value === "" ||
            !form.program_currentTrials.value === ""
        ) {
            alert("Please fill in all fields to run this program.")
        } else {
            const update = {
                id: program.id,
                clientId: program.clientId,
                name: program.name,
                index: program.index, 
                description: program.description,
                category: program.category,
                task: program.task,
                mastery: {
                    requiredTrials: program.mastery.requiredTrials,
                    requiredCorrect: program.mastery.requiredCorrect,
                    currentTrials: form.program_currentTrials.value,
                    currentCorrect: form.program_currentCorrect.value
                }
            }
            const newNote = {
                programId: program.id,
                comment: form.program_createNewNote.value,
            }
            axios
            .put(`${API_URL}/programs/${program.id}`, update)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });
            axios.post(`${API_URL}/notes/programs/${program.id}`, newNote)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    
    render(){
        const {id, first_name, last_name, address, country, phone} = this.state.client;
        return (
            <div className="client">
                <div className="client-details">
                    <div className="client-details__title">
                        <Link to="/" className="client-details__home">{"<"}</Link>
                        <h2 className="client-details__header">Client Details</h2>                    
                    </div>
                    <div className="client-details__container">
                        <h3 className="client-details__label">Name: </h3>
                        <p className="client-details__name">{first_name} {last_name}</p>
                    </div>
                    <div className="client-details__container">
                        <h3 className="client-details__label">Address: </h3>
                        <p className="client-details__address">{address + ", "}</p>
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
                    {(this.state.update)
                    ? <UpdateUniqueProgram data={this.state.currentProgram} toggleUpdate={this.toggleUpdate} handleUpdate={this.updateProgram}/>
                    : (this.state.toggle && this.state.currentProgram)
                    ? <ProgramDetailModal data={this.state.currentProgram} options={this.state.options} series={this.state.series} toggleUpdate={this.toggleUpdate} test={this.renderGraphData}/>     
                    : (this.state.addToggle)
                    ? null
                    :<p className="loading-details">Click a program to show details</p>
                }    
                </div>
                
                
            </div>

        )
    }
}