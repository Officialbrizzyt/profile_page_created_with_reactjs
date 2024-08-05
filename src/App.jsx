import React,{useState} from 'react'
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import SocialLinks from './components/SocialLinks/SocialLinks';
import TabNavigation from './components/TabNavigation/TabNavigation';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Reviews from './components/Reviews/Reviews';
import Buttons from './components/Buttons/Buttons';


const Profile = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabData = [
    { id: 'about', label: 'About me', content: <AboutMe />},
    { id: 'skills', label: 'Skills', content: <Skills />},
    { id: 'reviews', label: 'Reviews', content: <Reviews />}
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="profile">
      < ProfileHeader />
      < ProfileInfo name="Emmanuel Michael" title="Frontend Developer"/>
      < SocialLinks />

      
      <main>
        <TabNavigation activeTab = {activeTab} setActiveTab={setActiveTab} tabData={tabData} />
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-content ${activeTab === tab.id ? 'tab-content--active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </main>
      < Buttons />
    </div>
  );
}

export default Profile