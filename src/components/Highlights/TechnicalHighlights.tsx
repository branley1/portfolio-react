import React, { useState } from "react";
import { useSpotify } from "../../contexts/SpotifyContext";
import "../ExperienceTimeline/_experience-timeline.scss";
import "../Projects/_projects.scss";

type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
};

const TechnicalHighlights: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { isPlaying } = useSpotify();
  return (
    <div className="projects-section my-1" style={{ marginBottom: '1.25rem' }}>
      <div
        className={`experience-timeline highlight-grid ${isPlaying ? 'playing' : 'paused'}`}
        style={{ display: 'grid', gap: '1.5rem' }}
      >
        <h2>stuff i've done:</h2>
        {(
          [
            {
              role: "Software Engineering Intern",
              company: "Google LLC",
              duration: "May 2024 - Aug 2024",
              location: "Sunnyvale, CA",
              description: [
                "Enhanced a spam clustering tool by integrating advanced text and image embeddings, improving detection accuracy by 25% and addressing image-based spam challenges.",
                "Optimized ETL pipelines, reducing data processing time by 10% and ensuring 99.9% uptime with fault-tolerant backend solutions.",
                "Conducted code reviews and implemented unit tests in an agile environment, ensuring high-quality deliverables and seamless team collaboration.",
                "Gained expertise in cloud computing, distributed systems, and data pipelines, with hands-on experience in C++, Go, SQL, and HTML/CSS.",
              ],
            },
            {
              role: "Swarthmore College Fellow 2024",
              company: "University Innovation Fellows",
              duration: "Jul 2023 - Jun 2024",
              location: "Swarthmore, PA",
              description: [
                "Led campus-wide initiatives to enhance student engagement in innovation and entrepreneurship, impacting over 500 students.",
                "Developed strategies to improve collaboration among 15+ student organizations, boosting cross-organizational events by 60%.",
                "Presented research findings at the UIF conference in the Netherlands, leading to the implementation of 5+ campus-wide changes.",
              ],
            },
            {
              role: "Resident Assistant",
              company: "Swarthmore College",
              duration: "Jul 2022 - Feb 2024",
              location: "Swarthmore, PA",
              description: [
                "Supervised 30+ residents each semester and organized academic/social programming events, acting as the primary liaison between students and college administration.",
                "Demonstrated ethical leadership through confidential peer counseling, conflict resolution, and crisis management.",
              ],
            },
          ] as Experience[]
        ).map((exp, idx) => (
          <React.Fragment key={idx}>
            <div
              className="project-card highlight-card"
              style={{ zIndex: 1 }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered((v) => (v === idx ? null : v))}
            >
              <div className="card-body">
                <h4 style={{ color: 'var(--heading-color)' }}>{exp.role}</h4>
                <h5 style={{ color: 'var(--text-color)' }}>
                  {exp.company} | {exp.location}
                </h5>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <em>{exp.duration}</em>
                </p>
                {hovered === idx && (
                  Array.isArray(exp.description) ? (
                    <ul style={{ paddingLeft: '1rem', listStyle: 'none', marginBottom: 0 }}>
                      {exp.description.map((d, i) => (
                        <li key={i} style={{ position: 'relative', paddingLeft: '0.75rem', marginBottom: '0.25rem' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--heading-color)' }}>{'>'}</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )
                )}
              </div>
            </div>

            {(exp.company || '').toLowerCase().includes('google') && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                  href="/technical"
                  className="btn-gradient cta-extracurricular-btn"
                  style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}
                >
                  View Technical Experience <i className="fa fa-arrow-right blink-arrow"></i>
                </a>
              </div>
            )}

            {idx === 2 && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                  href="/extra-experience"
                  className="btn-gradient cta-extracurricular-btn"
                  style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}
                >
                  View Extracurricular Experience <i className="fa fa-arrow-right blink-arrow"></i>
                </a>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
;

export default TechnicalHighlights;
