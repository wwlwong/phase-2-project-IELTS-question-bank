import React from "react";

function QuestionItem( {question}) {
    const {id, topic, questions, views } = question;
    
    return (
        <div>
            <h3>Topic: {topic} </h3>
            <ol>
            {questions.map((subquestion) => (
                <li>{subquestion}</li>
            ))}
            </ol>
            {/*<h5>Views: {views}</h5>*/}
        </div>
        

    )
}

export default QuestionItem;