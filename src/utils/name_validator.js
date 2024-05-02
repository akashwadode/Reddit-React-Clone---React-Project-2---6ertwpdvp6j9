import React from 'react'

const name_validator = (name) => {
    // const nameRegex = /^[a-zA-Z-' ]+$/;
    const nameRegex = /^[A-Za-z][0-9A-Za-z ]{5,15}$/
    return nameRegex.test(name);
}

export default name_validator