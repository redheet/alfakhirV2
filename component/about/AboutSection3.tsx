"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type Props = {
  style: string;
};
const AboutSection3 = ({ style }: Props) => {
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
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="tf__about_small">
                <img
                  src="images/data.png"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large counter-box">
                <img
                  src="images/deni.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <p>
                <span>
                  {isVisible && (
                    <CountUp
                      start={1}
                      end={2}
                      duration={5}
                      formattingFn={(value) => `${value}+`}
                    />
                  )}
                </span>{" "}
                Berdirinya sekolah
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Sejarah</h5>
                <h2>Sejarah Sekolah.</h2>
              </div>
              <p>
                SMP Islam Modern Al Fakhir didirikan oleh Bpk. Deni Irawan, M.Pd
                pada bulan Oktober 2023. Arti nama Al-Fakhir artinya adalah
                kemuliaan, kebesaran atau kebanggaan dengan harapan sekolah ini
                bisa menjadi sekolah yang besar dan juga setiap siswa-siswi yang
                bersekolah di sekolah ini menjadi sosok yang membanggakan bagi
                dirinya sendiri, keluarga, juga masyarakat.{" "}
              </p>
              {/* <ul>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Successflly Trained</h4>
                    <p>
                      Business tailored it design, management support services.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_2.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Education Growth</h4>
                    <p>
                      Business tailored it design, management support services.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_3.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Students Trained</h4>
                    <p>
                      Business tailored it design, management support services.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_4.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Successflly Trained</h4>
                    <p>
                      Business tailored it design, management support services.
                    </p>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-12 mt_110 xs_mt_100 wow fadeInUp">
            <div className="tf__about_us_counter counter-box d-flex flex-wrap align-items-center">
              <p>
                {isVisible && (
                  <span className="counter">
                    <CountUp start={1} end={2000} duration={5} />
                  </span>
                )}
                {""}
                Ingin tau Al-Fakhir lebih lanjut !
              </p>
              <a
                href="https://pendaftaran.smpialfakhir.sch.id/"
                target="_blank"
              >
                Gabung Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
