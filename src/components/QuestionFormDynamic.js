import React, { useState, useEffect } from "react";


function QuestionFormDynamic({questions1, setQuestions1, questions2, setQuestions2, questions3, setQuestions3}) {

    const [formData, setFormData] = useState({
        part: "",
        topic: "",
        questions: [],
        views: 0,
      });

    const [questionsList, setQuestionsList] = useState([""]);

    const initialFormData = {
      part: "",
      topic: "",
      questions: [],
      views: 0,
    }

    const modalDisplayTime = 3000;

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      let timeout;
      if (showModal) {
        timeout = setTimeout(() => {
          setShowModal(false);
        }, modalDisplayTime);
      }
      return () => clearTimeout(timeout);
    }, [showModal]);
  

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }



    function handleSubmit(event) {
        event.preventDefault();
        
        fetch(`https://flatiron-phase-2-project.onrender.com/${formData.part}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
          {
            "topic": formData.topic,
            "questions": formData.questions,
            "views": parseInt(formData.views),
          } )
        })
        .then((r) => r.json())
        .then((newQuestion) => {
          if (formData.part === "speaking_part1"){
            setQuestions1([...questions1, newQuestion]);
          }
          else if (formData.part === "speaking_part2"){
            setQuestions2([...questions2, newQuestion]);
          } 
          else {
            setQuestions3([...questions3, newQuestion]);
          }
          });
        setShowModal(true);
        setFormData(initialFormData)
        setQuestionsList([""]);  
      }

    function removeField(index) {
        let data = [...questionsList];
        data.splice(index, 1)
        setQuestionsList(data)
    }

    function addField(){
        setQuestionsList([...questionsList, ""])
    }

    const handleAddQuestion = (event, index) => {
        let data = [...questionsList];
        data[index] = event.target.value;
        setQuestionsList(data);
        setFormData({...formData, questions: questionsList})
      }
    
    return (
    <section>
      <h1>Create new question</h1>
      <form className="question-entry" onSubmit={handleSubmit}>
        <label className='form-label'>
            Speaking Part Number
            <select className="dropdown" name="part" value={formData.part} onChange={handleChange}>
                <option value="" selected disabled="true">Select part number</option>
                <option value="speaking_part1">Speaking Part 1</option>
                <option value="speaking_part2">Speaking Part 2</option>
                <option value="speaking_part3">Speaking Part 3</option>
            </select>
        </label>
        <label className='form-label'>
            Topic:
            <input
            className="text-box"
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          />
        </label>
        
        <label className='questions'>
            {questionsList.map((question, index) => {
                return (
                    <div className='form-label' key={index}>
                        <label className='form-label'>
                            Question {index+1}:
                            <input 
                                className="text-box"
                                type="text"
                                name="question"
                                placeholder="Type question here"
                                onChange={(event)=>handleAddQuestion(event, index)}
                                value={question}
                            />
                            <div className="btn-box">
                                {questionsList.length !== 1 && <button className="remove-btn" onClick={()=> removeField(index)}>Remove</button>}
                                {questionsList.length - 1 === index && <button onClick={addField}>Add</button>}
                            </div>

                        </label>
                        

                    </div>      
                )
            })}
        </label>   

        <button type="submit" className="submit-btn">
            Submit
        </button>
     </form>
     {showModal && <div><h3>Questions Submitted</h3></div>}
    </section>
    
      
    );
  }
  
  export default QuestionFormDynamic;