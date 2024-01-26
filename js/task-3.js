const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onKeyPress);

function onKeyPress(event){
    if (event.currentTarget.value === ' ') {
        event.currentTarget.value === ''
    }
    refs.output.textContent = event.currentTarget.value;


}