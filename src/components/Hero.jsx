import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">AI-Driven Voice Assistant</div>
          <h2>
            Breaking Barriers for <br />
            <span>Inclusive Skilling</span>
          </h2>
          <p>
            AAWAAZ maps livelihoods and provides NSQF-aligned skilling recommendations for SC Communities under PM-AJAY through a voice-first, dialect-aware platform.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              Start Voice Demo
            </button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="voice-assistant-ui">
            <div className="floating-card card-1">
              <div className="card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              </div>
              <div>
                <p style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>Dialect Detected</p>
                <p style={{fontWeight: '600'}}>Bhojpuri</p>
              </div>
            </div>
            
            <div className="voice-waves">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            <div className="assistant-status">
              <div className="status-dot"></div>
              Listening...
            </div>
            
            <div className="floating-card card-2">
              <div className="card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>Match Found</p>
                <p style={{fontWeight: '600'}}>NSQF Level 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
