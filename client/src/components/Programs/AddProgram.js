export default function AddProgram (){
    return (
        <div className="add-program">
            <h2 className="add-program__title">Create a New Program:</h2>
            <form className="add-program__form">
                <section className="add-program__container add-program__container--name">
                    <label htmlFor="add-program__name" className="add-program__name input-label">Name of Program:</label>
                    <input htmlFor="add-program__name" className="add-program__name add-program__input" placeholder="i.e.: Coping Skills"/>
                </section>
                <section className="add-program__container add-program__container--index">
                    <label htmlFor="add-program__index" className="add-program__index input-label">Progress Level:</label>
                    <input htmlFor="add-program__index" className="add-program__index  add-program__input" placeholder="i.e.: A, B, C, or 1, 2, 3"/>
                </section>
                <section className="add-program__container add-program__container--category">
                    <label htmlFor="add-program__category" className="add-program__category input-label">Category:</label>
                    <input htmlFor="add-program__category" className="add-program__category  add-program__input" placeholder="i.e.: Self-help skills"/>
                </section>
                <section className="add-program__container add-program__container--mastery">
                    <label htmlFor="add-program__mastery--requiredTrials" className="add-program__mastery--requiredTrials input-label"># Of Trials:</label>
                    <input htmlFor="add-program__mastery--requiredTrials" className="add-program__mastery--requiredTrials  add-program__input add-program__input--mastery" placeholder="i.e.: 5"/>

                    <label htmlFor="add-program__mastery--requiredCorrect" className="add-program__mastery--requiredCorrect input-label"># Correct:</label>
                    <input htmlFor="add-program__mastery--requiredCorrect" className="add-program__mastery--requiredCorrect  add-program__input add-program__input--mastery" placeholder="i.e.: 5"/>
                </section>
                <section className="add-program__container add-program__container--description">
                    <label htmlFor="add-program__description" className="add-program__description input-label">Program Goal:</label>
                    <input htmlFor="add-program__description" className="add-program__description  add-program__input" placeholder="Describe the goal of the program..."/>
                </section>
                <section className="add-program__container add-program__container--task">
                    <label htmlFor="add-program__task" className="add-program__task input-label">Task:</label>
                    <input htmlFor="add-program__task" className="add-program__task  add-program__input" placeholder="What steps are needed to run this program?"/>
                </section>
                <button className="add-program__button button">CREATE PROGRAM</button>
            </form>
        </div>
    )
}