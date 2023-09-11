import React, { useState, useEffect } from 'react';

export default function AccessibilityPage() {
  const [bgColor, setBgColor] = useState('#ffffff')

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [])

  const handleColourChange = (e) => {
    setBgColor(e.target.value)
    document.body.style.backgroundColor = e.target.value
  }

  return (
    <>
      <div>
        <p> Change the background colour </p>

        <div>
          <input
            type="radio"
            id="color-white"
            name="backgorund-color"
            value="#ffffff"
            checked={bgColor === '#ffffff'}
            onChange={handleColourChange} />
          <label htmlFor="color-white"> White </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-blue"
            name="backgorund-color"
            value="#98d6fd"
            onChange={handleColourChange} />
          <label htmlFor="color-blue"> Blue </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-yellow"
            name="backgorund-color"
            value="#F8FF71"
            onChange={handleColourChange} />
          <label htmlFor="color-yellow"> Yellow </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-green"
            name="backgorund-color"
            value="#ACFF7D"
            onChange={handleColourChange} />
          <label htmlFor="color-green"> Green </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-pink"
            name="backgorund-color"
            value="#FEB0D8"
            onChange={handleColourChange} />
          <label htmlFor="color-pink"> Pink </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-orange"
            name="backgorund-color"
            value="#FFBF74"
            onChange={handleColourChange} />
          <label htmlFor="color-orange"> Orange </label>
        </div>
      </div>
    </>
  )
}
