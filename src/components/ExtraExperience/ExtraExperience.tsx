import React, { useState } from "react";
import "./_extra-experience.scss";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  role,
  company,
  duration,
  location,
  description,
}) => (
  <div className="experience-item">
    <h4>{role}</h4>
    <h5>
      {company} | {location}
    </h5>
    <p>
      <em>{duration}</em>
    </p>
    {Array.isArray(description) ? (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>{description}</p>
    )}
  </div>
);

const ExperienceTimeline: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleExperienceItemClick = (e: React.MouseEvent) => {
    // Stop propagation to prevent closing dropdown when clicking on items
    e.stopPropagation();
  };

  return (
    <section 
      id="extra-experience" 
      className="my-4 experience-timeline"
      onClick={toggleDropdown}
    >
      <div className="experience-header">
        <h2>Extracurricular Experience</h2>
        <div className="dropdown-toggle">
          <i className={isOpen ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i>
        </div>
      </div>
      
      {isOpen && (
        <div className="experience-content" onClick={handleExperienceItemClick}>
          <ExperienceItem
            role="Swarthmore College Fellow 2024"
            company="University Innovation Fellows"
            duration="Jul 2023 - Jun 2024"
            location="Swarthmore, PA"
            description={[
              "Led campus-wide initiatives to enhance student engagement in innovation and entrepreneurship, impacting over 500 students.",
              "Developed strategies to improve collaboration among 15+ student organizations, boosting cross-organizational events by 60%.",
              "Presented research findings at the UIF conference in the Netherlands, leading to the implementation of 5+ campus-wide changes.",
            ]}
          />
          <ExperienceItem
            role="Resident Assistant"
            company="Swarthmore College"
            duration="Jul 2022 - Feb 2024"
            location="Swarthmore, PA"
            description={[
              "Supervised 30+ residents each semester and organized academic/social programming events, acting as the primary liaison between students and college administration.",
              "Demonstrated ethical leadership through confidential peer counseling, conflict resolution, and crisis management.",
            ]}
          />
          <ExperienceItem
            role="Multicultural Recruitment Intern"
            company="Swarthmore College"
            duration="Oct 2021 - Oct 2024"
            location="Swarthmore, PA"
            description={[
              "Worked closely with the Admissions Office Access Team to recruit underrepresented populations, enhancing campus diversity.",
              "Recruited and trained 50+ student hosts, tour guides, and event workers for admissions activities.",
              "Directed key recruitment and yield events, including Discover Swarthmore and Swatstruck, engaging 500+ prospective students.",
            ]}
          />
          <ExperienceItem
            role="Student Admissions' Tour Guide"
            company="Swarthmore College"
            location="Swarthmore, PA"
            duration="May 2023 - Aug 2023"
            description={[
              "Maintained detailed tour schedules and managed groups of up to 30 visitors, ensuring timely tour starts.",
              "Conducted in-depth research on the college's history, academic offerings, student organizations, and campus facilities to evaluate and bolster resource availability to promote inclusivity and leadership throughout all campus communities.",
              "Delivered informative and engaging campus tours for over 200 prospective students and families per month.",
            ]}
          />
          <ExperienceItem
            role="Game Day Operator"
            company="Swarthmore College"
            location="Swarthmore, PA"
            duration="Oct 2021 - May 2022"
            description={[
              "Collaborated with other game day operators to handle all aspects of the game, including the music, video production, camera operations, statistics, photography, scoreboard management, ball chasers, and other activities as designated by the Office of Athletic Communications at Swarthmore College.",
            ]}
          />
          <ExperienceItem
            role="Academic Tutor"
            company="Amiva"
            location="Nairobi, Kenya"
            duration="Mar 2022 - Nov 2022"
            description={[
              "Served as an academic tutor to high school students in Kenya applying to US universities and colleges.",
              "Mentored 10+ students through essay writing, helping them practice for aptitude tests and creating a comprehensive college application.",
            ]}
          />
        </div>
      )}
    </section>
  );
};

export default ExperienceTimeline;
