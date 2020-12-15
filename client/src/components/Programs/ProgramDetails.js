import React, {Component} from "react";
import axios from "axios";
const API_URL = `http://localhost:5000`;


export default class ProgramDetails extends Component{
    state = {
        program: {},
    }

    componentDidMount(){
        const { params } = this.props.match;
        this.getProgramById(params.id);
    }

    getProgramById = (id) => {
        axios.get(`${API_URL}/programs/${id}`)
        .then((res)=> {
            this.setState({
                program: res.data
            })
        })
        .catch((err)=>console.log(err));
    };

    render(){
        const {name, index, description, category, task, mastery} = this.state.program;
        console.log(mastery);

        return(
            <div className="program-details">
                <div className="program-details__header">
                    <h2 className="program-details__name">{name}</h2>
                    <p className="program-details__level">Current Progress: {index}</p>
                    <p className="program-details__category">{category}</p>
                </div>
                {(mastery && mastery)
                    ?   <div className="program-details__completion">
                            <p className="program-details__mastery">Mastery Requirements: {mastery.requiredCorrect + "/" + mastery.requiredTrials}</p>
                            <p className="program-details__current">Current Completion: {mastery.currentCorrect + "/" + mastery.currentTrials}</p>
                        </div>
                    : <p> Loading... Please wait!</p>}
                
                <div className="program-details__info">
                    <h3 className="program-details__label">Goal: </h3>
                    <p className="program-details__goal">{description}</p>
                    <h3 className="program-details__label">Task: </h3>
                    <p className="program-details__task">{task}</p>
                </div>
                
            </div>
        )
    }
}

/* 

*/