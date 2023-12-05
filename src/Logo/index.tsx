import React, { useState } from 'react'

import './styles.css'

import { SPMSLogo } from '@spms/react-icons'
import { FaReact, FaAngular } from 'react-icons/fa';

export const Logo: React.FC = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState('sns')
  const [selectedIconCodeAngular, setSelectedIconCodeAngular] = useState('')
  const [selectedIconCodeReact, setSelectedIconCodeReact] = useState('')

  const logoList = [
    // 'sns-colors',
    'sns',
    'republica-portuguesa-colors',
    'republica-portuguesa',
    'rnu',
    'spms',
    // 'spms-colors',
    'spms-icon',
    // 'spms-icon-colors',
    'design-system-logo',
    'design-system-logo-min',
  ]

  async function openModal(item: string) {
    setSelectedIcon(item)
    setSelectedIconCodeReact(
      `<SPMSLogo fontIcon="${item}" color="primary" size="large" />`
    )
    setSelectedIconCodeAngular(
      `<spms-logo fontIcon="${item}" color="primary" size="large" />`
    )
    setModalIsOpened(true)
  }

  async function closeModal() {
    setModalIsOpened(false)
  }

  function copyText(text: string) {
    const input = document.createElement('input');
    input.value = text;
    
    document.body.appendChild(input);
    
    input.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(input);
  }

  return (
    <div className="main">
      <div className="grid_container">
        {logoList.map(item => (
          <div className="grid_content" key={item}>
            <button
              type="button"
              className="icon"
              onClick={() => openModal(item)}
            >
              <SPMSLogo
                fontIcon={item}
                color="primary"
                // size="large"
              />
            </button>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div
        className={
          modalIsOpened ? 'modal_container active' : 'modal_container'
        }>
        <div className="modal_content">
          <div className="header">
            <h3 onClick={() => copyText(selectedIcon)}>{selectedIcon}</h3>
          </div>

          <div className="code">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
              <FaAngular size={20} color="#DD0031" style={{ marginRight: 10 }} />
              <p onClick={() => copyText(selectedIconCodeAngular)}>{selectedIconCodeAngular}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaReact size={20} color="#5ed4f4" style={{ marginRight: 10 }} />
              <p onClick={() => copyText(selectedIconCodeReact)}>{selectedIconCodeReact}</p>
            </div>
          </div>

          <div className="content">
            <div className="icons">
              <div className="main_icon">
                <SPMSLogo
                  fontIcon={selectedIcon}
                  color="primary"
                  size="120px"
                />
              </div>

              <div className="size_icons">
                <div className="icon">
                  <SPMSLogo
                    fontIcon={selectedIcon}
                    color="primary"
                    size="small"
                  />
                  <p>small</p>
                  <span>20 x 20px</span>
                </div>
                <div className="icon">
                  <SPMSLogo
                    fontIcon={selectedIcon}
                    color="primary"
                    size="medium"
                  />
                  <p>medium</p>
                  <span>24 x 24px</span>
                </div>
                <div className="icon">
                  <SPMSLogo
                    fontIcon={selectedIcon}
                    color="primary"
                    size="large"
                  />
                  <p>large</p>
                  <span>40 x 40px</span>
                </div>
                <div className="icon">
                  <SPMSLogo
                    fontIcon={selectedIcon}
                    color="primary"
                    size="xlarge"
                  />
                  <p>xlarge</p>
                  <span>60 x 60px</span>
                </div>
              </div>
            </div>

            <button type="button" onClick={() => closeModal()}>
              Close modal
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
