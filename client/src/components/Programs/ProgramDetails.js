import React, {Component} from "react";

export default class ProgramDetails extends Component{
    state = {
        program: {
            student_id: "1",
            name: "Sort Laundry",
            index: "A",
            description: "Learn how to sort light and dark colors when doing laundry.",
            category: "Self Management",
            task: "To be able to respond whether an article of clothing is light or dark colored at a frequency of 5/5 correct responses per LU.",
            mastery: {
                currentCorrect: "5",
                currentTrial: "5",
                requiredTrial: "5",
                requiredCorrect: "5"
            },
            notes: [
                {
                    instructor_id: "2",
                    content: "Reached mastery criteria for the program, good job!",
                    timestamp: "2020/06/29"
                },
                {
                    instructor_id: "1",
                    content: "Good progress in sitting, was compliant and able to sort between colors.",
                    timestamp: "2020/06/12"
                },
                {
                    instructor_id: "1",
                    content: "Just started implementing program, some expected errors.",
                    timestamp: "2020/05/25"
                }
            ]
        },
    }
    render(){
        const {name, index, description, category, task, mastery} = this.state.program;
        const {requiredTrial, requiredCorrect, currentTrial, currentCorrect} = mastery;
        console.log(mastery);

        return(
            <div className="program-details">
                <div className="program-details__header">
                    <h2 className="program-details__name">{name}</h2>
                    <p className="program-details__level">Current Progress: {index}</p>
                    <p className="program-details__category">{category}</p>
                </div>
                <div className="program-details__completion">
                    <p className="program-details__mastery">Mastery Requirements: {requiredCorrect + "/" + requiredTrial}</p>
                    <p className="program-details__current">Current Completion: {currentCorrect + "/" + currentTrial}</p>
                </div>
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