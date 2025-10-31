import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const organizers = [
  {
    role: "Faculty Coordinator",
    name: "Dr. Amogh P K & Dr. Prasanna Lakshmi G S",
    email: "amogh.pk@saividya.ac.in & prasannalakshmi.gs@saividya.ac.in",
  },
];

const eventManagers = [
  {
    name: "Md Zeeshan",
    phone: "9008534923",
    email: "mohammadzeeshan.24is@saividya.ac.in",
  },
  {
    name: "Anurag Paul",
    phone: "9477602009",
    email: "anuragpaul.24is@saividya.ac.in",
  },
];

const studentCoordinators = [
  {
    name: "Alisha Pandit",
    phone: "7989204532",
    email: "alishapandit.24is@saividya.ac.in",
  },
];

export const Team = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Event Organizers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the team making HACKNOVA possible
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Faculty Coordinator */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Faculty Coordinator</h3>
            <Card className="max-w-md mx-auto border-2 hover:border-primary/20 hover:shadow-md transition-all">
              <CardContent className="pt-6 text-center space-y-3">
                <h4 className="text-xl font-bold text-foreground">{organizers[0].name}</h4>
                <a 
                  href={`mailto:${organizers[0].email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{organizers[0].email}</span>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Event Managers */}
          <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Event Managers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {eventManagers.map((manager, index) => (
                <Card key={index} className="border-2 hover:border-secondary/20 hover:shadow-md transition-all">
                  <CardContent className="pt-6 space-y-3">
                    <h4 className="text-xl font-bold text-foreground text-center">{manager.name}</h4>
                    <div className="space-y-2">
                      <a 
                        href={`tel:${manager.phone}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors justify-center"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{manager.phone}</span>
                      </a>
                      <a 
                        href={`mailto:${manager.email}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors justify-center break-all"
                      >
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{manager.email}</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Student Coordinators</h3>
            <Card className="max-w-md mx-auto border-2 hover:border-accent/20 hover:shadow-md transition-all">
              <CardContent className="pt-6 space-y-3">
                <h4 className="text-xl font-bold text-foreground text-center">{studentCoordinators[0].name}</h4>
                <div className="space-y-2">
                  {studentCoordinators[0].phone && (
                    <a 
                      href={`tel:${studentCoordinators[0].phone}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors justify-center"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{studentCoordinators[0].phone}</span>
                    </a>
                  )}
                  <a 
                    href={`mailto:${studentCoordinators[0].email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors justify-center break-all"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{studentCoordinators[0].email}</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
