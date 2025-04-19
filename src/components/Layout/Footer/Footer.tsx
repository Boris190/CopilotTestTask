import React, { FC, ReactNode } from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import NavLink from "./NavLink/NavLink";
import { Logo } from "../Logo/Logo";
import { Container } from "@/components/UI/Container/Container";
import { Typography } from "@/components/UI/Typography/Typography";
import Link from "next/link";

interface NavLinkItem {
  name: string;
  href: string;
  type: "internal" | "external";
  icon?: ReactNode;
}

interface NavSection {
  header: string;
  links: NavLinkItem[];
}

const Footer: FC = () => {
  const NAV: NavSection[] = [
    {
      header: "Resources",
      links: [
        {
          name: "Docs",
          href: "#",
          type: "external",
        },
        {
          name: "Product",
          href: "#",
          type: "external",
        },
      ],
    },
    {
      header: "About",
      links: [
        {
          name: "Pricing",
          href: "#",
          type: "external",
        },
        {
          name: "Ask a question",
          href: "#support",
          type: "internal",
        },
      ],
    },
    {
      header: "About 4th VPN",
      links: [
        { name: "Privacy Policy", href: "/privacyPolicy", type: "external" },
        { name: "Terms of Service", href: "/offerAgreement", type: "external" },
      ],
    },
  ];

  return (
    <Container>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <Logo white />

          <div className={styles.socLinksWrapper}>
            <div className={styles.blogs}>
              <Typography as="a" href="#" variant="paragraphs.regular_16">
                Blog
              </Typography>
              <Typography as="a" href="#" variant="paragraphs.regular_16">
                Documentation
              </Typography>
              <Typography as="a" href="#" variant="paragraphs.regular_16">
                Terms of Service
              </Typography>
              <Typography as="a" href="#" variant="paragraphs.regular_16">
                Privacy Policy
              </Typography>
            </div>
            <div className={styles.socLinks}>
              <Link href="https://discord.com/" target="_blank">
                <Image
                  alt="discord logo"
                  src="/assets/images/discord.svg"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="https://github.com/" target="_blank">
                <Image
                  alt="github logo"
                  src="/assets/images/github.svg"
                  width={28}
                  height={28}
                />
              </Link>

              <Link href="https://x.com/?lang=en" target="_blank">
                <Image
                  alt="X logo"
                  src="/assets/images/x.svg"
                  width={28}
                  height={28}
                />
              </Link>

              <Link href="https://www.linkedin.com/" target="_blank">
                <Image
                  alt="linkedin logo"
                  src="/assets/images/linkedin.svg"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>
        </div>

        <nav className={styles.nav}>
          {NAV.map(({ header, links }) => (
            <div key={header} className={styles.column}>
              <Typography
                style={{ color: "#fff" }}
                className={styles.header}
                variant="paragraphs.regular_16"
              >
                {header}
              </Typography>
              <ul className={styles.links}>
                {links.map(({ href, name, type, icon }) => (
                  <li key={name}>
                    <NavLink
                      className={styles.link}
                      href={href}
                      type={type}
                      icon={icon}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.copyWrapper}>
        <div className={styles.line}></div>
        <div className={styles.copyLeft}>
          <Typography variant="paragraphs.regular_16">
            © Tawkit, Inc. All rights reserved.
          </Typography>

          <Typography variant="paragraphs.regular_16">
            Designed by{" "}
            <Link href="https://peppermint.id/" target="_blank">
              <Image
                alt="Peppermint logo"
                src="/assets/images/peppermint.svg"
                width={122}
                height={24}
              />
            </Link>
          </Typography>
        </div>

        <div className={styles.copyRight}>
          <Link href="/offerAgreement" className={styles.policyLink}>
            Terms of Service
          </Link>
          <Link href="/privacyPolicy" className={styles.policyLink}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
