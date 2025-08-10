import React from "react";
import Layout from "../components/Layouts/Layout";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExtraExperience from "../components/ExtraExperience/ExtraExperience";

const Extracurricular: React.FC = () => (
  <div className="app-container">
    <CustomNavbar />
    <div className="content-container">
      <Layout sidebarVariant="spotifyOnly">
        <ExtraExperience />
      </Layout>
    </div>
    <Footer />
  </div>
);

export default Extracurricular;
