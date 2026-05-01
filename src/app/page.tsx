"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
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
        { name: "Home", id: "/" },
        { name: "Advantages", id: "/advantages" },
        { name: "Careers", id: "/careers" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="UTLogistics"
      button={{ text: "Drive for Us", href: "/contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "rotated-rays-animated" }}
      title="Scaling the Future of Freight."
      description="Logistics excellence powered by Amazon Relay partnership. Driven by precision, supported by technology, and built for professional growth."
      buttons={[{ text: "Drive for Us", href: "/contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/night-trucking-delivers-cargo-steel-warehouse-generated-by-ai_188544-17396.jpg"
      imageAlt="professional semi truck highway"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "99%", title: "On-Time Delivery", items: ["Consistent timing", "Reliable scheduling", "Amazon standard"] },
        { id: "m2", value: "24/7", title: "Dispatch Support", items: ["Always connected", "Real-time tracking", "Dedicated team"] },
        { id: "m3", value: "500+", title: "Loads Monthly", items: ["High volume capacity", "Steady freight flow", "Reliable routes"] },
        { id: "m4", value: "$8K+", title: "Weekly Gross", items: ["Competitive rates", "High-earning potential", "Performance-based"] },
      ]}
      title="Our Growth Statistics"
      description="Proven performance, unwavering reliability, and dedicated support for every load."
    />
  </div>

  <div id="fleet" data-section="fleet">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Freightliner", name: "2024 Cascadia", price: "Available", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/green-cargo-truck-driving-winter-highway-across-snowy-landscape-logistics-truck-transport_169016-71739.jpg" },
        { id: "p2", brand: "Utility", name: "Dry Van 53'", price: "High Spec", rating: 5, reviewCount: "85", imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197204.jpg" },
        { id: "p3", brand: "Thermo King", name: "Reefer Unit", price: "High Spec", rating: 5, reviewCount: "95", imageSrc: "http://img.b2bpic.net/free-photo/scene-with-photorealistic-logistics-operations-proceedings_23-2151468885.jpg" },
        { id: "p4", brand: "Freightliner", name: "2023 Cascadia", price: "Available", rating: 5, reviewCount: "110", imageSrc: "http://img.b2bpic.net/free-photo/blank-cargo-truck-road_23-2151751321.jpg" },
        { id: "p5", brand: "Utility", name: "Dry Van 53'", price: "High Spec", rating: 5, reviewCount: "70", imageSrc: "http://img.b2bpic.net/free-photo/cargo-trucks-shipping-containers-sunset-port_23-2151998716.jpg" },
        { id: "p6", brand: "Thermo King", name: "Reefer Unit", price: "High Spec", rating: 5, reviewCount: "60", imageSrc: "http://img.b2bpic.net/free-photo/woman-climbing-retro-train_23-2147770307.jpg" },
      ]}
      title="Our Modern Fleet"
      description="Reliable 2022+ equipment designed for maximum uptime and performance."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="What Our Partners Say"
      description="Trusted by independent owner-operators and logistics pros across the country."
      testimonials={[
        { id: "t1", name: "James R.", role: "Senior Driver", testimonial: "UTLogistics provides the most stable routes I've ever had on the Amazon Relay platform.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-bearded-trucker-standing-front-truck-trailer-against-grey-shiny-tarpaulin_342744-1308.jpg" },
        { id: "t2", name: "Sarah K.", role: "Dispatcher", testimonial: "The TMS tools provided here are lightyears ahead of my previous dispatch firm.", imageSrc: "http://img.b2bpic.net/free-photo/call-center-agent-laughing-funny-joke-while-talking-with-customer-office_482257-125812.jpg" },
        { id: "t3", name: "Marcus L.", role: "Owner-Operator", testimonial: "Consistent weekly gross and zero hassle with payment cycles. Highly recommended.", imageSrc: "http://img.b2bpic.net/free-photo/truck-driver-inspecting-truck-long-vehicle-before-driving_342744-1311.jpg" },
        { id: "t4", name: "Elena V.", role: "Trucking Fleet Manager", testimonial: "Professional support team that actually understands the complexities of freight.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-wearing-trucker-hat_23-2149432362.jpg" },
        { id: "t5", name: "David W.", role: "Long-Haul Driver", testimonial: "Excellent home time flexibility. They really care about the drivers here.", imageSrc: "http://img.b2bpic.net/free-photo/man-working-as-truck-driver_23-2151489795.jpg" },
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Choose Your Growth Path"
      description="Flexible compensation structures designed to help you succeed at your own pace."
      plans={[
        { id: "p1", badge: "New Drivers", price: "$8,000+", name: "Starter Package", buttons: [{ text: "Apply Now", href: "/contact" }], features: ["Training Support", "Relay Access", "Daily Payouts", "Dedicated Fleet Manager"] },
        { id: "p2", badge: "Most Popular", price: "$12,000+", name: "Professional Tier", buttons: [{ text: "Join Team", href: "/contact" }], features: ["Premium Routes", "High-Volume Loads", "Dispatch Priority", "Advanced TMS Tools"] },
        { id: "p3", badge: "High Yield", price: "$15,000+", name: "Fleet Growth", buttons: [{ text: "Contact Us", href: "/contact" }], features: ["Multi-Truck Support", "Dedicated Dispatcher", "Exclusive Load Boards", "Performance Bonus"] },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/semi-truck-against-cloudy-sky_23-2152008993.jpg?_wi=1"
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
