import Image from "next/image";
import { Container } from "@/components/UI/Container/Container";
import TarifsItem from "@/components/Tariffs/TarifsItem";
import { tariffs } from "./mockTarifs";
import { Typography } from "../UI/Typography/Typography";

import styles from "./TarifSection.module.scss";
import { LinkButton } from "../UI/Buttons/LinkButton/LinkButton";
import SectionTitleBlock from "../SectionTitleBlock/SectionTitleBlock";

const TarifSection = () => {
  return (
    <Container>
      <SectionTitleBlock
        title="Build your first copilot in minutes"
        align="center"
        iconSrc="/assets/images/coin.svg"
        iconAlt="PRICING"
        as="h2"
        description="Choose the plan that works for you based on your customer growth"
      />
      <div id="tariffs" className={styles.tariffsWrapper}>
        {tariffs.map((tarif, i) => (
          <TarifsItem
            key={i}
            {...tarif}
            type={tarif.type as "start" | "pro" | "enterprise"}
          />
        ))}
      </div>
      <div className={styles.visitRepo}>
        <div className={styles.textWrapper}>
          <Typography variant="paragraphs.caption2" className={styles.price}>
            CopilotKit Open Source
          </Typography>
          <div className={styles.repoText}>
            <Image
              alt="include icon"
              src="/assets/images/include-purple.svg"
              width={20}
              height={20}
            />
            <Typography variant="paragraphs.caption1" className={styles.price}>
              Access core platform features on an always free, self-hosted
              framework.
            </Typography>
          </div>
        </div>
        <LinkButton href="#" variant="primary">
          <Image
            alt="include icon"
            src="/assets/images/github.svg"
            width={20}
            height={20}
          />
          Visit the repo here
        </LinkButton>
      </div>
    </Container>
  );
};

export default TarifSection;
