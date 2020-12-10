import React, {Component} from "react";
import StudentCard from "./Students/StudentCard";

export default class Landing extends Component {
    state = {
        students: [
            {
                id: "1",
                name: "Charlie",
                dob: "2009/01/25",
                address: "123 example St",
                city: "Example City",
                country: "Example Country",
                phone: "123-456-7890"
            },
            {
                id: "2",
                name: "Jane",
                dob: "2004/01/25",
                address: "345 example St",
                city: "Example City",
                country: "Example Country",
                phone: "012-345-6789"
            }
        ]
    }
    render(){
        const studentList = this.state.students;
        return(
            <div className="landing-page">
                <h2 className="landing-page__header">Who are we working with today?</h2>
                <ul className="student-list">
                {studentList && studentList.map((student)=>{
                    return(
                        <StudentCard data={student} key={student.id}/>
                    )
                })}
                </ul>
            </div>   
        )
    }
}