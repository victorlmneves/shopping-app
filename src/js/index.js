import '../sass/styles.scss';

const setActive = (el, active) => {
    const formField = el.parentNode.parentNode
    if (active) {
        formField.classList.add('form__field--is-active')
    } else {
        formField.classList.remove('form__field--is-active')
        el.value === '' ?
            formField.classList.remove('form__field--is-filled') :
            formField.classList.add('form__field--is-filled')
    }
}

[].forEach.call(
    document.querySelectorAll('.form__input, .form__textarea'),
    (el) => {
        el.onblur = () => {
            setActive(el, false)
        }
        el.onfocus = () => {
            setActive(el, true)
        }
    }
)