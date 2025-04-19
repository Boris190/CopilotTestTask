import Image from "next/image";
import { Container } from "@/components/UI/Container/Container";
import { Logo } from "@/components/Layout/Logo/Logo";
import { Navbar } from "./Navbar/Navbar";
import { HeaderMobile } from "@/components/Layout/Header/HeaderMobile/HeaderMobile";
import styles from "./Header.module.scss";
import { LinkButton } from "@/components/UI/Buttons/LinkButton/LinkButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo  white={false}/>
          <Navbar />
          <div className={styles.headerMobile}>
            <div className={styles.getStarted}>
              <a
                className={styles.githab}
                href="https://github.com/peppermint-id/test-copilot#"
              >
                <Image
                  alt="gitHub"
                  src="/assets/images/githab.svg"
                  width={24}
                  height={24}
                />
                <span>17.7k</span>
              </a>

              <LinkButton href="#getStarted" variant="primary">
                Get Started
              </LinkButton>
            </div>

            <HeaderMobile />
          </div>
        </div>
      </Container>
    </header>
  );
}
