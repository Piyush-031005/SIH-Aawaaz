import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import '../components/Workflow.css';

const LandingPage = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      
      {/* Improved Workflow Section */}
      <section id="how-it-works" className="section workflow-new">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A seamless voice-first experience from outreach to outcome tracking, empowering real lives.</p>
          
          <div className="workflow-container">
            {/* Step 1 */}
            <div className="workflow-row">
              <div className="workflow-image">
                <img src="/farmer_phone.jpg" alt="Farmer speaking on phone" />
              </div>
              <div className="workflow-content">
                <div className="workflow-step-badge">1</div>
                <h3>Listen & Engage</h3>
                <p>No forms, no apps. A beneficiary simple gives a missed call or sends a WhatsApp voice note. Our system calls them back and speaks in their own local dialect, removing all literacy barriers.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="workflow-row">
              <div className="workflow-image">
                <img src="/rural_tailor.jpg" alt="Woman tailor working" />
              </div>
              <div className="workflow-content">
                <div className="workflow-step-badge">2</div>
                <h3>Conversational Profiling</h3>
                <p>An empathetic AI social worker asks gentle questions to understand their existing skills, family trade, and mobility constraints, turning a natural conversation into a structured profile.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="workflow-row">
              <div className="workflow-image">
                <img src="/rural_artisan.jpg" alt="Rural artisan working" />
              </div>
              <div className="workflow-content">
                <div className="workflow-step-badge">3</div>
                <h3>Match & Recommend</h3>
                <p>Instead of generic courses, AAWAAZ matches their profile with verified NSQF job roles and local district demand, ensuring they learn a skill that actually leads to employment or enterprise.</p>
              </div>
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
