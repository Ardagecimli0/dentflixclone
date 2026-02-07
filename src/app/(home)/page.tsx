import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PressLogos from "@/components/PressLogos";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import HospitalHotel from "@/components/HospitalHotel";
import Testimonials from "@/components/Testimonials";
import RhinoplastyBeforeAfterYT from "@/components/RhinoplastyBeforeAfterYT";
import WhyTurkey from "@/components/WhyTurkey";
import Packages from "@/components/Packages";
import WhyDoctor from "@/components/WhyDoctor";
import Publications from "@/components/Publications";
import ContactForm from "@/components/ContactForm";
import DoctorInfo from "@/components/DoctorInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import "@/app/globals.css";

// JSON dosyasından metadata al
import enDental from "../../../public/locales/en-dental.json";

export const metadata = {
    title: enDental.meta.title,
    description: enDental.meta.description,
    keywords: enDental.meta.keywords,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[#0c1015]">
            <Header />
            <Hero />
            <PressLogos />
            <Stats />
            <BeforeAfter />
            <HospitalHotel />
            <Testimonials />
            <RhinoplastyBeforeAfterYT />
            <WhyTurkey />
            <Packages />
            <WhyDoctor />
            <Publications />
            <ContactForm />
            <DoctorInfo />
            <FAQ />
            <Footer />
        </main>
    );
}
