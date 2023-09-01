import React, { useState } from 'react'

import './styles.css'

import { SPMSIcon } from '@spms/react-icons'
import { FaReact, FaAngular } from 'react-icons/fa';

// import { Container } from './styles';

export const Icons: React.FC = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState('user')
  const [selectedIconCodeAngular, setSelectedIconCodeAngular] = useState('')
  const [selectedIconCodeReact, setSelectedIconCodeReact] = useState('')

  const iconsList = [
    "administration",
    "arrow-down",
    "arrow-up",
    "arrow-left",
    "arrow-right",
    "circle",
    "circle-outlined",
    "power",
    "settings",
    "copy-to-clipboard",
    "copied-to-clipboard",
    "react",
    "angular",
    "api",
    "code",
    "hamburger",
    "documents-outlined",
    "users",
    "users-outlined",
    "consult",
    "consult-outlined",
    "photography",
    "photography-outlined",
    "information",
    "information-outlined",
    "filters",
    "filters-outlined",
    "more",
    "more-outlined",
    "waiting-list",
    "waiting-list-outlined",
    "user",
    "user-outlined",
    "definitions",
    "definitions-outlined",
    "add",
    "add-outlined",
    "clinical-notification",
    "clinical-notification-outlined",
    "surgery",
    "surgery-outlined",
    "alert",
    "alert-outlined",
    "wrong-document",
    "wrong-document-outlined",
    "management",
    "management-outlined",
    "enrollment",
    "enrollment-outlined",
    "hours",
    "hours-outlined",
    "monitoring",
    "monitoring-outlined",
    "internment",
    "internment-outlined",
    "compare",
    "compare-outlined",
    "administrative-management-outlined",
    "dashboard",
    "dashboard-outlined",
    "therapy",
    "therapy-outlined",
    "listing",
    "listing-outlined",
    "correspondence",
    "correspondence-outlined",
    "requests",
    "requests-outlined",
    "print",
    "print-outlined",
    "new-requests",
    "new-requests-outlined",
    "contacts-outlined",
    "microphone",
    "microphone-outlined",
    "maximize",
    "screen-sharing",
    "screen-sharing-outlined",
    "copy",
    "copy-outlined",
    "send",
    "send-outlined",
    "sound",
    "sound-outlined",
    "chat",
    "chat-outlined",
    "video",
    "video-outlined",
    "systems",
    "systems-outlined",
    "create-report",
    "create-report-outlined",
    "administrator",
    "administrator-outlined",
    "obesity",
    "obesity-outlined",
    "renal-insufficiency",
    "renal-insufficiency-outlined",
    "view-card",
    "view-card-outlined",
    "identification",
    "identification-outlined",
    "home",
    "home-outlined",
    "health-units",
    "health-units-outlined",
    "infection",
    "infection-outlined",
    "event-management",
    "event-management-outlined",
    "chronic-measurement",
    "chronic-measurement-outlined",
    "nutrition",
    "nutrition-outlined",
    "community",
    "community-outlined",
    "subsystems",
    "subsystems-outlined",
    "main-registration",
    "main-registration-outlined",
    "duplicate-registration",
    "duplicate-registration-outlined",
    "urgency",
    "urgency-outlined",
    "scales",
    "scales-outlined",
    "rates",
    "rates-outlined",
    "edit",
    "edit-outlined",
    "clinical-registration",
    "clinical-registration-outlined",
    "registration",
    "registration-outlined",
    "daily",
    "daily-outlined",
    "database",
    "database-outlined",
    "backend",
    "backend-outlined",
    "frontend",
    "frontend-outlined",
    "waiting-room",
    "waiting-room-outlined",
    "versioning",
    "versioning-outlined",
    "authentication",
    "authentication-outlined",
    "attach",
    "attach-outlined",
    "pathology",
    "pathology-outlined",
    "diagnosis",
    "diagnosis-outlined",
    "doctor",
    "doctor-outlined",
    "download",
    "request-declined",
    "request-declined-outlined",
    "logout",
    "logout-outlined",
    "external-reference",
    "external-reference-outlined",
    "internal-reference",
    "internal-reference-outlined",
    "medical-high-news",
    "medical-high-news-outlined",
    "results",
    "results-outlined",
    "household",
    "household-outlined",
    "do-not-smoke",
    "do-not-smoke-outlined",
    "birth-news",
    "birth-news-outlined",
    "references",
    "references-outlined",
    "search-user",
    "search-user-outlined",
    "esclerosis-multiple",
    "esclerosis-multiple-outlined",
    "ordination",
    "view-line",
    "view-line-outlined",
    "health-program",
    "health-program-outlined",
    "close",
    "reload",
    "clinical-procedure",
    "clinical-procedure-outlined",
    "correct",
    "resources",
    "resources-outlined",
    "search",
    "calendar",
    "calendar-outlined",
    "unchecked",
    "unchecked-outlined",
    "vacancies",
    "view-bar-chart",
    "view-bar-chart-outlined",
    "view-3-column-chart",
    "view-3-column-chart-outlined",
    "start",
    "custom-components",
    "components",
    "customizations",
    "icons",
    "wireframes",
    "migration",
    "accessibility",
    "ticket-icon",
    "trash-outlined",
    "save",
    "clear",
    "clear-outlined",
    "allergies-outlined",
    "tnf-outlined",
    "sgtd",
    "precedents-outlined",
    "ophthalmology-outlined",
    "clinical-process-outlined",
    "mcdt-management-outlined",
    "bed-management-outlined",
    "social-services-outlined",
    "emergency-outlined",
    "very-urgent-outlined",
    "urgent-outlined",
    "little-urgent-outlined",
    "not-urgent-outlined",
    "viewed-outlined",
    "graphic-outlined",
    "euro",
    "remove-outlined",
    "lactose-free-yogurt",
    "lactose-free-milk",
    "vegetables-soup",
    "breakfast",
    "snack",
    "lunch",
    "dinner",
    "supper",
    "diet",
    "meat-dish",
    "fruit",
    "meal",
    "suplements",
    "fish-soup",
    "gelatin",
    "bread",
    "oat-meal",
    "chicken-soup",
    "kits",
    "diet-parameters",
    "lactose-free",
    "gluten-free",
    "hyperenergetic",
    "salt-free",
    "sugar-free",
    "low-microbial-content",
    "potassium-restricted",
    "phosphorus-restricted",
    "scullery",
    "automatic-cancellation",
    "bpm",
    "mmhg",
    "degrees",
    "rpm",
    "sp02",
    "cereals",
    "cereals-colors",
    "crustaceans",
    "crustaceans-colors",
    "eggs",
    "eggs-colors",
    "fish",
    "fish-colors",
    "peanuts",
    "peanuts-colors",
    "soy",
    "soy-colors",
    "milk",
    "milk-colors",
    "sesame-seeds",
    "sesame-seeds-colors",
    "celery",
    "celery-colors",
    "mustard",
    "mustard-colors",
    "strawberry",
    "strawberry-colors",
    "sulfur-dioxide",
    "sulfur-dioxide-colors",
    "lupins",
    "lupins-colors",
    "molluscs",
    "molluscs-colors",
    "nuts",
    "nuts-colors",
    "video-on-circle",
    "video-off-circle",
    "sound-on-circle",
    "sound-off-circle",
    "microphone-on-circle",
    "microphone-off-circle",
    "chat-on-circle",
    "chat-off-circle",
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
        {iconsList.map(item => (
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





