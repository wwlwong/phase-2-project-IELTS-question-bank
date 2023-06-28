import React from "react";

function QuestionItem( {question , onDeleteTopic}) {
    const {id, topic, questions, views } = question;
    
    function handleDeleteClick(){
        onDeleteTopic(id);
      } 

    return (
        <div>
            <h3>Topic: {topic} </h3>
            <ol>
            {questions.map((subquestion) => (
                <li>{subquestion}</li>
            ))}
            </ol>

            <button onClick={handleDeleteClick}>Delete Topic</button>

            {/*<h5>Views: {views}</h5>*/}
        </div>
        

    )
}

export default QuestionItem;