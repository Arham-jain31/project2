import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function subscribe(event) {
    event.preventDefault();

    if (email === "") {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <footer id="subscribe" className="mt-10">

      {/* Subscribe Section */}
      <div className="flex flex-col gap-3 bg-gray-200 px-5 py-5 md:flex-row md:items-center md:justify-center">

        <h2 className="font-bold">
          SIGN UP FOR OUR DAILY INSIDER
        </h2>

        <form
          onSubmit={subscribe}
          className="flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded border px-3 py-2"
          />

          <button className="rounded bg-gray-400 px-5 py-2 text-white hover:bg-gray-500">
            Subscribe
          </button>
        </form>

      </div>

      {/* Footer Main Section */}
      <div className="bg-teal-600 px-8 py-10 text-white">

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">

          {/* Explore */}
          <div>
            <h3 className="mb-3 text-xl font-bold">
              Explore
            </h3>

            <p>Home</p>
            <p>Questions</p>
            <p>Articles</p>
            <p>Tutorials</p>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-3 text-xl font-bold">
              Support
            </h3>

            <p>FAQs</p>
            <p>Help</p>
            <p>Contact Us</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3 text-xl font-bold">
              Stay connected
            </h3>

            <div className="flex flex-col s">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">

          <h3 className="font-bold">
            DEV@Deakin 2026
          </h3>

          <p className="mt-2">
            Privacy Policy &nbsp;&nbsp; Terms &nbsp;&nbsp; Code of Conduct
          </p>

        </div>

        {/* Message */}
        {message && (
          <p className="mt-5 text-center font-bold">
            {message}
          </p>
        )}

      </div>

    </footer>
  );
}

export default Footer;