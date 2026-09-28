import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      
      {/* Workflow Section */}
      <section id="how-it-works" className="section workflow">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A seamless voice-first experience from outreach to outcome tracking.</p>
          
          <div className="workflow-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Listen</h4>
              <p>ASR turns dialect speech into text via Missed-Call or WhatsApp</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Converse</h4>
              <p>LLM slot-filling extracts education, skill, trade, and mobility</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Match</h4>
              <p>RAG over verified NSQF courses & local demand ranking</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Validate</h4>
              <p>Repeat-back confirmation & officer review before GIA enrolment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section">
        <div className="container">
          <h2 className="section-title">Impact & Scale</h2>
          <p className="section-subtitle">Targeting 47,000+ SC-majority villages with accessible digital infrastructure.</p>
          
          <div className="impact-grid">
            <div className="stat-card">
              <div className="stat-number">122+</div>
              <div className="stat-label">Languages Supported</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">47k+</div>
              <div className="stat-label">Villages Reached</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Forms to Fill</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3/6/12</div>
              <div className="stat-label">Months Tracking</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
