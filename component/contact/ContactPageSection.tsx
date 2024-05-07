import React from "react";
import ContactForm from "../form/ContactForm";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Hubungi Kami</h5>
                <h2>Kirim pesan untuk kami</h2>
              </div>
              <p>Laporkan masalah, kritik, atau pertanyaan Anda.</p>
              <ContactForm />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Kontak Kami</h3>
                  <a href="tel:+6285281752123">Fax</a>
                  <a href="https://wa.me/+6285281752123">WhatsApp</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <a href="mailto:smpialfakhir@gmail.com">
                    smpialfakhir@gmail.com
                  </a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>
                    Jl. Kemang No.48, Pasir Putih, Kec. Sawangan, Kota Depok,
                    Jawa Barat 16519
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.716009930503!2d106.77957617526187!3d-6.430516862884803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e985901e1355%3A0xe121bea830e8c92a!2sSMP%20Islam%20Modern%20Al-Fakhir!5e0!3m2!1sen!2sid!4v1714468278129!5m2!1sen!2sid"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
