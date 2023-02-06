import React, { useContext, useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { BsFillSunFill } from "react-icons/bs";
import { MdNightlightRound } from "react-icons/md";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Nav({ show, filters, onClick }) {
  const { darkMode, toggleDarkMode, setTheme } = useContext(DarkModeContext);
  return (
    <div className={styles.navbar}>
      {darkMode ? (
        <BsFillSunFill
          onClick={() => {
            toggleDarkMode();
            setTheme("light");
          }}
        />
      ) : (
        <MdNightlightRound
          onClick={() => {
            toggleDarkMode();
            setTheme("dark");
          }}
        />
      )}

      <ul>
        {filters.map((item, index) => (
          <li key={index}>
            <button
              className={show === item ? `${styles.clicked}` : null}
              onClick={() => onClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
