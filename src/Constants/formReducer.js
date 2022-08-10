export const useFormReducer = (FORM_INPUT_UPDATE) => {
    
    const formReducer = (state, action) => {
        if (action.type === FORM_INPUT_UPDATE) {
            const updateValues = {
                ...state.inputValues,
                [action.input]: action.value,
            };

            const updateValidities = {
                ...state.inputValidities,
                [action.input]: action.isValid
            };

            let updateFormIsValid = true;

            for (const key in updateValidities) {
                updateFormIsValid = updateFormIsValid && updateValidities[key]
            }

            return {
                formIsValid: updateFormIsValid,
                inputValidities: updateValidities,
                inputValues: updateValues,

            }
        }
        return state;
    };

    return formReducer
};