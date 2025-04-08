import CampusWalkThrough from "@/components/CampusWalkThrough/CampusWalkThrough";
import ProgramsCarousel from "@/components/ExplorePrograms/ExplorePrograms";
import FormSection from "@/components/FormSection/FormSection";
import FutureSection from "@/components/FutureSection/FutureSection";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Innovations from "@/components/InnovationSection/InnovationSection";
import PlacementSection from "@/components/PlacementSection/PlacementSection";


export default function Home() {
  return (
    <>
      <section className="relative h-screen">
        <HeroBanner />
      </section>
      {/* <section>
        <FormSection/>
      </section> */}
      <section>
        <FutureSection/>
      </section>
      <section>
        <CampusWalkThrough/>
      </section>
      <section>
        <ProgramsCarousel/>
      </section>
      <section>
        <Innovations/>
      </section>
      <section>
        <PlacementSection/>
      </section>
    </>
  );
}
