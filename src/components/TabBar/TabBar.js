import React from "react";
import styles from "./TabBar.module.scss";
import { Link } from "react-router-dom";

const TabBar = ({ tabs, active, onClose }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {tabs.map((tab, idx) => (
          <li key={idx} className={`${tab === active ? styles.active : ""}`}>
            <Link to={`/${tab}`}>{tab}</Link>
            {idx !== 0 && (
              <div
                className={styles.closeBtn}
                onClick={e => {
                  e.stopPropagation();
                  onClose(tab);
                }}
              >
                X
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabBar;
