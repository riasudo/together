export default function AddProgram (props){
    console.log(props.clientId);
    return (
        <div className="modal-backdrop">
            <div className="addprogram">
                <button className="toggle-close" onClick={e=>props.handleToggle(e)}>{"<"}</button>
                <h2 className="addprogram__title">Create a New Program:</h2>
                <form className="addprogram__form" onSubmit={(e, id)=>props.handlePost(e, props.clientId)}>
                    <section className="addprogram__container addprogram__container--name">
                        <label htmlFor="addprogram__name" className="addprogram__name input-label">Name of Program:</label>
                        <input autoComplete="off" htmlFor="addprogram__name" id="addprogram__name" className="addprogram__name addprogram__input" placeholder="i.e.: Coping Skills"/>
                    </section>
                    <section className="addprogram__container addprogram__container--index">
                        <label htmlFor="addprogram__index" className="addprogram__index input-label">Progress Level:</label>
                        <input autoComplete="off" htmlFor="addprogram__index" id="addprogram__index" className="addprogram__index  addprogram__input" placeholder="i.e.: A, B, C, or 1, 2, 3"/>
                    </section>
                    <section className="addprogram__container addprogram__container--category">
                        <label htmlFor="addprogram__category" className="addprogram__category input-label">Category:</label>
                        <input autoComplete="off" htmlFor="addprogram__category" id="addprogram__category" className="addprogram__category  addprogram__input" placeholder="i.e.: Self-help skills"/>
                    </section>
                    <section className="addprogram__container addprogram__container--mastery">
                        <label htmlFor="addprogram__mastery--requiredTrials" className="addprogram__mastery--requiredTrials input-label"># Of Trials:</label>
                        <input autoComplete="off" htmlFor="addprogram__mastery--requiredTrials" id="addprogram__masteryRequiredTrials" className="addprogram__mastery--requiredTrials  addprogram__input addprogram__input--mastery" placeholder="i.e.: 5"/>

                        <label htmlFor="addprogram__mastery--requiredCorrect" className="addprogram__mastery--requiredCorrect input-label"># Correct Responses:</label>
                        <input autoComplete="off" htmlFor="addprogram__mastery--requiredCorrect" id="addprogram__masteryRequiredCorrect" className="addprogram__mastery--requiredCorrect  addprogram__input addprogram__input--mastery" placeholder="i.e.: 5"/>
                    </section>
                    <section className="addprogram__container addprogram__container--description">
                        <label htmlFor="addprogram__description" className="addprogram__description input-label">Program Goal:</label>
                        <input autoComplete="off" htmlFor="addprogram__description" id="addprogram__description" className="addprogram__description  addprogram__input" placeholder="Describe the program..."/>
                    </section>
                    <section className="addprogram__container addprogram__container--task">
                        <label htmlFor="addprogram__task" className="addprogram__task input-label">Task:</label>
                        <input autoComplete="off" htmlFor="addprogram__task" id="addprogram__task" className="addprogram__task  addprogram__input" placeholder="What steps are needed to run this program?"/>
                    </section>
                    <button className="addprogram__button button">CREATE PROGRAM</button>
                </form>
            </div>
        </div>
    )
}