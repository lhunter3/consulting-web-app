import React, { useState } from 'react';

// Tabs component
const Tabs = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('styled-software');

  // Function to handle tab click
  const handleTabClick = (event, tabId) => {
    event.preventDefault(); // Prevents the default anchor link behavior
    setActiveTab(tabId);
  };

  return (
    <div className="mb-4 border-b shadow-xl shadow-bg-primary border-bg-primary">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        <li className="me-2" role="presentation">
          <button
            className={`text-xl  p-4 border-b-2 rounded-t-lg ${activeTab === 'styled-software' ? 'text-black  border-text-accent ' : ' hover:border-text-accent'}`}
            id="profile-styled-tab"
            data-tabs-target="#styled-software"
            type="button"
            role="tab"
            aria-controls="styled-software"
            aria-selected={activeTab === 'styled-software'}
            onClick={(event) => handleTabClick(event, 'styled-software')}
          >
            Development
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`text-xl  p-4 border-b-2 rounded-t-lg ${activeTab === 'styled-strategy' ? 'text-black  border-text-accent ' : ' hover:border-text-accent'}`}
            id="dashboard-styled-tab"
            data-tabs-target="#styled-strategy"
            type="button"
            role="tab"
            aria-controls="styled-strategy"
            aria-selected={activeTab === 'styled-strategy'}
            onClick={(event) => handleTabClick(event, 'styled-strategy')}
          >
            Strategy & Planning
          </button>
        </li>
        
      </ul>

      <div id="default-styled-tab-content">
        <div className={`p-4 rounded-lg ${activeTab === 'styled-software' ? 'bg-gray-50 dark:bg-gray-800' : 'hidden'}`} id="styled-software" role="tabpanel" aria-labelledby="profile-styled-tab">
          <p className="text-lg">Software development encompasses the end-to-end process of creating software applications tailored to specific needs. It begins with gathering and analyzing requirements from stakeholders and users to understand functionality expectations. 
          </p>
          <br></br>

          <p className="text-lg">
          Our team will <span className='font-semibold'>design, develop, test, and deploy</span> the software, ensuring it meets quality standards and user needs. We specialize in a variety of software development services, including web development and custom software solutions.
          </p>
        </div>
        <div className={`p-4 rounded-lg ${activeTab === 'styled-strategy' ? 'bg-gray-50 dark:bg-gray-800' : 'hidden'}`} id="styled-strategy" role="tabpanel" aria-labelledby="dashboard-styled-tab">
        

        <p className="text-lg">We don't believe in one-size-fits-all solutions. Our experts work closely with you to understand your business, market dynamics, and objectives to create a strategy that is uniquely yours.</p>
        <br></br>

        <p className="text-lg">Gain a deep understanding of your industry landscape and market opportunities. We conduct thorough analysis to identify trends, risks, and growth areas that will inform your strategic decisions so that you can stan out in a crowded marketplace.</p>
        <br></br>

        </div>

        
      </div>
    </div>
  );
};

export default Tabs;
