"use client";

import clsx from "clsx";
import {
  Provider,
  Root,
  Trigger,
  Content,
  Portal,
  TooltipContentProps,
  Arrow,
} from "@radix-ui/react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode, useState } from "react";
import styles from "./Tooltip.module.scss";
import { animateHelper } from "../../../utils/helpers/animate.helper";
import { Typography } from "../Typography";

type TooltipPartial = Pick<
  TooltipContentProps,
  | "align"
  | "alignOffset"
  | "children"
  | "className"
  | "side"
  | "sideOffset"
  | "arrowPadding"
>;

type TooltipTriangle =
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "top-left"
  | "top-right"
  | "left"
  | "right";

interface ITooltip extends TooltipPartial {
  text?: string;
  title?: string;
  content?: ReactNode;
  triangle?: TooltipTriangle;
  contentClassName?: string;
  as?: keyof HTMLElementTagNameMap;
}

export const Tooltip: FC<ITooltip> = ({
  text,
  title,
  content,
  side = "bottom",
  sideOffset = 8,
  align = "center",
  alignOffset,
  arrowPadding = 8,
  children,
  className,
  contentClassName,
  as: Tag = "button",
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Provider delayDuration={0}>
      <Root open={open} onOpenChange={setOpen}>
        <Trigger asChild>
          <Tag
            onClick={(e) => {
              e.preventDefault();

              if (!open) setOpen(true);
            }}
            className={clsx(styles.trigger, className)}
          >
            {children}
          </Tag>
        </Trigger>
        <AnimatePresence>
          {open && (
            <Portal>
              <Content
                className={clsx(styles.content, contentClassName)}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                side={side}
                aria-label={text}
                arrowPadding={arrowPadding}
                forceMount
                asChild
              >
                <motion.div
                  variants={animateHelper("animateTooltip")}
                  initial="hide"
                  animate="show"
                  exit="hide"
                  transition={{ duration: 0.15 }}
                >
                  {title && (
                    <Typography variant="paragraphs.caption1">
                      {title}
                    </Typography>
                  )}
                  <Typography className={styles.text} color="gray" variant="paragraphs.caption1">
                    {text}
                  </Typography>
                  <Typography color="gray" variant="paragraphs.caption1">
                    {content}
                  </Typography>
                  <Arrow
                    className={styles.tooltipArrow}
                    width={12}
                    height={6}
                  />
                </motion.div>
              </Content>
            </Portal>
          )}
        </AnimatePresence>
      </Root>
    </Provider>
  );
};
