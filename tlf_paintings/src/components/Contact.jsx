import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const formRef = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
  const publicKeyId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [formSubmitting, setFormSubmitting] = useState(false);
  const currentTime = new Date().toLocaleTimeString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKeyId).then(
      () => {
        alert("Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      },
    );
    setFormSubmitting(false);
  };

  return (
    <>
      <section id="contact">
        <h2 className="text-center text-black mb-5 font-bold max-md:text-2xl md:text-4xl">
          Contact Us
        </h2>
        <div className="container">
          <div className="row">
            <div className="col flex flex-column align-items-center">
              <p className="text-center">
                Have a project in mind? Feel out our form for more information
                or an estimate.
              </p>
              <div className="flex flex-column w-100 max-w-[550px] mt-4">
                <form
                  className="text-black"
                  ref={formRef}
                  onSubmit={handleSubmit}
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
                    />
                    <label for="inputFullName" className="form-label">
                      Name*
                    </label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      className="form-control"
                      id="inputPhoneNumber"
                      required
                      name="phone"
                      placeholder=""
                    />
                    <label for="inputPhoneNumber" className="form-label">
                      Phone Number* (ex. 123-123-1234)
                    </label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmailAddress"
                      required
                      name="email"
                      placeholder="email"
                    />
                    <label for="inputEmailAddress" className="form-label">
                      Email Address*
                    </label>
                  </div>
                  <div className="mb-3 form-floating">
                    <textarea
                      className="form-control h-150"
                      style={{ height: "150px" }}
                      placeholder="Leave a comment here"
                      id="inputComments"
                      name="message"
                    ></textarea>
                    <label for="inputComments" className="form-label">
                      Questions / Comments
                    </label>
                  </div>

                  <hr />
                  <button
                    type="submit"
                    className={`w-100 btn btn-primary bg-primary-blue ${
                      formSubmitting
                        ? "opacity-50 cursor-not-allowed disabled"
                        : ""
                    }`}
                  >
                    {formSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
