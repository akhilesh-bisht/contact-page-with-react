import styles from "./nvbar.module.css";
const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <img src="/image/Frame 2 1.png" alt="" />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};
export default Nav;
