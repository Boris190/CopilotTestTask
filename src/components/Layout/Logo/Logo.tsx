import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.scss";

export const Logo = ({ white }) => {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src={`/assets/images/logo${white ? "-white" : ""}.svg`}
        width={128}
        height={30}
        alt="logo"
        priority
        quality={100}
      />
    </Link>
  );
};
