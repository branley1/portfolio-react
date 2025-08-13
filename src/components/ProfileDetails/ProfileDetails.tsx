import React from "react";
import { Button } from "react-bootstrap";
import { trackEvent } from "../../utils/analytics";
import "/src/components/ProfileDetails/_profile-details.scss";

const ProfileDetails: React.FC = () => {
  // Event handlers for Google Analytics
  const handleDownloadResume = () => {
    trackEvent({
      category: "Resume",
      action: "Downloaded Resume",
      label: "Download Resume Button",
    });
  };

  const handleMessageMe = () => {
    trackEvent({
      category: "Contact",
      action: "Clicked Message Me",
      label: "Message Me Button",
    });
  };

  const handleGitHub = () => {
    trackEvent({
      category: "Contact",
      action: "Clicked GitHub",
      label: "GitHub Button",
    });
  };

  const handleLinkedIn = () => {
    trackEvent({
      category: "Contact",
      action: "Clicked LinkedIn",
      label: "LinkedIn Button",
    });
  };

  const handleCurious = () => {
    trackEvent({
      category: "Navigation",
      action: "Visited Classic Site",
      label: "Curious Button",
    });
  };

  return (
    <div className="hero-content text-left">
      <div className="profile-info">
        <h1>Branley Mmasi</h1>
        <h4>
          Software Engineer @ Bloomberg LP | Computer Science major with a Cognitive Science minor,
          Swarthmore College, 2025.
        </h4>
        <div className="hero-buttons mt-3">
          <Button
            variant="outline-secondary"
            className="btn-gradient"
            href="https://drive.google.com/file/d/1SrwJCrNLfMOLNtAwNVq5qT65MCIO15bS/view?usp=sharing"
            target="_blank" /* Opens in new tab */
            rel="noopener noreferrer"
            onClick={handleDownloadResume}
          >
            {" "}
            Download Resume
          </Button>
          <Button
            variant="outline-secondary"
            className="btn-gradient"
            href="mailto:mmasi.branley@gmail.com?subject=Hello Bmmasi!&body=Hi, I visited your website and would like to get in touch!"
            target="_blank"
            onClick={handleMessageMe}
          >
            Contact
          </Button>
          <Button
            variant="outline-secondary"
            className="btn-gradient"
            href="https://github.com/branley1"
            target="_blank"
            onClick={handleGitHub}
          >
            GitHub
          </Button>
          <Button
            variant="outline-secondary"
            className="btn-gradient"
            href="https://linkedin.com/in/bmmasi1"
            target="_blank"
            onClick={handleLinkedIn}
          >
            LinkedIn
          </Button>
          <Button
            variant="outline-secondary"
            className="btn-gradient curious-btn"
            href="/classic/index.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCurious}
          >
            Curious?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
