"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

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
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Advantages",
          id: "/advantages",
        },
        {
          name: "Careers",
          id: "/careers",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="UTLogistics"
      button={{
        text: "Drive for Us",
        href: "/contact",
      }}
    />
  </div>

  <div id="contact-section" data-section="contact-section">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get In Touch"
      title="Start Your Career with UTLogistics"
      description="Ready to scale the future of freight? Apply today and join the most efficient dispatch-partnership network."
      imageSrc="http://img.b2bpic.net/free-photo/3d-abstract-flow-background-with-rays-cyber-dots_1048-11957.jpg"
      mediaAnimation="slide-up"
      mediaPosition="right"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Ready to Start?",
        },
      ]}
      buttons={[
        {
          text: "Apply Today",
          href: "/contact",
        },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why They Join Us"
      description="Hear from current partners."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/semi-truck-against-cloudy-sky_23-2152008993.jpg"
      logoText="UTLogistics"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/advantages",
            },
            {
              label: "Careers",
              href: "/careers",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Compliance",
          items: [
            {
              label: "MC# 12345678",
              href: "#",
            },
            {
              label: "DOT# 87654321",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 UTLogistics Inc. | Professional Logistics Services"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
