import styles from "styles/hero.module.css";
import Image from "next/legacy/image";
import cutepenguin from "images/cutepenguin.jpg";

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cutepenguin}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
