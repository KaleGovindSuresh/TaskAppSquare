import React, { useState } from "react";
import "./contact.css";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    qualification: "",
    projects: [{ id: 0, value: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addProjectField = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [
        ...prevData.projects,
        { id: prevData.projects.length, value: "" },
      ],
    }));
  };

  const handleProjectChange = (id, value) => {
    const projects = formData.projects.map((project) =>
      project.id === id ? { ...project, value: value } : project
    );
    setFormData((prevData) => ({
      ...prevData,
      projects: projects,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("contactInfo", JSON.stringify(formData));
    setFormData({
      email: "",
      mobile: "",
      qualification: "",
      projects: [{ id: 0, value: "" }],
    });
  };

  return (
    <div className="contact-container">
      <h2 className="heading_contact">Contact Us</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label className="label">Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <br />
          <label className="label">Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
          <br />
          {formData.projects.map((project) => (
            <div key={project.id}>
              <label className="label">Project {project.id + 1}:</label>
              <input
                type="text"
                value={project.value}
                onChange={(e) =>
                  handleProjectChange(project.id, e.target.value)
                }
              />
            </div>
          ))}
          <div className="btn">
            <button className="add_btn" type="button" onClick={addProjectField}>
              Add Project
            </button>
            <button className="submit_btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
