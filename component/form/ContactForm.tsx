"use client";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7audsl6", "template_fb03s58", form.current!, {
        publicKey: "pH7N3_F_Kl4F08hfw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.", { position: "top-right" });
    } else {
      // If the form is successfully submitted, show a success toast
      toast.success("Form submitted successfully!", {
        position: "top-right",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form ref={form} onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input
            name="user_name"
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-6">
          <input
            name="user_email"
            type="email"
            placeholder="Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-12">
          <textarea
            name="message"
            rows={8}
            placeholder="Masukkan Pesan Anda ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="common_btn_2" value="Send">
            Kirim
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
