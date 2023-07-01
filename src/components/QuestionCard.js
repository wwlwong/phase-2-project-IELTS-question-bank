import React, { useState } from "react";

function QuestionCard( {question, onDeleteTopic, onUpdateViews}) {
    const {id, topic, questions, views } = question;

    const [flip, setFlip] = useState(false);

    function handleDeleteClick(){
        onDeleteTopic(id);
      }
      
    function handleViewClick(){
        onUpdateViews(id, views+1) 
    }


    return (
        <div>
            <div className={`card ${flip ? "flip" : ""}`}>

                <div className="topic" onClick={() => {setFlip(!flip)
                                                        handleViewClick()}}>
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
            <div className="bottomblock">
                <p className="flex-item">Views: {views}   </p>
                <button className="flex-item" onClick={handleDeleteClick}>Delete Topic</button>
            </div>
            
            
        </div>
    );
}

export default QuestionCard