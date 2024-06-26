import React from "react";
import type { Metadata } from "next";
import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllCourseSection from "@/component/course/AllCourseSection";
import { CourseType } from "@/types";
import { getCourse } from "@/sanity/sanity.query";

export const metadata: Metadata = {
  title: "AlFakhir Courses",
  description: "Developed by Nozazi",
};
const page = async () => {
  const course: CourseType[] = await getCourse();
  return (
    <Layout>
      <BreadcrumbSection header="Program Kami" title="Program Kami" />
      {course && <AllCourseSection courseData={course} />}
    </Layout>
  );
};

export default page;
