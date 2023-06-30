import React, { useState } from "react";

function QuestionCard( {question}) {
    const {id, topic, questions, views } = question;

    const [flip, setFlip] = useState(false);


    return (
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

    );
}

export default QuestionCard