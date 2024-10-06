import styles from './Header.module.css'
import Logo from '../../assets/Logo.svg'

export const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={Logo} width={126} height={48} />
    </header>
  )
}