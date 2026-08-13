"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import {
  ArrowRight,
  Store,
  Zap,
  Users,
  Award,
  Shield,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Slides data for About page
const slides = [
  {
    badge: "About TechLand",
    title: "Your Trusted Partner",
    highlight: "In Technology",
    subtitle:
      "Since our inception, TechLand has been on a mission to make cutting-edge technology accessible to everyone. We're more than just an e-commerce platform.",
    cta: "Shop Now",
    ctaLink: "/products",
    secondaryCta: "Learn More",
    secondaryLink: "#our-story",
    Icon: Store,
    iconColor: "text-primary",
    badge2: "Est. 2020",
    badge3: "4.9★ Rated",
  },
  {
    badge: "Our Community",
    title: "50,000+ Happy",
    highlight: "Customers Trust Us",
    subtitle:
      "We've built a thriving community of tech enthusiasts who rely on us for authentic products, fast delivery, and exceptional customer service.",
    cta: "Join Us",
    ctaLink: "/products",
    secondaryCta: "Our Story",
    secondaryLink: "#our-story",
    Icon: Users,
    iconColor: "text-primary",
    badge2: "50K+ Users",
    badge3: "Trusted Brand",
  },
  {
    badge: "Excellence",
    title: "Award-Winning",
    highlight: "Service & Quality",
    subtitle:
      "Recognized as one of the most trusted electronics retailers. We guarantee 100% authentic products with official warranty on every purchase.",
    cta: "Explore",
    ctaLink: "/products",
    secondaryCta: "Our Values",
    secondaryLink: "#our-story",
    Icon: Award,
    iconColor: "text-primary",
    badge2: "100% Genuine",
    badge3: "Top Rated",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="hero-swiper group"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="min-h-[60vh] lg:min-h-[65vh] flex items-center transition-all duration-700 bg-linear-to-br from-primary/5 via-background to-accent/5">
              <div className="container mx-auto max-w-7xl px-4 lg:px-6 py-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Right: Visual Section - Now on the LEFT */}
                  <div className="hidden lg:flex items-center justify-center relative h-[400px] order-2 lg:order-1">
                    <div className="absolute w-64 h-64 rounded-full bg-primary/10 blur-[80px] animate-pulse" />

                    <div className="relative z-10 w-64 h-64 rounded-[2.5rem] bg-card/40 backdrop-blur-2xl shadow-xl border border-border flex items-center justify-center">
                      <slide.Icon
                        className={`w-24 h-24 ${slide.iconColor} drop-shadow-2xl`}
                      />
                    </div>

                    <Badge className="absolute top-8 left-8 shadow-md py-1.5 px-4 rounded-full bg-primary text-primary-foreground font-bold text-xs">
                      {slide.badge2}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="absolute bottom-8 right-8 shadow-md py-1.5 px-4 rounded-full bg-background/80 backdrop-blur-md font-bold text-xs border-border"
                    >
                      {slide.badge3}
                    </Badge>

                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-card/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-border text-center min-w-[100px]">
                      <div className="text-2xl font-black text-primary leading-none mb-1">
                        4.9★
                      </div>
                      <div className="text-[8px] uppercase tracking-widest font-black text-muted-foreground opacity-60">
                        Customer Rating
                      </div>
                    </div>
                  </div>

                  {/* Left: Content - Now on the RIGHT */}
                  <div className="space-y-6 text-center lg:text-right z-20 order-1 lg:order-2">
                    <Badge
                      variant="secondary"
                      className="gap-2 px-3 py-1 text-[10px] font-bold rounded-full border-primary/10 bg-secondary/80 backdrop-blur-md uppercase tracking-widest"
                    >
                      <Zap className="w-3 h-3 fill-primary text-primary" />
                      {slide.badge}
                    </Badge>

                    <div className="space-y-1">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                        {slide.title}
                      </h1>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary leading-[1.1]">
                        {slide.highlight}
                      </h1>
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 lg:ml-auto leading-relaxed font-medium">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                      {[
                        { icon: Shield, text: "100% Authentic" },
                        { icon: Truck, text: "Fast Delivery" },
                      ].map(({ icon: Icon, text }) => (
                        <div
                          key={text}
                          className="flex items-center gap-2 bg-secondary/30 backdrop-blur-md rounded-xl px-4 py-2 text-xs font-bold text-foreground/70 border border-border/50"
                        >
                          <Icon className="w-3.5 h-3.5 text-primary" />
                          {text}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-2">
                      <Button
                        asChild
                        size="lg"
                        className="rounded-full h-12 px-8 text-base font-bold shadow-lg bg-primary"
                      >
                        <Link
                          href={slide.ctaLink}
                          className="flex items-center gap-2"
                        >
                          {slide.cta} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-full h-12 px-8 text-base font-bold border-border bg-background/20 backdrop-blur-lg hover:bg-secondary"
                      >
                        <Link href={slide.secondaryLink}>
                          {slide.secondaryCta}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-pagination-bullet {
          background: oklch(var(--primary));
          opacity: 0.2;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 8px;
        }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: oklch(var(--primary));
          background: oklch(var(--background) / 0.8);
          backdrop-filter: blur(8px);
          width: 45px;
          height: 45px;
          border-radius: 100%;
          border: 1px solid oklch(var(--border));
          opacity: 0;
          transition: all 0.3s ease;
        }
        .hero-swiper:hover .swiper-button-next,
        .hero-swiper:hover .swiper-button-prev {
          opacity: 1;
        }
        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: 900;
        }
      `}</style>
    </section>
  );
}
