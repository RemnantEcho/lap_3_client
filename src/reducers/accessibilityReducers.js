const initState = {
    bgColor: '#ffffff', 
    spacing: '1.5px'
}


export const accessibilityReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_BG_COLOR':
            // console.log('Updating background color:', action.payload);
            return {... state, bgColor: action.payload};
        case 'SET_LETTER_SPACING':
            return {... state, spacing: action.payload};
        default: 
            return state
    }
}
