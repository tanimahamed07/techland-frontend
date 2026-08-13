"use client";

import { Award, Trophy, Medal, Crown } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "Best E-commerce Platform",
    year: "2024",
    description: "Recognized by Tech Awards Bangladesh",
    Icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-500/10",
  },
  {
    id: 2,
    title: "Customer's Choice Award",
    year: "2023",
    description: "Won by popular customer vote",
    Icon: Crown,
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 3,
    title: "Excellence in Service",
    year: "2023",
    description: "National Retail Excellence Awards",
    Icon: Medal,
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 4,
    title: "Top Rated Seller",
    year: "2022-2025",
    description: "Consistently rated 4.9+ stars",
    Icon: Award,
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            Achievements
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            We&apos;re honored to be recognized by industry leaders and our
            valued customers.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 text-center">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl ${achievement.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  <achievement.Icon
                    className={`w-8 h-8 ${achievement.color}`}
                  />
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-wider">
                  {achievement.year}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
