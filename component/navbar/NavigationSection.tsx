"use client";
import React from "react";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  position: string;
  btnPosition: boolean;
  navRef?: React.RefObject<HTMLDivElement>;
};

const NavigationSection = ({ position, btnPosition, navRef }: Props) => {
  const isMobileNavOpen = useAppSelector(
    (state) => state.mobileNav.isMobileNavOpen
  );
  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
          <Navlink href="/">Beranda</Navlink>
        </li>
        {/* <li className="nav-item">
          <Navlink href="/about">Tentang Kami</Navlink>
        </li> */}
        <li className="nav-item">
          <a className="nav-link">
            Tentang Kami <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <SubNavlink href="/tujuan">Tujuan</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/about">Sejarah</SubNavlink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            Menu <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            {/* <li>
              <SubNavlink href="/events">event</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/events/science-fair">event details</SubNavlink>
            </li> */}
            <li>
              <SubNavlink href="/team">Management Al-Fakhir</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/facility">Fasilitas Kami</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/blog">Berita</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/alfakhir-journey">Al-Fakhir Journey 2024</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/buletin-alfakhir">Buletin Al-Fakhir 2025</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/gallery">Foto Kegiatan </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/faq">FAQs</SubNavlink>
            </li>
            {/* <li>
              <SubNavlink href="/sign-in">sign in</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/sign-up">sign up</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/terms-condition">
                terms and condition
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/privacy-policy">privacy policy</SubNavlink>
            </li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            PPDB <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <a 
                href="https://youtu.be/-92WZjYHiBA" 
                target="_blank">
                Video Dokumentasi 2025
              </a>
            </li>
            <li>
              <SubNavlink href="/pengumuman">Hasil Observasi 1</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/pengumuman">Hasil Observasi 2</SubNavlink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Navlink href="/contact">Hubungi Kami</Navlink>
        </li>
        {btnPosition ? null : (
          <li className="nav-item">
            <a
              className="nav-link common_btn"
              href="https://pendaftaran.smpialfakhir.sch.id/"
            >
              Pendaftaran
            </a>
          </li>
        )}
      </ul>
      {btnPosition ? (
        <a
          className="common_btn_2 ms-auto"
          href="https://pendaftaran.smpialfakhir.sch.id/"
        >
          pendaftaran
        </a>
      ) : null}
    </div>
  );
};

export default NavigationSection;
