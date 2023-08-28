import styles from './AppBar.module.css'

export default function AppBar() {
    return (
      <div className={styles.container}>
        <p className={styles.icon}>🔍</p>
        <div className={styles.profile}>
          <div className={styles.name}>
            <h3 className={styles.h3}>Muhammad Tharreq An Nahl</h3>
            <p className={styles.name.p}>Assistant</p>
          </div>
          <div className={styles.pictureProfile}>
            <img src="src\assets\3d_avatar_20.png" alt="" />
          </div>
        </div>
      </div>
    )
  }