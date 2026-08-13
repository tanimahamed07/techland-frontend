"use client";

import { Target, Eye, Sparkles } from "lucide-react";

export default function OurMission() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5" />
            Mission & Vision
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">
            What Drives <span className="text-primary">Us Forward</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="group relative bg-card border border-border rounded-3xl p-10 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <Target className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                <Sparkles className="w-4 h-4" />
                Our Mission
              </div>
              <h3 className="text-2xl font-black text-foreground pr-20">
                Empowering Lives Through Technology
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe everyone deserves access to the best technology at
                fair prices. Our mission is to bridge the gap between innovation
                and affordability, ensuring quality products reach every corner
                of the country with unmatched customer service.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-card border border-border rounded-3xl p-10 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <Eye className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                <Sparkles className="w-4 h-4" />
                Our Vision
              </div>
              <h3 className="text-2xl font-black text-foreground pr-20">
                Leading the Tech Revolution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and innovative electronics retailer,
                known for exceptional service, genuine products, and a
                customer-first approach. We envision a future where TechLand is
                synonymous with quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
