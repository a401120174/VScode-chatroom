import React from "react";
import styles from "./TabBar.module.scss";

const TabBar = ({ tabs, active, onClose, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {tabs.map((tab, idx) => (
          <li
            key={idx}
            className={`${tab === active ? styles.active : ""}`}
            onClick={() => {
              onClick(tab);
            }}
          >
            {tab}
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
