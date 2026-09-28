import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Map, 
  Users, 
  CheckCircle, 
  AlertCircle,
  LogOut,
  Bell,
  Search,
  Check,
  X,
  MapPin
} from 'lucide-react';
import './Dashboard.css'; // Let's create this file next for specific dashboard styles

const OfficerDashboard = () => {
  const [activeTab, setActiveTab] = useState('verification');

  // Dummy data for verification queue
  const queue = [
    {
      id: "GIA-2401",
      name: "Ramesh Kumar",
      village: "Palampur",
      detectedSkill: "Weaving (Traditional)",
      recommended: "Power-loom Operator (NSQF L4)",
      confidence: 94,
      status: "pending"
    },
    {
      id: "GIA-2402",
      name: "Sunita Devi",
      village: "Rampur",
      detectedSkill: "Tailoring (Basic)",
      recommended: "Boutique Management (SHG Fund)",
      confidence: 88,
      status: "pending"
    },
    {
      id: "GIA-2403",
      name: "Vikash Paswan",
      village: "Dharamshala",
      detectedSkill: "Agriculture (Labor)",
      recommended: "Solar Panel Installer (Suryamitra)",
      confidence: 72,
      status: "flagged"
    }
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-icon-sm">A</div>
          <h2>AAWAAZ Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <LayoutDashboard size={20} /> Overview
          </button>
          <button className={`nav-item ${activeTab === 'verification' ? 'active' : ''}`} onClick={() => setActiveTab('verification')}>
            <CheckCircle size={20} /> Verification Queue
            <span className="badge">12</span>
          </button>
          <button className={`nav-item ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>
            <Map size={20} /> Livelihood Map
          </button>
          <button className={`nav-item ${activeTab === 'batches' ? 'active' : ''}`} onClick={() => setActiveTab('batches')}>
            <Users size={20} /> Skill Batches
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="nav-item">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search beneficiary, village, or ID..." />
          </div>
          <div className="topbar-actions">
            <button className="icon-btn"><Bell size={20} /></button>
            <div className="officer-profile">
              <div className="avatar">DO</div>
              <div className="profile-info">
                <span className="name">District Officer</span>
                <span className="role">PM-AJAY Nodal</span>
              </div>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="page-header">
            <h1>GIA Verification Queue</h1>
            <p>Review AI-generated profiles and approve skilling recommendations.</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-title">Pending Verification</div>
              <div className="stat-value text-blue">12</div>
            </div>
            <div className="stat-box">
              <div className="stat-title">Approved Today</div>
              <div className="stat-value text-green">45</div>
            </div>
            <div className="stat-box">
              <div className="stat-title">Flagged for Manual Review</div>
              <div className="stat-value text-gold">3</div>
            </div>
            <div className="stat-box">
              <div className="stat-title">Avg Confidence Score</div>
              <div className="stat-value">91%</div>
            </div>
          </div>

          {/* Verification Table */}
          <div className="table-container">
            <table className="verification-table">
              <thead>
                <tr>
                  <th>Application ID</th>
                  <th>Beneficiary</th>
                  <th>Village</th>
                  <th>Detected Profile</th>
                  <th>AI Recommendation</th>
                  <th>Confidence</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((row) => (
                  <tr key={row.id}>
                    <td className="id-cell">{row.id}</td>
                    <td className="name-cell">{row.name}</td>
                    <td>
                      <span className="village-badge">
                        <MapPin size={14} /> {row.village}
                      </span>
                    </td>
                    <td>{row.detectedSkill}</td>
                    <td className="recommendation-cell">{row.recommended}</td>
                    <td>
                      <div className="confidence-bar">
                        <div 
                          className={`bar-fill ${row.confidence >= 90 ? 'high' : row.confidence >= 80 ? 'medium' : 'low'}`}
                          style={{width: `${row.confidence}%`}}
                        ></div>
                        <span>{row.confidence}%</span>
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-approve" title="Approve"><Check size={18} /></button>
                        <button className="btn-reject" title="Reject"><X size={18} /></button>
                        <button className="btn-flag" title="Flag for Review"><AlertCircle size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfficerDashboard;
