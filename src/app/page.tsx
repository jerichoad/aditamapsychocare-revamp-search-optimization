import Header from '../components/Header';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Clients from '../components/Clients';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import WhyUs from '../components/WhyUs';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Statistics />
        </FadeInSection>
        <FadeInSection>
          <Clients />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <AboutUs />
        </FadeInSection>
        <FadeInSection>
          <WhyUs />
        </FadeInSection>
        <FadeInSection>
          <Pricing />
        </FadeInSection>
        <FadeInSection>
          <Process />
        </FadeInSection>
        <FadeInSection>
          <ContactCTA />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
