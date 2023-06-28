import React, { useState } from "react";

function QuestionForm({questions, setQuestions}) {

    const [formData, setFormData] = useState({
        part: "",
        topic: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        views: 0,
      });

    const initialFormData = {
      part: "",
      topic: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      views: 0,
    }

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
            "questions": [formData.question1, formData.question2, formData.question3, formData.question4, formData.question5, formData.question6],
            "views": parseInt(formData.views),
          } )
        })
        .then((r) => r.json())
        .then((newQuestion) => setQuestions([...questions, newQuestion]));
        setFormData(initialFormData);  
      }


    return (
    <section>
      <h1>Create new question</h1>
      <form onSubmit={handleSubmit}>
        <label>
            Speaking Part Number
            <select name="part" value={formData.part} onChange={handleChange}>
                <option value="speaking_part1">Speaking Part 1</option>
                <option value="speaking_part2">Speaking Part 2</option>
                <option value="speaking_part3">Speaking Part 3</option>
            </select>
        </label>
        <label>
            Topic:
            <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          />
        </label>
        <label>
          Question 1:
          <input
            type="text"
            name="question1"
            value={formData.question1}
            onChange={handleChange}
          />
        </label>
        <label>
            Question 2:
          <input
            type="text"
            name="question2"
            value={formData.question2}
            onChange={handleChange}
          />
        </label>
        <label>
            Question 3:
          <input
            type="text"
            name="question3"
            value={formData.question3}
            onChange={handleChange}
          />
        </label>
        <label>
            Question 4:
          <input
            type="text"
            name="question4"
            value={formData.question4}
            onChange={handleChange}
          />
        </label>
        <label>
          Question 5:
          <input
            type="text"
            name="question5"
            value={formData.question5}
            onChange={handleChange}
          />
        </label>
        <label>
          Question 6:
          <input
            type="text"
            name="question6"
            value={formData.question6}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="submit-btn">
            Submit
        </button>
     </form>
    </section>
    );
  }
  
  export default QuestionForm;