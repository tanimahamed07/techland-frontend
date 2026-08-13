"use client";

import { BookOpen, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "TechLand was founded with a vision to democratize access to the latest technology.",
    Icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    year: "2021",
    title: "Rapid Growth",
    description:
      "Expanded to 30+ cities with 10,000+ happy customers and 500+ products.",
    Icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
  {
    year: "2023",
    title: "Community Focus",
    description:
      "Built a thriving community of tech enthusiasts with 24/7 expert support.",
    Icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
  },
  {
    year: "2025",
    title: "Industry Leader",
    description:
      "Recognized as one of the most trusted electronics retailers with 50K+ customers.",
    Icon: Award,
    color: "text-orange-600",
    bgColor: "bg-orange-500/10",
  },
];

export default function OurStory() {
  return (
    <section id="our-story" className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Our Journey
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">
            The <span className="text-primary">TechLand</span> Story
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            What started as a small startup has grown into a nationwide trusted
            brand. Here&apos;s how we got here — one milestone at a time.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className="group border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8 flex flex-col">
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-fit mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-xs tracking-wider">
                  {milestone.year}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${milestone.bgColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}
                >
                  <milestone.Icon className={`w-7 h-7 ${milestone.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {milestone.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
