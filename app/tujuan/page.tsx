
import React from "react";
import type { Metadata } from "next";
import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import BannerSection from "@/component/banner/BannerSection";

export const metadata: Metadata = {
  title: "Tujuan Sekolah | SMP Islam Modern Al-Fakhir",
  description: "Developed by Nozazi",
};

const page = () => {
  return (
    <Layout>
      <BreadcrumbSection header="Tujuan Sekolah" title="Tujuan Sekolah" />
      {/* <BannerSection /> */}
    </Layout>
  );
};

export default page;
