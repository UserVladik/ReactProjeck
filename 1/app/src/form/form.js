export function cre (config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: '',
    }
}

export function validate (value, validation = null){
    if (!validation) {
        return true
    }
    let isValid = true;
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    return isValid
}

export function validateForm (formControls) {
    let is = true

    for (let control in is) {
        if (formControls.hasOwnProperty(control)) {
            is = formControls[control].valid
        }
    }

    return is
}
