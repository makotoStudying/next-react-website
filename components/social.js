import styles from "styles/social.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Social({ iconSize = "initial" }) {
  return (
    <ul className={styles.list} style={{ "--icon-size": iconSize }}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/makotoStudying">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">github</span>
        </a>
      </li>
    </ul>
  );
}
