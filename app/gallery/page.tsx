
import React from "react";
import type { Metadata } from "next";
import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import GalleryPages from "@/component/gallery/GalleryPages";

export const metadata: Metadata = {
  title: "Gallery Pages | SMP Islam Modern Al-Fakhir",
  description: "Developed by Nozazi",
};

const page = () => {
  return (
    <Layout>
      <BreadcrumbSection header="Gallery Images" title="Gallery Images" />
      <GalleryPages />
    </Layout>
  );
};

export default page;
