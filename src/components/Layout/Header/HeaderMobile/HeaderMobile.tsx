"use client";
import useToggle from "@/utils/hooks/useToggle";
import { AnimatePresence, motion } from "framer-motion";
import { Burger } from "./Burger/Burger";
import { animateMenu } from "@/utils/helpers/constants";
import { RemoveScroll } from "react-remove-scroll";
import HeaderMobileContent from "./HeaderMobileContent/HeaderMobileContent";
import styles from "./HeaderMobile.module.scss";

interface IHeaderMobile {
  authPage?: boolean;
}

export function HeaderMobile({ authPage }: IHeaderMobile) {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  return (
    <RemoveScroll enabled={isOpen}>
      <div className={styles.wrapper}>
        <button onClick={toggle} className={styles.button}>
          <Burger isOpen={isOpen} />
        </button>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              variants={animateMenu}
              animate="open"
              exit="close"
              initial="close"
              transition={{ duration: 0.3 }}
              className={styles.menu}
            >
              <HeaderMobileContent setIsOpen={setIsOpen} authPage={authPage} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </RemoveScroll>
  );
}
