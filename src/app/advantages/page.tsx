"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';

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

  <div id="amazon-advantage" data-section="amazon-advantage">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Drop & Hook Efficiency",
          description: "Minimize dock time and maximize drive time with streamlined drop-and-hook logistics.",
          tag: "Relay Focus",
          imageSrc: "http://img.b2bpic.net/free-photo/depot-workers-reviewing-goods-shelves-checking-inventory-list-computer-team-warehouse-coworkers-verifying-products-racks-before-shipping-retail-store-orders-handheld-shot_482257-64839.jpg",
        },
        {
          id: "f2",
          title: "No-Touch Freight",
          description: "Less physical labor, more time on the road. We prioritize efficient cargo handling.",
          tag: "Expertise",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-technology-concept_23-2151908112.jpg",
        },
        {
          id: "f3",
          title: "Advanced TMS Tools",
          description: "Access to high-volume load boards and state-of-the-art dispatching software.",
          tag: "Tech Enabled",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-admin-office-sing-tablet-design-machine-learning-algorithms_482257-112941.jpg",
        },
      ]}
      title="The Amazon Relay Advantage"
      description="We specialize in Amazon Relay, maximizing efficiency through drop & hook logistics and seamless no-touch freight processes."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Built for Reliability",
        },
      ]}
      buttons={[
        {
          text: "Explore Services",
          href: "/contact",
        },
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Advantages Pricing"
      description="See our competitive advantage."
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
