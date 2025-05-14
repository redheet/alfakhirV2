import React from "react";
import type { Metadata } from "next";
import Layout from "@/component/layout/Layout";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllCourseSection from "@/component/courses/AllCourseSection";
import { CourseType, ActivityType } from "@/types";
import { getCourse, getActivity } from "@/sanity/sanity.query";

export const metadata: Metadata = {
  title: "Fasilitas Kami | SMP Islam Modern Al-Fakhir",
  description: "Developed by Nozazi",
};
const page = async () => {
  // const course: CourseType[] = await getCourse();
  const activityData: ActivityType[] = await getActivity();
  return (
    <Layout>
      <BreadcrumbSection header="Fasilitas Kami" title="Fasilitas Kami" />
      {/* {course && <AllCourseSection courseData={course} />} */}
      {activityData && (
          <ActivitySection2
            style="tf__activities_slider_area pt_95 pb_100"
            activityData={activityData}
          />
        )}
    </Layout>
  );
};

export default page;
