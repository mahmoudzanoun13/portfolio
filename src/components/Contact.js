import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { send } from "emailjs-com";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({});
  const { firstName, lastName, email, phone, message } = formDetails;

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (phone.trim() && !/^\+?[\d\s-]{10,}$/.test(phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!message.trim()) errors.message = "Message is required";

    return errors;
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
    // Clear error when user starts typing
    if (formErrors[category]) {
      setFormErrors({
        ...formErrors,
        [category]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setSubmitting(true);
      await postSubmission();
      setSubmitting(false);
    } else {
      setFormErrors(errors);
    }
  };

  const postSubmission = async () => {
    try {
      await send(
        "service_grgncuf",
        "template_cgt9ed4",
        { firstName, lastName, email, phone, message },
        "KkPvN7NUkHR8HNfKM"
      );
      setStatus({
        class: "success",
        text: "Message sent successfully",
      });
      setFormDetails(formInitialDetails);
    } catch {
      console.log("Faild!");
      setStatus({
        class: "danger",
        text: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                        {formErrors.firstName && (
                          <p className="error-message text-danger">
                            {formErrors.firstName}
                          </p>
                        )}
                      </Col>
                      {/* Add similar error messages for other fields */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                        {formErrors.lastName && (
                          <p className="error-message text-danger">
                            {formErrors.lastName}
                          </p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                        {formErrors.email && (
                          <p className="error-message text-danger">
                            {formErrors.email}
                          </p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                        {formErrors.phone && (
                          <p className="error-message text-danger">
                            {formErrors.phone}
                          </p>
                        )}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        {formErrors.message && (
                          <p className="error-message text-danger">
                            {formErrors.message}
                          </p>
                        )}
                        <button type="submit">
                          <span>{submitting ? "Sending..." : "Send"}</span>
                        </button>
                      </Col>
                      {status.text && (
                        <Col>
                          <p className={status.class}>{status.text}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
