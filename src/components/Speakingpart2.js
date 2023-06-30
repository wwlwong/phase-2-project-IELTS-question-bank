import React,  { useEffect } from "react";
import QuestionItem from "./QuestionItem";
import QuestionCard from "./QuestionCard";

function SpeakingPart2({questions, setQuestions}) {
  //const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("https://flatiron-phase-2-project.onrender.com/speaking_part2")
      .then((r) => r.json())
      .then((questions) => {
        
        setQuestions(questions)});
  }, []); 
  
  function onDeleteTopic(id){
    fetch(`https://flatiron-phase-2-project.onrender.com/speaking_part2/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => setQuestions(questions.filter((question) => question.id !== id)));
  }
  
  return ( 
    <div>
    <section>
      <h1>Speaking Part 2 Questions</h1>
      <ol> 
        {questions.map((question) => (
        <QuestionCard key={question.id} question={question} onDeleteTopic={onDeleteTopic}/> ))}
        
      </ol>
    </section>
    
  </div>
  );
}

export default SpeakingPart2;