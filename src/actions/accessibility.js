export const setBgColor = (color) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_BG_COLOR',
            payload: color
        })
    }
}


export const setLetterSpacing = (spacing) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_LETTER_SPACING',
            payload: spacing
        })
    }
}

