import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactPageSection from "@/component/contact/ContactPageSection";
import Layout from "@/component/layout/Layout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | SMP Islam Modern Al-Fakhir",
  description: "Kontak SMP Islam Modern Al-Fakhir",
};
const page = () => {
  return (
    <Layout>
      <BreadcrumbSection header="Hubungi Kami" title="Hubungi Kami" />
      <ContactPageSection />
    </Layout>
  );
};

export default page;
