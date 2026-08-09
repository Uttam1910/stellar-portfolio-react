import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsArchivePage } from './pages/ProjectsArchive';
import { ProjectCaseStudyPage } from './pages/ProjectCaseStudy';
import { SkillsPage } from './pages/SkillsPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';
import { ResumePage } from './pages/ResumePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsArchivePage />} />
        <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/Certificates" element={<EducationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
