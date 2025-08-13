import React from "react";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import "/src/components/HeroSection/_hero-section.scss";
import heroImageWebp from "../../assets/images/hero/hero-image.webp";
import profileImageWebp from "../../assets/images/profile/profile.webp";

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="hero-banner">
      <picture>
        <source srcSet={heroImageWebp} type="image/webp" />
        <img
          src={heroImageWebp}
          alt="Banner"
          className="banner-img"
          loading="eager"
          decoding="async"
          sizes="100vw"
        />
      </picture>
      <div className="profile-picture">
        <picture>
          <source srcSet={profileImageWebp} type="image/webp" />
          <img
            src={profileImageWebp}
            alt="Profile"
            className="dp"
            loading="eager"
            decoding="async"
            width={150}
            height={150}
            sizes="150px"
          />
        </picture>
      </div>
    </div>
    {/* Include ProfileDetails within Hero */}
    <ProfileDetails />
  </section>
);

export default HeroSection;
