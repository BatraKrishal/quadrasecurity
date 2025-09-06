// app/services/page.tsx
import services from "@/constants/servicePage/cards.json";
import ServiceCard from "@/components/cards/ServicesCard";
import ServicesHero from "@/components/Hero/ServicesHero";
import ServicesFunnelCard from "@/components/cards/ServicesFunnelCard";


export default function ServicesPage() {


  return (
    <div>
      <ServicesHero />
      <div className="space-y-12 p-8 bg-gradient-to-b from-[#532D6A] to-[#4D00AB] min-h-screen">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            faqs={service.faqs}
            image={service.image}
            dotSvg="/ServicesImages/glowingdot.svg"
          />
        ))}
        <div className="flex">
          <div className="flex-1">
            <ServicesFunnelCard />
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
