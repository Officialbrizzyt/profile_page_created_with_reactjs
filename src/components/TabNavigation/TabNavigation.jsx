import React from 'react'
import './TabNavigation.css'

const TabNavigation = ({ activeTab, setActiveTab, tabData }) => {
  return (
    <div className="tabs-wrapper">
      <div className="tabs-button">
        {tabData.map((tab) => (
          <button 
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <div id="active-bg"></div>
      </div>
    </div>
  )
}

export default TabNavigation