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
        "service_dg4odwa", // seu service_id
        "template_ch3le7r", // seu template_id
        formRef.current,
        "1p3-wscsEpv9WAbFg" // sua public key da EmailJS
      )
      .then(
        () => {
          setStatusMessage("Mensagem enviada com sucesso!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatusMessage("Erro ao enviar mensagem. Tente novamente.");
        }
      );
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl text-white md:text-7xl mb-8 text-center">Contact</h1>
  
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
          Enviar
        </button>
        {statusMessage && (
          <p className="text-green-400 text-sm">{statusMessage}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
