import React from "react";
import type { Metadata } from "next";
import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import CourseDetailSection from "@/component/courses/CourseDetailSection";
import { CourseType } from "@/types";
import { getCourse } from "@/sanity/sanity.query";

export const metadata: Metadata = {
  title: "Fasilitas Kami | SMP Islam Modern Al-Fakhir",
  description: "Developed by Nozazi",
};
const page = async ({ params }: { params: { slug: string } }) => { 
  const course: CourseType[] = await getCourse();
  const courseDesc = course.find((item) => item.slug === params.slug); // Use 'slug' here

  return (
    <Layout>
      <BreadcrumbSection header="Fasilitas Kami" title="Fasilitas Kami" />
      {courseDesc ? (
        <CourseDetailSection courseData={courseDesc} courseDataArray={course} />
      ) : (
        <ErrorSection type="fasilitas" />
      )}
    </Layout>
  );
};

export default page;
