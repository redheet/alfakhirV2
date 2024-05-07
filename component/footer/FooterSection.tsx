import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="tf__footer mt_100">
      <div className="tf__footer_overlay pt_75">
        <div className="container">
          <div className="row justify-content-between g-4">
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-6">
              <div className="tf__footer_logo_area">
                <Link className="footer_logo" href="/">
                  <img
                    src="/images/main/alfakhir.png"
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
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-10 col-md-5 col-lg-5">
              <div className="tf__footer_content xs_mt_50">
                <h3>Helpful Links</h3>
                <ul>
                  <li>
                    <Link href="/#tujuan">Tujuan Sekolah</Link>
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
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6">
              <div className="tf__footer_content xs_mt_30">
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
            <div className="col-xl-3 col-sm-10 col-md-5 col-lg-4 col-lg-5">
              <div className="tf__footer_content xs_mt_45">
                <h3>Hubungi Kami</h3>
                <p>
                  Jl. Kemang, Pasir Putih, Kec. Sawangan, Kota Depok, Jawa Barat
                  16519
                </p>
                <p>
                  <span>
                    {" "}
                    Phone:{" "}
                    <Link href="tel: +6285281752123">+62 852-8175-2123</Link>
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
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tf__copyright">
                <p>
                  Copyright © SMP Islam Modern Al-Fakhir all rights reserved.
                </p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <Link href="/privacy-policy">Kebijakan pribadi</Link>
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
    </footer>
  );
};

export default FooterSection;
