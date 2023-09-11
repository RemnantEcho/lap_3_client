import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/accessibility';

export default function AccessibilityPage() {
  const { bgColor, spacing } = useSelector((state) => state.accessibility);
  const dispatch = useDispatch();
  
  // console.log('line 6', bgColor)
  console.log('line 10', spacing)
  
  const handleBgChange = (color) => {
    dispatch(actions.setBgColor(color));
    // console.log('line11', bgColor)
  };

  const handleSpacingChange = (spacing) => {
    dispatch(actions.setLetterSpacing(spacing));
  };

  useEffect(() => {
    // console.log('bgColor changed to:', bgColor);
    document.body.style.backgroundColor = bgColor;
    document.body.style.letterSpacing = spacing;
  }, [bgColor, spacing]);
  

  return (
    <>
      <div>
        <h3>Change letter spacing</h3>
        <p style={{ letterSpacing: spacing }}>
          Something in this paragraph, there is a lot of text
        </p>
        <div>
          <input
            type="radio"
            id="1.5"
            name="letter-spacing"
            value="1.5px"
            checked={spacing === '1.5px'}
            onChange={() => handleSpacingChange('1.5px')}
          />
          <label htmlFor="1.5 spacing"> 1.5pts </label>
        </div>

        <div>
          <input
            type="radio"
            id="2"
            name="letter-spacing"
            value="2px"
            checked={spacing === '2px'}
            onChange={() => handleSpacingChange('2px')}
          />
          <label htmlFor="2 spacing"> 2pts </label>
        </div>

        <div>
          <input
            type="radio"
            id="2.5"
            name="letter-spacing"
            value="2.5px"
            checked={spacing === '2.5px'}
            onChange={() => handleSpacingChange('2.5px')}
          />
          <label htmlFor="2.5 spacing"> 2.5pts </label>
        </div>
      </div>

      <div>
        <p>Change the background color</p>

        <div>
          <input
            type="radio"
            id="color-white"
            name="background-color"
            value="#ffffff"
            checked={bgColor === '#ffffff'}
            onChange={() => handleBgChange('#ffffff')}
          />
          <label htmlFor="color-white"> White </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-blue"
            name="background-color"
            value="#98d6fd"
            checked={bgColor === '#98d6fd'}
            onChange={() => handleBgChange('#98d6fd')}
          />
          <label htmlFor="color-blue"> Blue </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-yellow"
            name="background-color"
            value="#F8FF71"
            checked={bgColor === '#F8FF71'}
            onChange={() => handleBgChange('#F8FF71')}
          />
          <label htmlFor="color-yellow"> Yellow </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-green"
            name="background-color"
            value="#ACFF7D"
            checked={bgColor === '#ACFF7D'}
            onChange={() => handleBgChange('#ACFF7D')}
          />
          <label htmlFor="color-green"> Green </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-pink"
            name="background-color"
            value="#FEB0D8"
            checked={bgColor === '#FEB0D8'}
            onChange={() => handleBgChange('#FEB0D8')}
          />
          <label htmlFor="color-pink"> Pink </label>
        </div>

        <div>
          <input
            type="radio"
            id="color-orange"
            name="background-color"
            value="#FFBF74"
            checked={bgColor === '#FFBF74'}
            onChange={() => handleBgChange('#FFBF74')}
          />
          <label htmlFor="color-orange"> Orange </label>
        </div>
      </div>
    </>
  );
}

