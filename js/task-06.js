const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    if (inputRef.value.length == inputRef.dataset.length) {
        return inputRef.id = 'validation-input_valid';
    } else { 
    return inputRef.id = 'validation-input_invalid';
}
});