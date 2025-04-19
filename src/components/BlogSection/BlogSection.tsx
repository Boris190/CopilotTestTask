"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./BlogSection.module.scss";
import { Typography } from "../UI/Typography";
import { Container } from "../UI/Container/Container";
import SectionTitleBlock from "../SectionTitleBlock/SectionTitleBlock";

const partnersIcons = [
  {
    name: "Tavily",
    src: "/assets/images/Tavily-logo.png",
    alt: "Tavily logo",
  },
  {
    name: "Tavily",
    src: "/assets/images/Tavily-logo.png",
    alt: "Tavily logo",
  },
  {
    name: "Doit",
    src: "/assets/images/Doit-logo.png",
    alt: "Doit logo",
  },
  {
    name: "Byte",
    src: "/assets/images/Byte-logo.png",
    alt: "Byte logo",
  },
  {
    name: "Lemonade",
    src: "/assets/images/Lemonade-logo.png",
    alt: "Lemonade logo",
  },
  {
    name: "Gitroom",
    src: "/assets/images/Gitroom-logo.png",
    alt: "Gitroom logo",
  },

  {
    name: "Gitroom",
    src: "/assets/images/Gitroom-logo.png",
    alt: "Gitroom logo",
  },
  {
    name: "Gitroom",
    src: "/assets/images/Gitroom-logo.png",
    alt: "Gitroom logo",
  },
  {
    name: "Gitroom",
    src: "/assets/images/Gitroom-logo.png",
    alt: "Gitroom logo",
  },
  {
    name: "Gitroom",
    src: "/assets/images/Gitroom-logo.png",
    alt: "Gitroom logo",
  },
  {
    name: "Gitroom",
    src: "/assets/images/Gitroom-logo.png",
    alt: "Gitroom logo",
  },
  {
    name: "Gitroom",
    src: "/assets/images/Gitroom-logo.png",
    alt: "Gitroom logo",
  },
  {
    name: "Gitroom",
    src: "/assets/images/Gitroom-logo.png",
    alt: "Gitroom logo",
  },
];

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const startDragging = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.classList.add("grabbing");
    };

    const stopDragging = () => {
      isDown = false;
      el.classList.remove("grabbing");
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll-fast
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", startDragging);
    el.addEventListener("mouseleave", stopDragging);
    el.addEventListener("mouseup", stopDragging);
    el.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      el.removeEventListener("mousedown", startDragging);
      el.removeEventListener("mouseleave", stopDragging);
      el.removeEventListener("mouseup", stopDragging);
      el.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <section id="blog" className={styles.section}>
      <Typography variant="headlines.h3">
        Trusted by developers <br /> at companies worldwide:
      </Typography>

      <div className={styles.scrollWrapper}>
        <div className={styles.scrollBar} ref={scrollRef}>
          {partnersIcons.map((item, i) => (
            <Image
              width={110}
              height={36}
              key={i}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </div>

      <Container>
        <div className={styles.integration}>
          <SectionTitleBlock
            title="Seamless integration with Multi-Agent Frameworks"
            iconAlt="INTEGRATION"
            iconSrc="/assets/images/setting-2.svg"
            description="CopilotKit’s feature rich SDK includes custom-built adapters for the top AI Agent frameworks"
            align="left"
            as="h3"
          />

          <div className={styles.imageBlock}>
            <Image
              width={300}
              height={50}
              src={"/assets/images/img01.svg"}
              alt="Graph"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
