import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!, // service_id from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!, // template_id from .env
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID! // user_id from .env
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatusMessage("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl text-white font-poppins font-bold md:text-7xl mb-8 text-center">Contact</h1>
  
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 p-6 rounded-xl shadow-lg w-full max-w-md "
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 rounded bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2 rounded bg-white text-black placeholder-gray-400 border border-gray-700 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-[#809DE9] hover:bg-[#5781EE] text-white font-semibold p-2 rounded transition-colors"
        >
          Submit
        </button>
        {statusMessage && (
          <p className="text-white text-sm text-center font-roboto ">{statusMessage}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
