import React, { useEffect, useState } from 'react'

import './styles.css'

import { SPMSIcon, iconsList } from '@spms/react-icons'
import { FaReact, FaAngular } from 'react-icons/fa';

interface IconsListProps {
  name: string
  category: string
  tags: string[]
}

// import { Container } from './styles';

export const Icons: React.FC = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  
  const [visibleIconsList, setVisibleIconsList] = useState<IconsListProps[]>([])

  const [selectedIcon, setSelectedIcon] = useState('user')
  const [selectedIconCodeAngular, setSelectedIconCodeAngular] = useState('')
  const [selectedIconCodeReact, setSelectedIconCodeReact] = useState('')
  
  useEffect(() => {
    setVisibleIconsList(iconsList)
  }, [])

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

  function handleFilter(event: string) {
    if (event !== '') {
      const filteredList = iconsList.filter(item => {
        const tagsEmUpperCase = item.tags.map(tag => tag.toUpperCase());
        const stringProcuradaEmUpperCase = event.toUpperCase();
  
        return tagsEmUpperCase.some(tag => tag.includes(stringProcuradaEmUpperCase)); 
      })

      setIsFiltered(true)
      setVisibleIconsList(filteredList)
    } else {
      setIsFiltered(false)
      setVisibleIconsList(iconsList)
    }
  }

  return (
    <div className="main">
      <div className="input_field">
        <SPMSIcon fontIcon="search" />
        <input type="text" className='input' onChange={(event) => handleFilter(event.target.value)} />
      </div>

      {isFiltered && <div className="grid_container">
        {visibleIconsList.map(item => (
          <div className="grid_content" key={item.name}>
            <button
              type="button"
              className="icon"
              onClick={() => openModal(item.name)}
            >
              <SPMSIcon
                fontIcon={item.name}
                color="primary"
                size="large"
                secondColor="#CCEBF5"
              />
            </button>
            <span>{item.name}</span>
          </div>
        ))}
      </div>}

      {!isFiltered && (
        <>
          <div className="subtitle">
            <h2>Principais</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "main" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Ações básicas e estados</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "basic-actions" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Ações menos prioritárias</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "low-priority-actions" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Setas</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "arrows" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Media</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "media" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Documentos</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "documents" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Emojis</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "emojis" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Alimentação</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "foods" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Saúde</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "health" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>Random</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "random" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="subtitle">
            <h2>SClínico</h2>
          </div>

          <div className="grid_container category">
            {visibleIconsList.map(item => item.category === "sclinico" && (
              <div className="grid_content" key={item.name}>
                <button
                  type="button"
                  className="icon"
                  onClick={() => openModal(item.name)}
                >
                  <SPMSIcon
                    fontIcon={item.name}
                    color="primary"
                    size="large"
                    secondColor="#CCEBF5"
                  />
                </button>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </>
      )}

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





