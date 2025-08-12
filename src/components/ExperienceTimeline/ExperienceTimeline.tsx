import React from "react";
import "./_experience-timeline.scss";

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

const ExperienceTimeline: React.FC = () => (
  <section id="experience" className="experience-timeline">
    <h2>Technical Experience</h2>
    <ExperienceItem
      role="
      Software Engineer"
      company="Bloomberg LP"
      duration="From Sep 2025"
      location="New York, NY"
      description={[
        "Starting at Bloomberg Engineering as a full-time Software Engineer in September 2025."
      ]}
    />
    <ExperienceItem
      role="
      Software Engineering Intern"
      company="Google LLC"
      duration="May 2024 - Aug 2024"
      location="Sunnyvale, CA"
      description={[
        "Enhanced a spam clustering tool by integrating advanced text and image embeddings, improving detection accuracy by 25% and addressing image-based spam challenges.",

        "Optimized ETL pipelines, reducing data processing time by 10% and ensuring 99.9% uptime with fault-tolerant backend solutions.",

        "Conducted code reviews and implemented unit tests in an agile environment, ensuring high-quality deliverables and seamless team collaboration.",

        "Gained expertise in cloud computing, distributed systems, and data pipelines, with hands-on experience in C++, Go, SQL, and HTML/CSS.",
      ]}
    />
    <ExperienceItem
      role="IT Student Associate"
      company="Swarthmore College"
      duration="Sep 2023 - May 2024"
      location="Swarthmore, PA"
      description={[
        "Executed software upgrades and patch implementations, addressing an average of 35 IT-related tickets per week, improving system efficiency by 20%, and boosting user satisfaction in a high-demand environment.",
        "Developed and maintained a user-friendly ticketing system, reducing ticket resolution time by 30% and enhancing customer satisfaction.",
        "Collaborated with IT teams to implement new software and hardware solutions, ensuring seamless integration and optimal system performance.",
      ]}
    />
    <ExperienceItem
      role="Software Engineering Intern"
      company="Amiva"
      duration="May 2022 - Aug 2022"
      location="Nairobi, Kenya"
      description={[
        "Collaborated with Amiva's Engineering team to design and implement a payment infrastructure using Python, Django, MySQL and RabbitMQ, improving transaction processing by 40% and over 18% improvement in uptime.",
      ]}
    />
    <ExperienceItem
      role="iOS App Developer"
      company="Codepath.org"
      duration="Feb 2022 - May 2022"
      location="Swarthmore, PA"
      description={[
        "Learnt the fundamentals of Swift programming language and made iOS applications on Xcode.",

        "Developed a fully functioning iOS Flashcard app as part of the Codepath Intro to Mobile Design—iOS course.",

        "Graduated with Honors.",
      ]}
    />
  </section>
);

export default ExperienceTimeline;
