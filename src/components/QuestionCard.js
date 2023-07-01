import React, { useState } from "react";

function QuestionCard( {question, onDeleteTopic}) {
    const {id, topic, questions, views } = question;

    const [flip, setFlip] = useState(false);

    function handleDeleteClick(){
        onDeleteTopic(id);
      } 


    return (
        <div>
            <div className={`card ${flip ? "flip" : ""}`}>

                <div className="topic" onClick={() => setFlip(!flip)}>
                    {topic}
                </div>

                <div className="questions" onClick={() => setFlip(!flip)}>
                    <ol>
                        {questions.map((subquestion) => (
                            <li>{subquestion}</li>
                        ))}
                    </ol>
                </div>
                
            </div>
            <span>
                <p>Views: {views}</p>
                <button onClick={handleDeleteClick}>Delete Topic</button>
            </span>
            
            
        </div>
    );
}

export default QuestionCard