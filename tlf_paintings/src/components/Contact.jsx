import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const formRef = useRef();
  const statusMessageRef = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
  const publicKeyId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const currentTime = new Date().toLocaleTimeString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKeyId).then(
      () => {
        setStatusType("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        formRef.current.reset();
        if (statusMessageRef.current) {
          statusMessageRef.current.focus();
        }
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatusType("error");
        setStatusMessage("Failed to send message. Please try again.");
        if (statusMessageRef.current) {
          statusMessageRef.current.focus();
        }
      },
    );
    setFormSubmitting(false);
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
                    className="form-control"
                    id="inputFullName"
                    required
                    name="name"
                    placeholder="firstname lastname"
                    aria-required="true"
                    aria-describedby="name-help"
                  />
                  <label htmlFor="inputFullName" className="form-label">
                    Name <span aria-label="required">*</span>
                  </label>
                  <span id="name-help" className="sr-only">
                    Enter your full name
                  </span>
                </div>

                <div className="mb-3 form-floating">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="form-control"
                    id="inputPhoneNumber"
                    required
                    name="phone"
                    placeholder="123-123-1234"
                    aria-required="true"
                    aria-describedby="phone-help"
                  />
                  <label htmlFor="inputPhoneNumber" className="form-label">
                    Phone Number <span aria-label="required">*</span>
                  </label>
                  <span id="phone-help" className="sr-only">
                    Format: 123-456-7890
                  </span>
                </div>

                <div className="mb-3 form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmailAddress"
                    required
                    name="email"
                    placeholder="email@example.com"
                    aria-required="true"
                    aria-describedby="email-help"
                  />
                  <label htmlFor="inputEmailAddress" className="form-label">
                    Email Address <span aria-label="required">*</span>
                  </label>
                  <span id="email-help" className="sr-only">
                    Enter a valid email address
                  </span>
                </div>

                <div className="mb-3 form-floating">
                  <textarea
                    className="form-control h-150"
                    style={{ height: "150px" }}
                    placeholder="Tell us about your project"
                    id="inputComments"
                    name="message"
                    aria-required="true"
                    aria-describedby="message-help"
                  ></textarea>
                  <label htmlFor="inputComments" className="form-label">
                    Message <span aria-label="required">*</span>
                  </label>
                  <span id="message-help" className="sr-only">
                    Tell us about your project needs
                  </span>
                </div>

                {statusMessage && (
                  <div
                    ref={statusMessageRef}
                    role="alert"
                    aria-live="polite"
                    className={`status-message status-${statusType} mb-3`}
                    tabIndex="-1"
                  >
                    {statusMessage}
                  </div>
                )}

                <hr />
                <button
                  type="submit"
                  className={`w-100 btn btn-primary bg-primary-blue ${
                    formSubmitting
                      ? "opacity-50 cursor-not-allowed disabled"
                      : ""
                  }`}
                  disabled={formSubmitting}
                  aria-label="Submit contact form"
                >
                  {formSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
