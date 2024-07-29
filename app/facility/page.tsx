import React from "react";
import type { Metadata } from "next";
import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllCourseSection from "@/component/courses/AllCourseSection";
import { CourseType } from "@/types";
import { getCourse } from "@/sanity/sanity.query";

export const metadata: Metadata = {
  title: "Fasilitas Kami | SMP Islam Modern Al-Fakhir",
  description: "Developed by Nozazi",
};
const page = async () => {
  const course: CourseType[] = await getCourse();
  return (
    <Layout>
      <BreadcrumbSection header="Fasilitas Kami" title="Fasilitas Kami" />
      {course && <AllCourseSection courseData={course} />}
    </Layout>
  );
};

export default page;
