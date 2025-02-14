
import React from "react";
import type { Metadata } from "next";
import Layout from "@/component/layout/Layout";

export const metadata: Metadata = {
  title: "Pengumuman Observasi Siswa & Orang Tua | SMP Islam Modern Al-Fakhir",
  description: "Developed by Nozazi",
};

const page = () => {
  return (
    <Layout>
     <iframe
      className="pdf_viewer"
      src="https://drive.google.com/file/d/1Gp58xqYUxS9WwsPBolIASzlVKoRJc0g4/preview" 
      width="100%" 
      height="1000" 
     />
    </Layout>
  );
};

export default page;
