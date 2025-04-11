import AlumniInsights from "@/components/AlumniInsights/AlumniInsights";
import CampusExperiences from "@/components/CampusExperiences/CampusExperiences";
import CampusWalkThrough from "@/components/CampusWalkThrough/CampusWalkThrough";
import ProgramsCarousel from "@/components/ExplorePrograms/ExplorePrograms";
import Footer from "@/components/Footer/Footer";
import FormSection from "@/components/FormSection/FormSection";
import FutureSection from "@/components/FutureSection/FutureSection";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Innovations from "@/components/InnovationSection/InnovationSection";
import PlacementPartners from "@/components/PlacementPartners/PlacementPartners";
import PlacementSection from "@/components/PlacementSection/PlacementSection";


export default function Home() {
  return (
    <>
      <section >
        <HeroBanner />
      </section>
      <section className="md:hidden block">
        <FormSection/>
      </section>
      <section>
        <FutureSection/>
      </section>
      {/* <section>
        <CampusWalkThrough/>
      </section> */}
      <section>
        <ProgramsCarousel/>
      </section>
      <section>
        <Innovations/>
      </section>
      <section>
        <PlacementSection/>
      </section>
      <section>
        <PlacementPartners/>
      </section>
      {/* <section>
        <CampusExperiences/>
      </section> */}
      {/* <section>
        <AlumniInsights/>
      </section> */}
      <section>
        <Footer/>
      </section>
    </>
  );
}
