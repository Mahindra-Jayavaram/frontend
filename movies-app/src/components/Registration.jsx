import React, { useEffect, useState } from "react";

export const Registration = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mblNo: "",
    country: "",
    city: "",
    state: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setFlag(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && flag) {
      console.log(formData);
    }

  }, [formErrors, formData, flag]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.mblNo) {
      errors.mblNo = "Mobile Number is required";
    } else if (values.mblNo.length === 9) {
      errors.mblNo = "Mobile Number must be in 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && flag ? (
        <div className="message">Signed in successfully</div>
      ) : (
        <div className = "message">Please Fill the Form</div>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="form">
          <label>
            Username{" "}
            <span className={formData.username.length > 0 ? "black" : "red"}>
              *
            </span>
          </label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <p>{formErrors.username}</p>
          <label>
            Email{" "}
            <span className={formData.email.length > 0 ? "black" : "red"}>
              *
            </span>
          </label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p>{formErrors.email}</p>
          <label>
            Mobile No
            <span className={formData.mblNo.length > 0 ? "black" : "red"}>
              *
            </span>
          </label>
          <br />
          <input
            type="number"
            name="mblNo"
            placeholder="Mobile No"
            value={formData.mblNo}
            onChange={handleChange}
          />
          <p>{formErrors.mblNo}</p>
          <label>
            Country
            <span className={formData.country.length > 0 ? "black" : "red"}>
              *
            </span>
          </label>
          <br />
          <input
            type="text"
            name="country"
            placeholder="Country Name"
            value={formData.country}
            onChange={handleChange}
          />{" "}
          <p></p>
          <label>
            City Name
            <span className={formData.city.length > 0 ? "black" : "red"}>
              *
            </span>
          </label>
          <br />
          <input
            type="text"
            name="city"
            placeholder="City Name"
            value={formData.city}
            onChange={handleChange}
          />{" "}
          <p></p>
          <label>
            State Name
            <span className={formData.state.length > 0 ? "black" : "red"}>
              *
            </span>
          </label>
          <br />
          <input
            type="text"
            name="state"
            placeholder="State Name"
            value={formData.state}
            onChange={handleChange}
          />
          <p></p>
          <label>
            Message
            <span className={formData.message.length > 0 ? "black" : "red"}>
              *
            </span>
          </label>
          <br />
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <p></p>
          <button className="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};
