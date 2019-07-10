import React from "react"
import styles from "./styles.scss";

const ScrollBtn = ({ target, type }) => {

  const handleClick = () => {
    const content = document.querySelector(target);
    content.scrollIntoView({behavior: "smooth"});
  }

  return (
    <button
      className={`a-scrollBtn -${type} icon-chevron`}
      onClick={handleClick}
    />
  )
}

export default ScrollBtn
