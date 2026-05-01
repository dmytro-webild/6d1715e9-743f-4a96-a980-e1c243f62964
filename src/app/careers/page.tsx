"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[{ name: "Home", id: "/" }, { name: "Advantages", id: "/advantages" }, { name: "Careers", id: "/careers" }, { name: "Contact", id: "/contact" }]}
      brandName="UTLogistics"
      button={{ text: "Drive for Us", href: "/contact" }}
    />
  </div>

  <div id="careers-section" data-section="careers-section">
      <TeamCardEleven
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={false}
      groups={[
        { id: "g1", groupTitle: "CDL Driver Roles", members: [{ id: "driver-1", title: "Top-Tier Pay", subtitle: "High Weekly Gross", detail: "Flexible home time and the support you deserve on every mile." }] },
        { id: "g2", groupTitle: "Dispatch Opportunities", members: [{ id: "disp-1", title: "Performance Commission", subtitle: "High-Volume Tools", detail: "Utilize advanced TMS tools to manage load boards effectively and earn commissions." }] },
      ]}
      title="Join Our Logistics Team"
      description="Choose your path—whether you are behind the wheel or driving the strategy from the dispatch desk."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[{ type: "text", content: "Your Future Starts Here" }]}
      buttons={[{ text: "See Openings", href: "/contact" }]}
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Career Insights"
      description="Articles on the future of logistics."
      blogs={[]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/semi-truck-against-cloudy-sky_23-2152008993.jpg?_wi=3"
      logoText="UTLogistics"
      columns={[
        { title: "Company", items: [{ label: "About Us", href: "/advantages" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }] },
        { title: "Compliance", items: [{ label: "MC# 12345678", href: "#" }, { label: "DOT# 87654321", href: "#" }, { label: "Privacy Policy", href: "#" }] },
      ]}
      copyrightText="© 2025 UTLogistics Inc. | Professional Logistics Services"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
