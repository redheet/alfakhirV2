import React from "react";
import type { Metadata } from "next";
import Layout from "@/component/layout/Layout";

export const metadata: Metadata = {
  title: "Buletin Al-Fakhir | SMP Islam Modern Al-Fakhir",
  description: "Developed by Nozazi",
};

const page = () => {
  return (
    <Layout>
      <iframe
        className="pdf_viewer"
        src="https://drive.google.com/file/d/1T61Nc1eao2midrXwk_Q16iRuSjJQ0Hjv/preview"
        width="100%"
        height="5000"
      />
    </Layout>
  );
};

export default page;
