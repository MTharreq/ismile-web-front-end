// import './Container.css'
import AppBar from "../AppBar/AppBar"

export default function Container() {
  return (
    <div style={{
      display: 'flex',
      padding: '32px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '32px',
      flex: '1 0 0'
    }}>
        <AppBar />
    </div>
  )
}