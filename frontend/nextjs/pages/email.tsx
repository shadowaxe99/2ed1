```tsx
import { useState } from 'react';
import { Button } from '../../shad_ui/components/button';
import { sendEmail } from '../../backend/firebase/cloud_functions/functions';

const EmailPage = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await sendEmail(email, subject, message);
    if (response.status === 200) {
      alert('Email sent successfully');
    } else {
      alert('Failed to send email');
    }
  };

  return (
    <div className="email-page">
      <h1>Email Automation</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label>
          Subject:
          <input type="text" value={subject} onChange={handleSubjectChange} required />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={handleMessageChange} required />
        </label>
        <Button type="submit">Send Email</Button>
      </form>
    </div>
  );
};

export default EmailPage;
```