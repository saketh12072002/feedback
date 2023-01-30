import React from 'react';
import './Feedback.css';
import send from './send.png';

function Feedback() {
  return (
    <div className="feedback">
      <div className="course">
      <h1>Course Name : CE1010</h1>
      </div>

      <div className="feedback_send">
      <form id="chat-form">
        <input type="text" id="chat-input" placeholder="Type your valuable feedback here..."/>
        <button type="submit"><img src={send}></img></button>
      </form>
      </div>

    </div>
  )
}

export default Feedback
