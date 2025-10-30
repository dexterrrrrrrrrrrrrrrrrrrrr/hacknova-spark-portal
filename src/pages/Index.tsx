import { Hero } from "@/components/Hero";
import { ProblemStatements } from "@/components/ProblemStatements";
import { EventDetails } from "@/components/EventDetails";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatements />
      <EventDetails />
      <Team />
      <Footer />
    </main>
  );
};

export default Index;
