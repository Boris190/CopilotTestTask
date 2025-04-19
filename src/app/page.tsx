import Header from "@/components/Layout/Header/Header";
import { BackgroundLayer } from "@/components/BackgroundLayer/BackgroundLayer";
import TarifSection from "@/components/Tariffs/TarifSection";
import "../assets/styles/globals.scss";
import Footer from "@/components/Layout/Footer/Footer";
import styles from "./page.module.css";
import ComparePlans from "@/components/ComparePlans/ComparePlans";
import BlogSection from "@/components/BlogSection/BlogSection";
import GetStarted from "@/components/GetStarted/GetStarted";

export default function Home() {
  return (
    <div>
      <BackgroundLayer />
      <Header />
      <TarifSection />
      <BlogSection />
      <ComparePlans />
      <GetStarted />
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
