import Honor from "./honor";

const HonorsAndAwards = () => {
    return (
        <section id="honors-and-awards" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>GLORY TROPHIES</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                HONORS AND AWARDS
            </h2>
        </div>
        <div className="mt-14 flex flex-wrap gap-2 gap-y-12 justify-center">
          <Honor
            title='TCS Enginx - Top 100'
            description='Got selected in TCS Enginx - Top 100 (June 2018)'
            badges={["TCS", "Hackathon"]}
          />
          <Honor
            title='Salesforce Trailhead'
            description='University Topper (Rank:Ranger) (June 2018)'
            badges={["Salesforce", "University Topper"]}
          />
          <Honor
            title='Proficiency award'
            description='1st Rank holder ( 2017 ) - Department of Computer Science and Engineering (June 2017)'
            badges={["PSG iTech", "University Topper"]}
          />
          <Honor
            title='Proficiency award'
            description='1st Rank holder ( 2018 ) - Department of Computer Science and Engineering (June 2018)'
            badges={["PSG iTech", "University Topper"]}
          />
          <Honor
            title='Proficiency award'
            description='1st Rank holder ( 2019 ) - Department of Computer Science and Engineering (June 2019)'
            badges={["PSG iTech", "University Topper"]}
          />
          <Honor
            title='Proficiency award'
            description='3rd Rank holder ( 2015-2019 ) - Department of Computer Science and Engineering (June 2019)'
            badges={["PSG iTech", "University Topper"]}
          />
        </div>
      </section>
    );
}

export default HonorsAndAwards;