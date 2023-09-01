import React, { useState } from 'react'

import './styles.css'

import { SPMSIcon } from '@spms/react-icons'
import { FaReact, FaAngular } from 'react-icons/fa';

export const Multicolor: React.FC = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState('user')
  const [selectedIconCodeAngular, setSelectedIconCodeAngular] = useState('')
  const [selectedIconCodeReact, setSelectedIconCodeReact] = useState('')

  const multicolorIconsList = [
    "technician-speak-circle",
    "no-smoking-circle",
    "healthy-eating-circle",
    "urgency-circle",
    "clinic-biology-circle",
    "exercise-circle",
    "intervention-children-circle",
    "internment-circle",
    "public-health-circle",
    "vaccination-circle",
    "sexual-reproduction-health-circle",
    "consult-circle",
    "x-ray-circle",
    "social-worker-circle",
    "cira-circle",
    "surgery-circle",
    "psichology-circle",
    "occupational-therapist",
    "hepatits-circle",
    "sport-circle",
    "nurse-circle",
    "rheumatology-circle",
    "diseases-brain-heart-circle",
    "no-diabetes-circle",
    "central-circle",
    "environmental-health-circle",
    "diabetes-circle",
    "oral-health-circle",
    "local-informatics-circle",
    "stomatology-circle",
    "child-juvenile-health-circle",
    "occupational-health-circle",
    "local-clinic-circle",
    "dental-prothesis-technician-circle",
    "school-health-circle",
    "accidents-prevention-circle",
    "administration-area-circle",
    "obstetrics-gynecologist-circle",
    "children-at-risk-circle",
    "preventin-pain-circle",
    "family-doctor-circle",
    "neurophysiology-technician-circle",
    "mental-health-circle",
    "idea-to-paint-circle",
    "nutritionist-circle",
    "orthoprotesic-circle",
    "vision-health-circle",
    "family-circle",
    "dentist-circle",
    "oral-hygiene-circle",
    "tuberculosis-circle",
    "mind-circle",
  ]

  async function openModal(item: string) {
    if (
      item.includes('-circle') &&
      item !== 'video-on-circle' &&
      item !== 'video-off-circle' &&
      item !== 'sound-on-circle' &&
      item !== 'sound-off-circle' &&
      item !== 'microphone-on-circle' &&
      item !== 'microphone-off-circle' &&
      item !== 'chat-on-circle' &&
      item !== 'chat-off-circle'
    ) {
      setSelectedIcon(item);
      setSelectedIconCodeReact(
        `<SPMSIcon fontIcon="${item}" color="primary" secondColor="#CCEBF5" size="large" />`
      )
      setSelectedIconCodeAngular(
        `<spms-icon fontIcon="${item}" color="primary" secondColor="#CCEBF5" size="large" />`
      )
      setModalIsOpened(true)
    } else {
      setSelectedIcon(item)
      setSelectedIconCodeReact(
        `<SPMSIcon fontIcon="${item}" color="primary" size="large" />`
      )
      setSelectedIconCodeAngular(
        `<spms-icon fontIcon="${item}" color="primary" size="large" />`
      )
      setModalIsOpened(true)
    }
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
        {multicolorIconsList.map(item => (
          <div className="grid_content" key={item}>
            <button
              type="button"
              className="icon"
              onClick={() => openModal(item)}
            >
              <SPMSIcon
                fontIcon={item}
                color="primary"
                size="large"
                secondColor="#CCEBF5"
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
                <SPMSIcon
                  fontIcon={selectedIcon}
                  color="primary"
                  size="120px"
                  secondColor="#CCEBF5"
                />
              </div>

              <div className="size_icons">
                <div className="icon">
                  <SPMSIcon
                    fontIcon={selectedIcon}
                    color="primary"
                    size="small"
                    secondColor="#CCEBF5"
                  />
                  <p>small</p>
                  <span>20 x 20px</span>
                </div>
                <div className="icon">
                  <SPMSIcon
                    fontIcon={selectedIcon}
                    color="primary"
                    size="medium"
                    secondColor="#CCEBF5"
                  />
                  <p>medium</p>
                  <span>24 x 24px</span>
                </div>
                <div className="icon">
                  <SPMSIcon
                    fontIcon={selectedIcon}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                  <p>large</p>
                  <span>40 x 40px</span>
                </div>
                <div className="icon">
                  <SPMSIcon
                    fontIcon={selectedIcon}
                    color="primary"
                    size="xlarge"
                    secondColor="#CCEBF5"
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
