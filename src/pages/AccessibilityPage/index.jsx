import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/accessibility';

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
    <>

      <div>
        <p style={{ fontSize: size }}> change font size </p>
        <div>
          <input 
            type="radio"
            id='20px'
            name='font-size'
            value='20px'
            checked={size === '20px'}
            onChange={() => handleFontSizeChange('20px')}/>
          <label htmlFor="20px font size"> small </label>
        </div>

        <div>
          <input 
            type="radio"
            id='22px'
            name='font-size'
            value='22px'
            checked={size === '22px'}
            onChange={() => handleFontSizeChange('22px')}/>
          <label htmlFor="22px font size"> medium </label>
        </div>

        <div>
          <input 
            type="radio"
            id='25px'
            name='font-size'
            value='25px'
            checked={size === '25px'}
            onChange={() => handleFontSizeChange('25px')}/>
          <label htmlFor="25px font size"> large </label>
        </div>
      </div>

      <div>
        <p style={{ lineHeight: lineSpacing }}>change line height</p>
        <div>
          <input 
            type="radio"
            id='12px'
            name='line-height'
            value='12pt'
            checked={lineSpacing === '12pt'}
            onChange={() => handleLineHeightChange('12pt')}/>
          <label htmlFor="12 height"> 12pt </label>
        </div>

        <div>
          <input 
            type="radio"
            id='15pt'
            name='line-height'
            value='15pt'
            checked={lineSpacing === '15pt'}
            onChange={() => handleLineHeightChange('15pt')}/>
          <label htmlFor="15 height"> 15pt </label>
        </div>

        <div>
          <input 
            type="radio"
            id='18pt'
            name='line-height'
            value='18pt'
            checked={lineSpacing === '18pt'}
            onChange={() => handleLineHeightChange('18pt')}/>
          <label htmlFor="18 height"> 18pt </label>
        </div>
      </div>
  
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

