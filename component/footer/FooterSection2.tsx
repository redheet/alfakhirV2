"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
type Props = {
  style: string;
  logo: string;
};
const FooterSection2 = ({ style, logo }: Props) => {
  const dispatch = useAppDispatch();
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen());
  };
  return (
    <footer className={style}>
      <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Let’s See More About AlFakhir!</h3>
            <p>
              There are many variations of passages of agency Lorem Ipsum Fasts
              injecte.
            </p>
            <Link className="apply_btn" href="#">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between g-4">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img
                        src={logo}
                        alt="AlFakhir"
                        className="img-fluid w-100"
                      />
                    </Link>
                    <p>
                      Terwujudnya pendidikan yang bermutu tinggi dalam membentuk
                      siswa-siswi yang berakhlak, modern, dan menjadi kebanggaan
                      orang tua, masyarakat, bangsa dan negara.
                    </p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-google-plus-g"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Helpful Links</h3>
                    <ul>
                      <li>
                        <Link
                          href="https://e-learning.smpialfakhir.sch.id/"
                          target="_blank"
                        >
                          Online Learning
                        </Link>
                      </li>
                      <li>
                        <Link href="/#visimisi">Visi & Misi</Link>
                      </li>
                      <li>
                        <Link href="/about">Sejarah Kami</Link>
                      </li>
                      <li>
                        <Link href="/contact">Hubungi Kami</Link>
                      </li>
                      <li>
                        <Link
                          href="https://pendaftaran.smpialfakhir.sch.id/"
                          target="_blank"
                        >
                          Pendaftaran Online
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Program</h3>
                    <ul>
                      <li>
                        <Link href="#">Kurikulum</Link>
                      </li>
                      <li>
                        <Link href="#">Ekstrakurikuler</Link>
                      </li>
                      <li>
                        <Link href="#">Program Unggulan</Link>
                      </li>
                      <li>
                        <Link href="#">Program Internasional</Link>
                      </li>
                      <li>
                        <Link href="#">Program Beasiswa</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Hubungi Kami</h3>
                    <p>
                      Jl. Kemang, Pasir Putih, Kec. Sawangan, Kota Depok, Jawa
                      Barat 16519
                    </p>
                    <p>
                      <span>
                        {" "}
                        Phone:{" "}
                        <Link href="tel: +6285281752123">
                          +62 852-8175-2123
                        </Link>
                      </span>
                    </p>
                    <p>
                      <span>
                        Email:{" "}
                        <Link href="mailTo: smpialfakhir@gmail.com">
                          smpialfakhir@gmail.com
                        </Link>{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>
                      Copyright © SMP Islam Modern Al-Fakhir all rights
                      reserved.
                    </p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="/#">Kebijakan pribadi</Link>
                      </li>
                      <li>
                        <Link href="/about">Tentang Kami</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
