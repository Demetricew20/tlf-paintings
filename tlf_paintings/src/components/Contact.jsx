import "../styles/Contact.css";

function Contact() {
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
                <form className="text-black">
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="inputFullName"
                      required
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
                      placeholder=""
                    />
                    <label for="inputPhoneNumber" className="form-label">
                      Phone Number*
                    </label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmailAddress"
                      required
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
                    ></textarea>
                    <label for="inputComments" className="form-label">
                      Questions / Comments
                    </label>
                  </div>

                  <hr />
                  <button
                    type="submit"
                    className="w-100 bg-primary-blue btn btn-primary"
                  >
                    Submit
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
