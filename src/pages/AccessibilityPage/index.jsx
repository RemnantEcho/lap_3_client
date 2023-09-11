import React, { useState, useEffect } from 'react';

export default function AccessibilityPage() {
  const [bgColor, setBgColor] = useState('#ffffff')
  const [spacing, setSpacing] = useState('1.5px')

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
    document.body.style.letterSpacing = spacing
  }, [])

  const handleColourChange = (e) => {
    setBgColor(e.target.value)
    document.body.style.backgroundColor = e.target.value
  }

  const handleSpacingChange = (e) => {
    setSpacing(e.target.value)
    document.body.style.letterSpacing = e.target.value
  }

  return (
    <>
      <div>
        <h3>Change letter spacing</h3>
        <p> something in this paragraph, there is a lot of text</p>
        <p>something else in this paragraph, even more text</p>
        <p>All this text is to check whether the spacing changes or not</p>

        <div>
          <input 
            type="radio" 
            id="1.5"
            name= 'letter-spacing'
            value="1.5px"
            checked={spacing === '1.5px'}
            onChange={handleSpacingChange}/>
          <label htmlFor="1.5 spacing"> 1.5pts </label>
        </div>

        <div>
          <input 
            type="radio" 
            id="2"
            name= 'letter-spacing'
            value="2px"
            onChange={handleSpacingChange}/>
          <label htmlFor="2 spacing"> 2pts </label>
        </div>

        <div>
          <input 
            type="radio" 
            id="2.5"
            name= 'letter-spacing'
            value="2.5px"
            onChange={handleSpacingChange}/>
          <label htmlFor="2.5 spacing"> 2.5pts </label>
        </div>
      </div>

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
