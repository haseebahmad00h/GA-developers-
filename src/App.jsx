import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurProjects from './components/OurProjects';
import ConstructionServices from './components/ConstructionServices';
import OurOffices from './components/OurOffices';
import ContactUs from './components/ContactUs';
import ProjectModal from './components/ProjectModal';
import FloatingSocials from './components/FloatingSocials';
import GlassToast from './components/GlassToast';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactInitialInterest, setContactInitialInterest] = useState('Etihad Town Phase 1');
  const [activeNotification, setActiveNotification] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (interest = 'Etihad Town Phase 1') => {
    setContactInitialInterest(interest);
    scrollToSection('contact');
  };

  const handleFormSubmitted = (data) => {
    setActiveNotification({
      name: data.name,
      phone: data.phone,
      interest: data.interest,
      mode: data.mode
    });
  };

  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] flex flex-col relative selection:bg-white selection:text-black">
      {/* 1. Floating Apple Liquid Glass Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero 
          onExploreProjects={() => scrollToSection('projects')}
          onConstruction={() => scrollToSection('construction')}
          onOurOffices={() => scrollToSection('offices')}
        />

        {/* 3. About Us Section */}
        <AboutUs onOpenContact={handleOpenContact} />

        {/* 4. Our Projects Section (ONLY 6 Working Projects) */}
        <OurProjects onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 5. Construction Services Section (Turnkey Luxury Villa Construction) */}
        <ConstructionServices onOpenContact={handleOpenContact} />

        {/* 6. Our Office Section (ONLY Etihad Town Phase 1, Lahore) */}
        <OurOffices onOpenContact={handleOpenContact} />

        {/* 7. Contact Us Section (Direct WhatsApp Submission) */}
        <ContactUs 
          initialInterest={contactInitialInterest}
          onSubmitted={handleFormSubmitted}
        />
      </main>

      {/* 8. Apple Liquid Glass Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* 9. Dedicated Project Detail Liquid Glass Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 10. Floating Social & WhatsApp Action Buttons */}
      <FloatingSocials />

      {/* 11. Apple Liquid Glass Notification Toast */}
      <GlassToast 
        notification={activeNotification}
        onDismiss={() => setActiveNotification(null)}
      />
    </div>
  );
}
