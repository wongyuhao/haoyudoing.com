import React from 'react'
import {Card} from 'react-bootstrap'

const handleSubmit = event=>{
  event.preventDefault();
}


export default ()=>(
  <Card>
<form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={handleSubmit}>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />

  <label>
    Name
    <input type="text" name="name" id="name" />
  </label>
  <label>
    Email
    <input type="email" name="email" id="email" />
  </label>
  <label>
    Subject
    <input type="text" name="subject" id="subject" />
  </label>
  <label>
    Message
    <textarea name="message" id="message" rows="5" />
  </label>
  <button type="submit">Send</button>
  <input type="reset" value="Clear" />
</form>
</Card>
)