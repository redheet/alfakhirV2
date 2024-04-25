"use client";
import React, { ReactNode } from "react";
import NavbarSection from "../navbar/NavbarSection";
// import FooterSection from "../footer/FooterSection";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import TopbarSection from "@/component/topbar/TopbarSection";
import FooterSection2 from "./../footer/FooterSection2";
type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <TopbarSection style="tf__topbar tf__topbar_2" />
      <NavbarSection style="main_menu_3" logo="/images/main/alfakhir.png" />
      {children}
      <ScrollToTopButton style="" />
      <FooterSection2 style="tf__footer_3" logo="/images/main/alfakhir.png" />
    </>
  );
};

export default Layout;
