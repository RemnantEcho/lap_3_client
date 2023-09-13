import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/accessibility';

import './style.css'

export default function AccessibilityPage() {
  const { bgColor, spacing, lineSpacing, size } = useSelector((state) => state.accessibility);
  const dispatch = useDispatch();

  const handleBgChange = (color) => {
    dispatch(actions.setBgColor(color));
  };

  const handleSpacingChange = (spacing) => {
    dispatch(actions.setLetterSpacing(spacing));
  };

  const handleLineHeightChange = (lineSpacing) => {
    dispatch(actions.setLineSpacing(lineSpacing));
  }

  const handleFontSizeChange = (size) => {
    dispatch(actions.setFontSize(size))
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.letterSpacing = spacing;
    document.body.style.lineHeight = lineSpacing;
    document.body.style.fontSize = size;
  }, [bgColor, spacing, lineSpacing, size]);


  return (
    <div id='accessibility-page'>
      <div id='title'>
        <h1>Accessibility Settings</h1>
      </div>

      <div id='top-box'>
        <div id='font-size'>
          <h3> Change font size </h3>
          <div id='radio-cont'>
            <div >
              <input
                type="radio"
                id='1rem'
                name='font-size'
                value='1rem'
                checked={size === '1rem'}
                onChange={() => handleFontSizeChange('1rem')} />
              <label htmlFor="1rem font size"> Small </label>
            </div>

            <div>
              <input
                type="radio"
                id='1.25rem'
                name='font-size'
                value='1.25rem'
                checked={size === '1.25rem'}
                onChange={() => handleFontSizeChange('1.25rem')} />
              <label htmlFor="1.25rem font size"> Medium </label>
            </div>

            <div>
              <input
                type="radio"
                id='1.5rem'
                name='font-size'
                value='1.5rem'
                checked={size === '1.5rem'}
                onChange={() => handleFontSizeChange('1.5rem')} />
              <label htmlFor="1.5rem font size"> Large </label>
            </div>
          </div>
        </div>


        <div id='line-height'>
          <h3>Change line height</h3>
          <div id="radio-cont">
            <div>
              <input
                type="radio"
                id='1.5rem'
                name='line-height'
                value='1.5rem'
                checked={lineSpacing === '1.5rem'}
                onChange={() => handleLineHeightChange('1.5rem')} />
              <label htmlFor="1.5rem height"> Small </label>
            </div>

            <div>
              <input
                type="radio"
                id='1.75rem'
                name='line-height'
                value='1.75rem'
                checked={lineSpacing === '1.75rem'}
                onChange={() => handleLineHeightChange('1.75rem')} />
              <label htmlFor="1.75rem height"> Medium </label>
            </div>

            <div>
              <input
                type="radio"
                id='2rem'
                name='line-height'
                value='2rem'
                checked={lineSpacing === '2rem'}
                onChange={() => handleLineHeightChange('2rem')} />
              <label htmlFor="2rem height"> Large </label>
            </div>
          </div>
        </div>
      </div>

      <div id='bottom-box'>
        <div id='letter-spacing'>
          <h3>Change letter spacing</h3>
          <div id="radio-cont">
            <div>
              <input
                type="radio"
                id="0.1rem"
                name="letter-spacing"
                value="0.1rem"
                checked={spacing === '0.1rem'}
                onChange={() => handleSpacingChange('0.1rem')}
              />
              <label htmlFor="0.1 spacing"> Small </label>
            </div>

            <div>
              <input
                type="radio"
                id="0.15rem"
                name="letter-spacing"
                value="0.15rem"
                checked={spacing === '0.15rem'}
                onChange={() => handleSpacingChange('0.15rem')}
              />
              <label htmlFor="0.15 spacing"> Medium </label>
            </div>

            <div>
              <input
                type="radio"
                id="0.2rem"
                name="letter-spacing"
                value="0.2rem"
                checked={spacing === '0.2rem'}
                onChange={() => handleSpacingChange('0.2rem')}
              />
              <label htmlFor="0.2 spacing"> Large </label>
            </div>
          </div>
        </div>


        <div id='bg-color'>
          <h3>Change the background color</h3>
          <div id="radio-cont">
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
                value="#C1E7FF"
                checked={bgColor === '#C1E7FF'}
                onChange={() => handleBgChange('#C1E7FF')}
              />
              <label htmlFor="color-blue"> Blue </label>
            </div>

            <div>
              <input
                type="radio"
                id="color-yellow"
                name="background-color"
                value="#FCFFC1"
                checked={bgColor === '#FCFFC1'}
                onChange={() => handleBgChange('#FCFFC1')}
              />
              <label htmlFor="color-yellow"> Yellow </label>
            </div>

            <div>
              <input
                type="radio"
                id="color-green"
                name="background-color"
                value="#D8FFC1"
                checked={bgColor === '#D8FFC1'}
                onChange={() => handleBgChange('#D8FFC1')}
              />
              <label htmlFor="color-green"> Green </label>
            </div>

            <div>
              <input
                type="radio"
                id="color-pink"
                name="background-color"
                value="#FFD4EA"
                checked={bgColor === '#FFD4EA'}
                onChange={() => handleBgChange('#FFD4EA')}
              />
              <label htmlFor="color-pink"> Pink </label>
            </div>

            <div>
              <input
                type="radio"
                id="color-orange"
                name="background-color"
                value="#FFDDB5"
                checked={bgColor === '#FFDDB5'}
                onChange={() => handleBgChange('#FFDDB5')}
              />
              <label htmlFor="color-orange"> Orange </label>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}

