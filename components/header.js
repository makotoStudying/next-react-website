import Container from "components/container";
import Logo from "components/logo";
import Nav from "components/nav";
import styles from "styles/header.module.css";

export default function Header() {
  return (
    <Container large>
      <header>
        <div className={styles.flexContainer}>
          <Logo boxOn />

          <Nav />
        </div>
      </header>
    </Container>
  );
}
