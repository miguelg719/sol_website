import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [showSentMessage, setShowSentMessage] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      from_name: formData.email,
      to_name: 'solmarigarcia.contact@gmail.com',
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      message: formData.message
    };

    emailjs.send(
        'service_9fhay97', 
        'template_br3sxqq',
        emailParams,
        'T-5E269Hbg7fHf-7f'
    ).then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      setShowSentMessage(true);
      setTimeout(() => setShowSentMessage(false), 3000);
    }).catch((err) => {
      console.error('Failed to send email.', err);
    });
  };

  return (
    <main className="flex flex-col pt-20 items-center min-h-screen px-8 md:px-0">
      <h2 className="text-3xl mb-6">Send me a message</h2>
      <h3 className="text-xl mb-10">Inquiries, collabs, advice... It goes directly to my inbox!</h3>
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden" onSubmit={handleSubmit}>
        <div className="divide-y divide-gray-200">
          <input
            className="w-full px-4 py-3 text-gray-700 focus:outline-none"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-3 text-gray-700 focus:outline-none"
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-3 text-gray-700 focus:outline-none"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="w-full px-4 py-3 text-gray-700 focus:outline-none resize-none"
            id="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="px-4 py-3 bg-gray-50">
          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      {showSentMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p className="text-grey-700 text-xl" style={{wordSpacing: 7}}>✔ Sent!</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;