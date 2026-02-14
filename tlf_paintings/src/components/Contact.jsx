import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const formRef = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
  const publicKeyId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const currentTime = new Date().toLocaleTimeString();

  // Auto-close modal after 5 seconds
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!formData.phone || formData.phone.trim().length === 0) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be in format: (123) 456-7890.";
    }

    // Message validation
    if (!formData.message || formData.message.trim().length < 1) {
      newErrors.message = "Message required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const phoneDigits = value.replace(/\D/g, "");

    // Only format if we have digits, limit to 10 digits
    if (phoneDigits.length === 0) return "";
    if (phoneDigits.length <= 3) {
      return `(${phoneDigits}`;
    } else if (phoneDigits.length <= 6) {
      return `(${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3)}`;
    } else {
      return `(${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6, 10)}`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone field
    let newValue = value;
    if (name === "phone") {
      newValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      setStatusType("error");
      setStatusMessage("Please fix the errors in the form");
      setShowModal(true);
      return;
    }

    setFormSubmitting(true);

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKeyId).then(
      () => {
        setStatusType("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        formRef.current.reset();
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});
        setShowModal(true);
        setFormSubmitting(false);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatusType("error");
        setStatusMessage("Failed to send message. Please try again.");
        setShowModal(true);
        setFormSubmitting(false);
      },
    );
  };

  return (
    <section id="contact" aria-label="Contact form">
      <h2 className="text-center text-black mb-5 font-bold max-md:text-2xl md:text-4xl">
        Contact Us
      </h2>
      <div className="container">
        <div className="row">
          <div className="col flex flex-column align-items-center">
            <p className="text-center">
              Have a project in mind? Fill out our form for more information or
              an estimate.
            </p>
            <div className="flex flex-column w-100 max-w-[550px] mt-4">
              <form
                className="text-black"
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="time" value={currentTime} />

                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="firstname lastname"
                    aria-required="true"
                    aria-describedby="name-help"
                  />
                  <label htmlFor="name" className="form-label">
                    Name <span aria-label="required">*</span>
                  </label>
                  {errors.name && (
                    <div className="invalid-feedback d-block">
                      {errors.name}
                    </div>
                  )}
                  <span id="name-help" className="sr-only">
                    Enter your full name
                  </span>
                </div>

                <div className="mb-3 form-floating">
                  <input
                    type="tel"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    maxLength="14"
                    aria-describedby="phoneHelp"
                    required
                  />
                  <label htmlFor="phone" className="form-label">
                    Phone Number*
                  </label>
                  {errors.phone && (
                    <div className="invalid-feedback d-block">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="mb-3 form-floating">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    aria-required="true"
                    aria-describedby="email-help"
                  />
                  <label htmlFor="email" className="form-label">
                    Email Address <span aria-label="required">*</span>
                  </label>
                  {errors.email && (
                    <div className="invalid-feedback d-block">
                      {errors.email}
                    </div>
                  )}
                  <span id="email-help" className="sr-only">
                    Enter a valid email address
                  </span>
                </div>

                <div className="mb-3 form-floating">
                  <textarea
                    className={`form-control h-150 ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    style={{ height: "150px" }}
                    placeholder="Tell us about your project"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby="message-help"
                  ></textarea>
                  <label htmlFor="message" className="form-label">
                    Message <span aria-label="required">*</span>
                  </label>
                  {errors.message && (
                    <div className="invalid-feedback d-block">
                      {errors.message}
                    </div>
                  )}
                  <span id="message-help" className="sr-only">
                    Tell us about your project needs
                  </span>
                </div>

                <hr />
                <button
                  type="submit"
                  className={`w-100 btn btn-primary bg-primary-blue flex items-center justify-center gap-2 ${
                    formSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={formSubmitting}
                  aria-label="Submit contact form"
                >
                  {formSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success/Error Modal Popup */}
      {showModal && (
        <div
          className={`modal-overlay modal-${statusType}`}
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={
            statusType === "success" ? "Success message" : "Error message"
          }
        >
          <div
            className={`modal-content modal-${statusType}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <span className={`modal-icon modal-${statusType}`}>
                {statusType === "success" ? "✓" : "⚠"}
              </span>
            </div>
            <div className="modal-body">
              <p className="modal-message">{statusMessage}</p>
            </div>
            <div className="modal-footer">
              <button
                className="modal-close-btn"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
