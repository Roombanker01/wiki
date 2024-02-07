// src/components/LanguageSelector.js
import React, { useState } from 'react';

const LanguageSelector = ({ pdfLinks }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);

  const handleDownload = () => {
    if (selectedLanguage && pdfLinks[selectedLanguage]) {
    //   window.location.href = pdfLinks[selectedLanguage];
    window.open(pdfLinks[selectedLanguage], '_blank');
    }
    handleCloseModal();
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button style={{ display: 'block', backgroundColor: '#92D050', color: '#ffffff', padding: '10px 30px', cursor: 'pointer', textDecoration: 'none', borderRadius: '4px', margin: '0 auto' }} onClick={handleOpenModal}>
          Download QSG
        </button>
      </div>
      {showModal && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '10px 30px', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Select a Language</h2>
          <select style={{ margin: '0 5px', display: 'inline-block', backgroundColor: '#92D050', color: '#ffffff', padding: '5px 10px', cursor: 'pointer', textDecoration: 'none', borderRadius: '4px' }} onChange={handleLanguageChange} value={selectedLanguage}>
            <option value="">Select...</option>
            {Object.keys(pdfLinks).map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <button style={{ margin: '0 5px', display: 'inline-block', backgroundColor: '#92D050', color: '#ffffff', padding: '5px 10px', cursor: 'pointer', textDecoration: 'none', borderRadius: '4px' }} onClick={handleDownload}>
              download
            </button>
            <button style={{ margin: '0 5px', display: 'inline-block', backgroundColor: '#92D050', color: '#ffffff', padding: '5px 10px', cursor: 'pointer', textDecoration: 'none', borderRadius: '4px' }} onClick={handleCloseModal}>
              cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
