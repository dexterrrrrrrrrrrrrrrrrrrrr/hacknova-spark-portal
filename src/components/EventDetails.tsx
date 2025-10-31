import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trophy, Users, Lightbulb } from "lucide-react";

const timeline = [
  {
    icon: Users,
    title: "Registration Opens",
    date: "October 31st, 2025",
    description: "Registration is now live on Unstop. Secure your spot now!",
    color: "text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Problem Statements Revealed",
    date: "October 31st, 2025",
    description: "All challenge themes and requirements will be announced.",
    color: "text-primary",
  },
  {
    icon: Calendar,
    title: "Hackathon Period",
    date: "Now - November 4th",
    description: "Build, innovate, and create your solutions.",
    color: "text-accent",
  },
  {
    icon: Trophy,
    title: "Final Submission",
    date: "November 4th, 2025",
    description: "Submit your projects before the deadline.",
    color: "text-destructive",
  },
];

export const EventDetails = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Event Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars and stay on track with important dates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {timeline.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden group hover:shadow-md transition-all duration-300 animate-slide-in-left border-2 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${event.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg leading-tight">
                        {event.title}
                      </h3>
                      <span className={`text-sm font-semibold ${event.color}`}>
                        {event.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
