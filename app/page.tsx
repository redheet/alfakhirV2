import React from "react";
import type { Metadata } from "next";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import VideoModal from "@/component/modal/VideoModal";
import FooterSection2 from "@/component/footer/FooterSection2";
import BlogSection2 from "@/component/blog/BlogSection2";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import ContactSection2 from "@/component/contact/ContactSection2";
import TeamSection from "@/component/team/TeamSection";
import CounterSection from "@/component/counter/CounterSection";
import CourseSection2 from "@/component/courses/CourseSection2";
import ContactSection from "@/component/contact/ContactSection";
import AboutSection3 from "@/component/about/AboutSection3";
import CategorySection3 from "@/component/category/CategorySection3";
import BannerSection3 from "@/component/banner/BannerSection3";
import NavbarSection from "@/component/navbar/NavbarSection";
import TopbarSection from "@/component/topbar/TopbarSection";
import FooterSection from "@/component/footer/FooterSection";
import {
  ActivityType,
  BlogType,
  CategoryType,
  CourseType,
  TeamType,
} from "@/types";
import {
  getActivity,
  getBlog,
  getCategory,
  getCourse,
  getTeam,
} from "@/sanity/sanity.query";
import AboutSection from "@/component/about/AboutSection";

export const metadata: Metadata = {
  title: "SMP Islam Modern Al-Fakhir | Home",
  description:
    "SMP Islam yang mengusung konsep modern, mengadopsi model kelas dan program internasional, namun tetap mengutamakan pendidikan karakter, moral, akhlak dan nilai-nilai keislaman.",
};
const page = async () => {
  const teamData: TeamType[] = await getTeam();
  const activityData: ActivityType[] = await getActivity();
  const blogData: BlogType[] = await getBlog();
  // const categoryData: CategoryType[] = await getCategory();
  // const courseData: CourseType[] = await getCourse();
  return (
    <div className="home_3">
      <TopbarSection style="tf__topbar tf__topbar_2" />
      <NavbarSection style="main_menu_3" logo="/images/main/alfakhir.png" />
      <BannerSection3 />
      {/* {categoryData && <CategorySection3 categoryData={categoryData} />} */}
      <AboutSection />
      {/* <AboutSection3 style="about_3" /> */}
      {/* <ContactSection /> */}
      {/* {courseData && <CourseSection2 courseData={courseData} />} */}
      {/* <CounterSection /> */}
      {teamData && (
        <TeamSection style="tf__team_3 pt_250 pb_100" teamData={teamData} />
      )}
      {/* <ContactSection2 /> */}
      {activityData && (
        <ActivitySection2
          style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100"
          activityData={activityData}
        />
      )}
      {blogData && <BlogSection2 blogData={blogData} />}
      <FooterSection />
      <VideoModal />
      <ScrollToTopButton style="style-3" />
    </div>
  );
};

export default page;
