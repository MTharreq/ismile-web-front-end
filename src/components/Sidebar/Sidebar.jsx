import './Sidebar.css'
import styled from 'styled-components'

const SidebarContainer = styled.div`
    display: flex;
    width: 300px;
    height: 1080px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex-shrink: 0;
    background: #FFF;
`
const ButtonList = styled.button`
    display: flex;
    padding: 8px 10px 8px 14px;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
    gap: 8px;
    border: none;

    border-radius: 8px;
    background: #FFF;
`

// const Logo = styled.div

export default function Sidebar() {
  return (
    <SidebarContainer>
        <div className="footer">
            <img src="src/assets/logo/Horizontal.jpg" alt="Logo" className="logo" />
        </div>
        <div className="list" >
            <ButtonList className='tp'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g clipPath="url(#clip0_48_926)">
                    <path d="M4 6.73291H2V20.7329C2 21.8329 2.9 22.7329 4 22.7329H18V20.7329H4V6.73291ZM20 2.73291H8C6.9 2.73291 6 3.63291 6 4.73291V16.7329C6 17.8329 6.9 18.7329 8 18.7329H20C21.1 18.7329 22 17.8329 22 16.7329V4.73291C22 3.63291 21.1 2.73291 20 2.73291ZM19 11.7329H9V9.73291H19V11.7329ZM15 15.7329H9V13.7329H15V15.7329ZM19 7.73291H9V5.73291H19V7.73291Z" fill="#484E51"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_48_926">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.73291)"/>
                    </clipPath>
                    </defs>
                </svg>
                <p>Tugas Pendahuluan</p>
            </ButtonList>
            <ButtonList className='ta'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g clipPath="url(#clip0_48_926)">
                    <path d="M4 6.73291H2V20.7329C2 21.8329 2.9 22.7329 4 22.7329H18V20.7329H4V6.73291ZM20 2.73291H8C6.9 2.73291 6 3.63291 6 4.73291V16.7329C6 17.8329 6.9 18.7329 8 18.7329H20C21.1 18.7329 22 17.8329 22 16.7329V4.73291C22 3.63291 21.1 2.73291 20 2.73291ZM19 11.7329H9V9.73291H19V11.7329ZM15 15.7329H9V13.7329H15V15.7329ZM19 7.73291H9V5.73291H19V7.73291Z" fill="#484E51"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_48_926">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.73291)"/>
                    </clipPath>
                    </defs>
                </svg>
                <p>Tes Awal</p>
            </ButtonList>
            <ButtonList className='jurnal'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g clipPath="url(#clip0_48_936)">
                        <path d="M22 18.7329V3.73291H2V18.7329H0V20.7329H24V18.7329H22ZM14 18.7329H10V17.7329H14V18.7329ZM20 15.7329H4V5.73291H20V15.7329Z" fill="#484E51"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_48_936">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.73291)"/>
                        </clipPath>
                    </defs>
                </svg>
                <p>Jurnal</p>
            </ButtonList>
            <ButtonList className='modul'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g clipPath="url(#clip0_48_941)">
                        <path d="M10 8.73291V16.7329L15 12.7329L10 8.73291ZM19 3.73291H5C3.9 3.73291 3 4.63291 3 5.73291V19.7329C3 20.8329 3.9 21.7329 5 21.7329H19C20.1 21.7329 21 20.8329 21 19.7329V5.73291C21 4.63291 20.1 3.73291 19 3.73291ZM19 19.7329H5V5.73291H19V19.7329Z" fill="#484E51"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_48_941">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.73291)"/>
                        </clipPath>
                    </defs>
                </svg>
                <p>Modul Praktikum</p>
            </ButtonList>
            <ButtonList className='about'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g clipPath="url(#clip0_48_941)">
                        <path d="M15.5 14.7329H14.71L14.43 14.4629C15.41 13.3229 16 11.8429 16 10.2329C16 6.64291 13.09 3.73291 9.5 3.73291C5.91 3.73291 3 6.64291 3 10.2329C3 13.8229 5.91 16.7329 9.5 16.7329C11.11 16.7329 12.59 16.1429 13.73 15.1629L14 15.4429V16.2329L19 21.2229L20.49 19.7329L15.5 14.7329ZM9.5 14.7329C7.01 14.7329 5 12.7229 5 10.2329C5 7.74291 7.01 5.73291 9.5 5.73291C11.99 5.73291 14 7.74291 14 10.2329C14 12.7229 11.99 14.7329 9.5 14.7329Z" fill="#484E51"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_48_941">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.73291)"/>
                        </clipPath>
                    </defs>
                </svg>
                <p>About i-Smile 8</p>
            </ButtonList>
        </div>
    </SidebarContainer>
  )
}


