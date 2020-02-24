import React from "react";
import styles from "./TabBar.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
  onClose: PropTypes.func
};

export default TabBar;
