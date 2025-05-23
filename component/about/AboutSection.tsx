"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".counter-box");

    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );

      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp" id="tujuan">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="/images/building/b-1.png"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>Tujuan Sekolah</h4>
                  <p>
                    Sebagai ruang formal dalam membentuk generasi Islami Modern
                    yang berpengetahuan luas, berakhlak baik dan dapat
                    menerapkan ilmu pengetahuan di berbagai aspek kehidupan
                    untuk kesuksesan hidup di dunia dan di akhirat.
                  </p>
                </div>
                <a
                  href="https://pendaftaran.smpialfakhir.sch.id/"
                  className="common_btn"
                >
                  daftar sekarang
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="visimisi">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft ">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>visi & misi</h5>
                <h2>Visi Sekolah</h2>
              </div>
              <p>
                Terwujudnya pendidikan yang bermutu tinggi dalam membentuk
                siswa-siswi yang berakhlak, modern, dan menjadi kebanggaan orang
                tua, masyarakat, bangsa dan negara.{" "}
              </p>
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h2>Misi Sekolah</h2>
              </div>
              <ul>
                <li>Beribadah dengan benar.</li>
                <li>Berakhlak Mulia.</li>
                <li>Berbadan Sehat.</li>
                <li>Berpengetahuan Luas.</li>
                <li>Berfikir Kritis & Kreatif.</li>
                <li>Cinta Al-Qur'an.</li>
              </ul>
              <Link href="/about" className="common_btn">
                selengkapnya
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              <img
                src="/images/about/all-no-bg.png"
                alt="about"
                className="img-fluid w-100"
              />
              <div className="text counter-box">
                <i className="far fa-check-circle"></i>
                <h3>
                  {isVisible && (
                    <CountUp
                      start={1}
                      end={183}
                      duration={5}
                      formattingFn={(value) => `${value}K+`}
                    />
                  )}
                </h3>
                <p>Complete Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
