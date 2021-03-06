import React, { useState } from "react";
import { Axios, firestore } from "../../firebase/firebase.utils";
import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  // };
  // const sendEmail = () => {
    Axios.post(
      "https://us-central1-youandmewebcreations-2b76d.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        firestore.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateInput}
            value={formData.name || ""}
            aria-label='user name'
          />  
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ""}
            aria-label='email address'
          />
        </label>
        <label>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            onChange={updateInput}
            value={formData.message || ""}
            aria-label='message'
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
