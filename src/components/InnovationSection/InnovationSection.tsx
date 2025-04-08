"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CardContent from "../ui/card-content";
import AppleStyledCard from "../ui/apple-card";

interface FacilityCardProps {
  title: string;
  imageUrl: string;
  className?: string;
  gradientColor?: string;
  description: string;
  delay: number;
  index: number; // Used to alternate direction
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, imageUrl, className = "", gradientColor, delay, index, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Alternate direction: even index from left, odd from right
  const direction = index % 2 === 0 ? -50 : 50; // -50 for left, 50 for right

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }} // Start off-screen left or right
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : direction }} // Slide to center
      transition={{ duration: 0.5, ease: "easeOut", delay }} // Smooth transition with delay
      className={`relative rounded-2xl overflow-hidden group h-[360px] ${className}`}
    >
      <AppleStyledCard
        imageSrc={imageUrl}
        title={title}
        imageAlt={title}
        key={title}
        gradientColor={gradientColor}
        content={
          <CardContent
            imageSrc={imageUrl}
            description={description}
            backgroundColor=""
            textColor="text-neutral-600"
            headingColor="text-neutral-700"
          />
        }
      />
    </motion.div>
  );
};

function Innovations() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <div className="min-h-screen relative" ref={sectionRef}>
      
      <div className="max-w-7xl xl:mx-auto mx-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isSectionInView ? 1 : 0, y: isSectionInView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className="md:my-24 my-16"
        >
          <h1 className="xl:text-[2.5rem] md:text-[2.5rem] text-[1.5rem]  lg:text-[2rem] md:leading-10 leading-7 font-bold text-gray-900 mb-4">
            Comprehensive Support
            <br />
            for Growing Minds
          </h1>
          <p className="text-gray-600 lg:max-w-1/3">From high-tech labs to serene study spaces, We provide the perfect learning environment.</p>
        </motion.div>
        <div className="lg:grid grid-cols-12 gap-4 hidden relative">
          <FacilityCard
            title="New Admission Block"
            description="Manipal School boasts well-stocked libraries that serve as vibrant learning hubs, offering a diverse collection of periodicals, journals, magazines, newsletters, encyclopedias, fiction, and reference books. Our libraries go beyond traditional reading by integrating structured learning programs, including phonics for early learners and literary classics for older students. We are committed to providing a rich reading culture, inspiring students to explore, engage, and develop a lifelong love for books"
            imageUrl="/images/activityImages/activityImage1.png"
            className="lg:col-span-3 md:col-span-5 row-span-2 mt-56"
            gradientColor="#1A97A2"
            delay={0.1}
            index={0} // From left
          />
          <FacilityCard
            title="Auditorium"
            description="At Manipal School, we believe that a healthy body nurtures a healthy mind. Our state-of-the-art sports infrastructure(Marena) is designed to meet the diverse physical training needs of our students. With dedicated spaces for cricket, basketball, football, and badminton, we provide ample opportunities for students to engage in sports under the guidance of experienced coaches.
To support overall well-being, we incorporate yoga into our curriculum, fostering mindfulness and inner balance. Additionally, Karate training is offered to instill discipline, confidence, and self-defense skills, promoting both physical and mental resilience. Our structured sports program for Junior school students, curated by our training partner Edusports, ensures that every student develops essential athletic skills and gains exposure to various sports. 
"
            imageUrl="/images/activityImages/activityImage2.png"
            className="lg:col-span-3 md:col-span-5 row-span-1 top-32"
            gradientColor="#1A97A2"
            delay={0.2}
            index={1} // From right
          />
          <FacilityCard
            title="State-of-the-Art Labs"
            description="At Manipal School, we enrich our students' learning experience by hosting State-of-the-Art Labs delivered by industry experts and academicians. These sessions provide valuable real-world perspectives, inspire critical thinking, and broaden students' horizons. Through interactive discussions and expert guidance, our students gain deeper insights into various fields, helping them make informed academic and career choices."
            imageUrl="/images/activityImages/activityImage3.png"
            className="lg:col-span-3 md:col-span-5 row-span-2"
            gradientColor="#1A97A2"
            delay={0.3}
            index={2} // From left
          />
          <FacilityCard
            title="Well-Equipped Classrooms"
            description=" At Manipal School, we believe in nurturing socially responsible individuals by encouraging students to actively participate in outreach and community engagement programs. Through initiatives such as environmental drives, visits to orphanages and elderly homes, and awareness campaigns, students develop empathy, leadership, and a strong sense of civic responsibility. These experiences not only enrich their personal growth but also instill values of compassion and service, shaping them into responsible and compassionate individuals."
            imageUrl="/images/activityImages/activityImage4.png"
            className="lg:col-span-3 md:col-span-5 row-span-1 top-20"
            gradientColor="#1A97A2"
            delay={0.4}
            index={3} // From right
          />
          <FacilityCard
            title="Expansive Library"
            description=" Manipal School collaborates with MAHE (Manipal Academy of Higher Education) to provide students with exclusive career exposure and academic guidance. Through expert-led workshops, career counseling sessions, and interactive seminars, students gain insights into various professional fields and emerging career trends. This collaboration offers a unique opportunity for mentorship, skill development, and hands-on learning experiences, empowering students to make informed choices about their higher education and future careers."
            imageUrl="/images/activityImages/activityImage5.png"
            className="lg:col-span-3 md:col-span-5 row-span-2 top-36"
            gradientColor="#1A97A2"
            delay={0.5}
            index={4} // From left
          />
          <FacilityCard
            title="Canteen"
            description="We are committed to equipping our students with the knowledge and guidance needed to make informed decisions about their future. Through university fairs, career counseling sessions, and interactions with esteemed academicians, we provide students with valuable insights into higher education opportunities. College visits, workshops, Job shadowing program and mentorship programs help them explore diverse career paths, empowering them to make confident choices for their academic and professional journeys."
            imageUrl="/images/activityImages/activityImage6.png"
            className="lg:col-span-4 md:col-span-5 lg:max-w-[230px] row-span-2 xl:max-w-[310px] top-[-13rem]"
            gradientColor="#1A97A2"
            delay={0.6}
            index={5} // From right
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 relative lg:hidden">
          <FacilityCard
            title="New Admission Block"
            description="Manipal School boasts well-stocked libraries that serve as vibrant learning hubs, offering a diverse collection of periodicals, journals, magazines, newsletters, encyclopedias, fiction, and reference books. Our libraries go beyond traditional reading by integrating structured learning programs, including phonics for early learners and literary classics for older students. We are committed to providing a rich reading culture, inspiring students to explore, engage, and develop a lifelong love for books"
            imageUrl="/images/activityImages/activityImage1.png"
            className="col-span-1"
            gradientColor="#1A97A2"
            delay={0.1}
            index={0}
          />
          <FacilityCard
            title="Auditorium"
            description="At Manipal School, we believe that a healthy body nurtures a healthy mind. Our state-of-the-art sports infrastructure(Marena) is designed to meet the diverse physical training needs of our students. With dedicated spaces for cricket, basketball, football, and badminton, we provide ample opportunities for students to engage in sports under the guidance of experienced coaches.
To support overall well-being, we incorporate yoga into our curriculum, fostering mindfulness and inner balance. Additionally, Karate training is offered to instill discipline, confidence, and self-defense skills, promoting both physical and mental resilience. Our structured sports program for Junior school students, curated by our training partner Edusports, ensures that every student develops essential athletic skills and gains exposure to various sports. 
"
            imageUrl="/images/activityImages/activityImage2.png"
            className="col-span-1"
            gradientColor="#1A97A2"
            delay={0.2}
            index={1}
          />
          <FacilityCard
            title="State-of-the-Art Labs"
            description="At Manipal School, we enrich our students' learning experience by hosting State-of-the-Art Labs delivered by industry experts and academicians. These sessions provide valuable real-world perspectives, inspire critical thinking, and broaden students' horizons. Through interactive discussions and expert guidance, our students gain deeper insights into various fields, helping them make informed academic and career choices."
            imageUrl="/images/activityImages/activityImage3.png"
            className="col-span-1"
            gradientColor="#1A97A2"
            delay={0.3}
            index={2}
          />
          <FacilityCard
            title="Well-Equipped Classrooms"
            description="At Manipal School, we believe in nurturing socially responsible individuals by encouraging students to actively participate in outreach and community engagement programs. Through initiatives such as environmental drives, visits to orphanages and elderly homes, and awareness campaigns, students develop empathy, leadership, and a strong sense of civic responsibility. These experiences not only enrich their personal growth but also instill values of compassion and service, shaping them into responsible and compassionate individuals."
            imageUrl="/images/activityImages/activityImage4.png"
            className="col-span-1"
            gradientColor="#1A97A2"
            delay={0.4}
            index={3}
          />
          <FacilityCard
            title="Expansive Library"
            description="Manipal School collaborates with MAHE (Manipal Academy of Higher Education) to provide students with exclusive career exposure and academic guidance. Through expert-led workshops, career counseling sessions, and interactive seminars, students gain insights into various professional fields and emerging career trends. This collaboration offers a unique opportunity for mentorship, skill development, and hands-on learning experiences, empowering students to make informed choices about their higher education and future careers."
            imageUrl="/images/activityImages/activityImage5.png"
            className="col-span-1"
            gradientColor="#1A97A2"
            delay={0.5}
            index={4}
          />
          <FacilityCard
            title="Canteen"
            description="We are committed to equipping our students with the knowledge and guidance needed to make informed decisions about their future. Through university fairs, career counseling sessions, and interactions with esteemed academicians, we provide students with valuable insights into higher education opportunities. College visits, workshops, Job shadowing program and mentorship programs help them explore diverse career paths, empowering them to make confident choices for their academic and professional journeys."
            imageUrl="/images/activityImages/activityImage6.png"
            className="col-span-1"
            gradientColor="#1A97A2"
            delay={0.6}
            index={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Innovations;
