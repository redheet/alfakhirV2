"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const BannerSection3 = () => {
  const dispatch = useAppDispatch();
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen());
  };
  return (
    <section className="tf__banner_2 tf__banner_3">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-md-10 col-lg-8">
            <div className="tf__banner_text wow fadeInUp">
              <h5>Selamat Datang!</h5>
              <h1>
                SMP Islam<span> Modern </span>Al-Fakhir.
              </h1>
              <p>
                SMP Islam yang mengusung konsep modern, mengadopsi model kelas
                dan program internasional, namun tetap mengutamakan pendidikan
                karakter, moral, akhlak dan nilai-nilai keislaman.
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn_3" href="#">
                    program kami
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection3;
