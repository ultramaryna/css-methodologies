import React from "react"

const ScrollBtn = ({ target, type }) => {

  const handleClick = () => {
    const content = document.querySelector(target);
    content.scrollIntoView({behavior: "smooth"});
  }

  return (
    <button
      className={`a-scrollBtn -${type} icon-chevron`}
      onClick={handleClick}
      title="Scroll"
    />
  )
}

export default ScrollBtn
