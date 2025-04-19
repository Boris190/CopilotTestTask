import styles from "./GetStarted.module.scss";
import SectionTitleBlock from "../SectionTitleBlock/SectionTitleBlock";
import { LinkButton } from "../UI/Buttons/LinkButton/LinkButton";
import { Typography } from "../UI/Typography";

const GetStarted = () => {
  return (
    <section id="getStart" className={styles.section}>
      <div className={styles.content}>
        <SectionTitleBlock
          title="Enhance your applications with powerful AI capabilities"
          iconAlt="Are you ready?"
          iconSrc="/assets/images/sprint.svg"
          as="h3"
          actions={
            <div className={styles.actionWrapper}>
              <LinkButton variant="white" href="#">
                <Typography variant="paragraphs.regular_16">
                  Talk to Us
                </Typography>
              </LinkButton>
              <LinkButton variant="whiteOutline" href="#">
                <Typography variant="paragraphs.regular_16">
                  Try for Free
                </Typography>
              </LinkButton>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default GetStarted;
