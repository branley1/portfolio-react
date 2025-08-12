import React from "react";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import "/src/components/HeroSection/_hero-section.scss";
import heroImage from "../../assets/images/hero/hero-image.jpg";
import profileImage from "../../assets/images/profile/profile.jpg";

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="hero-banner">
      <img
        src={heroImage}
        alt="Banner"
        className="banner-img"
        loading="eager"
      />
      <div className="profile-picture">
        <img src={profileImage} alt="Profile" className="dp" loading="eager" />
      </div>
    </div>
    {/* Include ProfileDetails within Hero */}
    <ProfileDetails />
  </section>
);

export default HeroSection;
