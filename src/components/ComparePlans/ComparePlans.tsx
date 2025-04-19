import { comparePlansData } from "./comparePlansData";
import styles from "./ComparePlans.module.scss";
import Image from "next/image";
import { Typography } from "@/components/UI/Typography/Typography";
import PlanTableRow from "./PlanTableRow";
import { Container } from "../UI/Container/Container";
import {
  LinkButton,
  LinkVariantType,
} from "../UI/Buttons/LinkButton/LinkButton";
import SectionTitleBlock from "@/components/SectionTitleBlock/SectionTitleBlock";

const plans: {
  name: string;
  price: string;
  buttonText: string;
  variant: LinkVariantType;
}[] = [
  {
    name: "Get Started",
    price: "Free",
    buttonText: "Start for Free",
    variant: "primary",
  },
  {
    name: "Pro",
    price: "$249 / month",
    buttonText: "Build With Your Team",
    variant: "primary",
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    buttonText: "Get a Custom Plan",
    variant: "outline",
  },
];

const ComparePlans = () => {
  return (
    <Container>
      <div id="documentation" className={styles.wrapper}>
        <LinkButton href="#documentation" variant="outline">
          <Typography variant="paragraphs.regular_16">Compare plans</Typography>
          <Image
            src={"/assets/images/arrow-down.svg"}
            width={24}
            height={18}
            alt="down"
          />
        </LinkButton>
        <SectionTitleBlock
          title="Compare Plans"
          align="center"
          as="h3"
          iconSrc="/assets/images/note.svg"
          iconAlt="features breakdown"
        />

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th
                  className={styles.titleFeatures}
                  style={{ verticalAlign: "bottom" }}
                >
                  <Typography
                    style={{
                      textAlign: "left",
                    }}
                    variant="paragraphs.caption4"
                  >
                    Features
                  </Typography>
                </th>

                {plans.map((plan, index) => {
                  const [price, suffix] = plan.price.split(" / ");
                  return (
                    <th key={index}>
                      <div className={styles.headCell}>
                        <Typography
                          className={styles.planName}
                          style={{
                            textAlign: "left",
                          }}
                          variant="paragraphs.captionTitle"
                        >
                          {plan.name}
                        </Typography>

                        <Typography
                          className={styles.planPrice}
                          style={{
                            textAlign: "left",
                          }}
                          variant="paragraphs.captionTitle"
                        >
                          {price}
                          {suffix && <span>/ {suffix}</span>}
                        </Typography>
                        <LinkButton
                          variant={plan.variant}
                          href="#"
                          className={styles.headButton}
                        >
                          <Typography variant="paragraphs.regular_16">
                            {plan.buttonText}
                          </Typography>
                        </LinkButton>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {comparePlansData.map((item, index) => (
                <PlanTableRow key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default ComparePlans;
