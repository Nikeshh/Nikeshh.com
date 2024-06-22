import Volunteer from "./volunteer";

const Volunteering = () => {
    return (
        <section id="volunteering" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>HEART WORK</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
              VOLUNTEERING
            </h2>
        </div>
        <div className="mt-14 flex flex-wrap gap-2 gap-y-12 justify-center">
          <Volunteer
            title='President, Indian Society Of Technical Education'
            description='INDIAN SOCIETY OF TECHNICAL EDUCATION-SNIST - (Jun 2016 - Jun 2019)'
            badges={["SNIST", "President"]}
          />
          <Volunteer
            title='President, Coding Club'
            description='PSG Institute Of Technology and Applied Research - (Jun 2016 - Jun 2019)'
            badges={["President", "PSG iTech", "Coding Club"]}
          />
          <Volunteer
            title='Education and Technical Mentor'
            description='Mentored SRM students and was involved in designing and developing Australian based educational platform - (July 2021 - April 2022)'
            badges={["Mentor", "SRM University"]}
          />
          <Volunteer
            title='Chief Designer and Coordinator'
            description='Tarangini - Intra college magazine - (June 2016 - June 2018)'
            badges={["PSG iTech", "Magazine"]}
          />
          <Volunteer
            title='IV coordinator'
            description='Companies: 24/7[ai] and SAP Solutions Pvt Ltd - Bangalore - (June 2015 - October 2017)'
            badges={["PSG iTech", "Coordinator", "24/7[ai]", "SAP"]}
          />
          <Volunteer
            title='Student Partner'
            description='Internshala - (June 2017 - December 2018)'
            badges={["Coordinator"]}
          />
          <Volunteer
            title='Academic Tutor - Android Development'
            description='Yuktaha, PSG iTech - Conducted a workshop on Android Development during Yuktaha&apos;17 - (June 2018 - June 2018)'
            badges={["Yuktaha", "Tutor"]}
          />
          <Volunteer
            title='President, Designer, Organiser'
            description='Institute of Engineers NSS (June 2016 - September 2019)'
            badges={["Civil Rights and Social Action"]}
          />
        </div>
      </section>
    );
}

export default Volunteering;