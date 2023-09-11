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

      <div id='font-size'>
        <h3> Change font size </h3>
        <div id='radio-cont'>
          <div >
            <input
              type="radio"
              id='20px'
              name='font-size'
              value='20px'
              checked={size === '20px'}
              onChange={() => handleFontSizeChange('20px')} />
            <label htmlFor="20px font size"> small </label>
          </div>

          <div>
            <input
              type="radio"
              id='22px'
              name='font-size'
              value='22px'
              checked={size === '22px'}
              onChange={() => handleFontSizeChange('22px')} />
            <label htmlFor="22px font size"> medium </label>
          </div>

          <div>
            <input
              type="radio"
              id='25px'
              name='font-size'
              value='25px'
              checked={size === '25px'}
              onChange={() => handleFontSizeChange('25px')} />
            <label htmlFor="25px font size"> large </label>
          </div>
        </div>
      </div>


      <div id='line-height'>
        <h3>Change line height</h3>
        <div id="radio-cont">
          <div>
            <input
              type="radio"
              id='20px'
              name='line-height'
              value='20pt'
              checked={lineSpacing === '20pt'}
              onChange={() => handleLineHeightChange('20pt')} />
            <label htmlFor="20 height"> 20pt </label>
          </div>

          <div>
            <input
              type="radio"
              id='22pt'
              name='line-height'
              value='22pt'
              checked={lineSpacing === '22pt'}
              onChange={() => handleLineHeightChange('22pt')} />
            <label htmlFor="22 height"> 22pt </label>
          </div>

          <div>
            <input
              type="radio"
              id='25pt'
              name='line-height'
              value='25pt'
              checked={lineSpacing === '25pt'}
              onChange={() => handleLineHeightChange('25pt')} />
            <label htmlFor="25 height"> 25pt </label>
          </div>
        </div>
      </div>


      <div id='letter-spacing'>
        <h3>Change letter spacing</h3>
        <div id="radio-cont">
          <div>
            <input
              type="radio"
              id="1.5"
              name="letter-spacing"
              value="1.5px"
              checked={spacing === '1.5px'}
              onChange={() => handleSpacingChange('1.5px')}
            />
            <label htmlFor="1.5 spacing"> 1.5px </label>
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
            <label htmlFor="2 spacing"> 2px </label>
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
            <label htmlFor="2.5 spacing"> 2.5px </label>
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
  );
}

