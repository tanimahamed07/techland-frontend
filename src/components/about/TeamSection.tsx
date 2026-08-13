"use client";

import { Users, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Arif Rahman",
    role: "Founder & CEO",
    image: "👨‍💼",
    description: "Visionary leader with 10+ years in tech retail.",
    linkedin: "#",
    email: "arif@techland.com",
  },
  {
    name: "Nadia Sultana",
    role: "Chief Technology Officer",
    image: "👩‍💻",
    description: "Tech expert driving innovation and digital transformation.",
    linkedin: "#",
    email: "nadia@techland.com",
  },
  {
    name: "Kamal Hossain",
    role: "Head of Operations",
    image: "👨‍🔧",
    description: "Ensuring smooth operations and timely deliveries.",
    linkedin: "#",
    email: "kamal@techland.com",
  },
  {
    name: "Riya Ahmed",
    role: "Customer Success Lead",
    image: "👩‍💼",
    description: "Dedicated to delivering exceptional customer experiences.",
    linkedin: "#",
    email: "riya@techland.com",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            Our Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">
            Meet The <span className="text-primary">Dream Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            A passionate group of individuals committed to bringing you the best
            tech shopping experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-5xl transition-transform group-hover:scale-110 duration-300">
                  {member.image}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 rounded-full"
                    asChild
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 rounded-full"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
