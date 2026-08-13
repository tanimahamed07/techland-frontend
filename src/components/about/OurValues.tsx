"use client";

import { ShieldCheck, Heart, Lightbulb, Users, Star, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Authenticity",
    description:
      "We guarantee 100% genuine products from authorized brands. No compromises on quality.",
    Icon: ShieldCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We go the extra mile to ensure a delightful experience.",
    Icon: Heart,
    color: "text-rose-600",
    bgColor: "bg-rose-500/10",
  },
  {
    title: "Innovation",
    description:
      "We constantly evolve to bring you the latest tech trends and cutting-edge solutions.",
    Icon: Lightbulb,
    color: "text-amber-600",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Community",
    description:
      "Building a family of tech lovers who inspire and support each other every day.",
    Icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Excellence",
    description:
      "From product selection to after-sales service, we strive for perfection in everything.",
    Icon: Star,
    color: "text-yellow-600",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Speed",
    description:
      "Lightning-fast delivery and instant support. We value your time as much as you do.",
    Icon: Zap,
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
];

export default function OurValues() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <Star className="w-3.5 h-3.5" />
            Core Values
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">
            The Pillars of <span className="text-primary">TechLand</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            These principles guide every decision we make and every interaction
            we have with our customers.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl ${value.bgColor} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}
                >
                  <value.Icon className={`w-7 h-7 ${value.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
