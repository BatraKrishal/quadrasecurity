import FaqCard from "@/components/Accordion/FaqCard";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";

export default function Contact() {
  return (
    <div className="h-auto w-full ">
      <ContactForm1 />
      <div>
        <h2 className="text-5xl font-bold text-center p-5">
          Frequently Asked Questions
        </h2>
        <div className=" flex flex-col items-center justify-center  p-6">
          <FaqCard
            question=" How does Quadra Security’s CCTV solution operate?"
            answer="Our CCTV systems integrate HD/IP cameras, NVRs, and cloud connectivity to provide real-time 
                    monitoring and smart analytics. Footage can be accessed remotely via secure mobile or desktop 
                    dashboards for complete situational awareness. "
          />
          <FaqCard
            question=" Can CCTV be integrated with other security systems? "
            answer="Yes! We specialize in integrating CCTV with access control, alarm systems, and ANPR cameras for 
                    unified security management and event-based automation.r"
          />
          <FaqCard
            question="How do biometric systems enhance operational efficiency?"
            answer="Our systems automate attendance tracking, eliminate proxy access, and generate instant reports — 
                    improving workforce accountability and administrative accuracy. "
          />
          <FaqCard
            question="Can ANPR data be used for automation and record-keeping? "
            answer="Yes! The data seamlessly integrates with toll, parking, and gate management systems for automated 
                    entry, billing, and audit trails."
          />
          <FaqCard
            question="Do you offer remote maintenance or upgrades? "
            answer="Absolutely! Our team provides remote diagnostics, firmware updates, and priority on-site support to 
                    ensure uninterrupted communication. "
          />
          <FaqCard
            question=" Do you provide complete installation and support services?"
            answer="Absolutely! Quadra Security provides end-to-end services including delivery, installation, 
                    configuration, and after-sales maintenance to ensure smooth operation and long-term reliability."
          />
        </div>
      </div>
    </div>
  );
}
