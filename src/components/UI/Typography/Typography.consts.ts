import styles from "./Typography.module.scss";

export const typographyVariants = {
  headlines: {
    h2: "h2",
    h3: "h3",
  },
  paragraphs: {
    caption1: "caption1",
    captionTitle: "captionTitle",
    caption2: "caption2",
    caption4: "caption4",
    regular_16: "regular_16",
  },
} as const;

type HeadlinesVariants =
  `${"headlines"}.${keyof typeof typographyVariants.headlines}`;

type ParagraphsVariants =
  `${"paragraphs"}.${keyof typeof typographyVariants.paragraphs}`;

export type Variants = HeadlinesVariants | ParagraphsVariants;

export const variantClassMap: Record<Variants, string> = {
  "paragraphs.caption1": styles.paragraphsCaption1,
  "paragraphs.captionTitle": styles.paragraphsCaptionTitle,
  "paragraphs.caption2": styles.paragraphsCaption2,
  "paragraphs.caption4": styles.paragraphsCaption4,
  "paragraphs.regular_16": styles.paragraphsRegular16,
  "headlines.h2": styles.headlinesH2,
  "headlines.h3": styles.headlinesH3
};
