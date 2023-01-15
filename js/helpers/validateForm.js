import {
  validateEmail,
  validateName,
  validatePhone,
} from '../utils/validations.js'

export let shouldGoToNextStep

export function validateForm(inputs, form, updateActiveStep) {
  const {
    name: { nameInput, nameErrorText },
    email: { emailInput, emailErrorText },
    phone: { phoneInput, phoneErrorText },
  } = inputs

  nameInput.addEventListener('blur', () => {
    const { isValid, error } = validateName(nameInput.value)
    if (!isValid) {
      nameErrorText.textContent = error
      nameInput.style.borderColor = '#da5d71'
    } else {
      nameErrorText.textContent = ''
      nameInput.style.borderColor = '#dcdcdf'
    }
  })

  emailInput.addEventListener('blur', () => {
    const { isValid, error } = validateEmail(emailInput.value)
    if (!isValid) {
      emailErrorText.textContent = error
      emailInput.style.borderColor = '#da5d71'
    } else {
      emailErrorText.textContent = ''
      emailInput.style.borderColor = '#dcdcdf'
    }
  })

  phoneInput.addEventListener('blur', () => {
    const { isValid, error } = validatePhone(phoneInput.value)
    if (!isValid) {
      phoneErrorText.textContent = error
      phoneInput.style.borderColor = '#da5d71'
    } else {
      phoneErrorText.textContent = ''
      phoneInput.style.borderColor = '#dcdcdf'
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const errors = []

    const nameValidation = validateName(nameInput.value)
    const emailValidation = validateEmail(emailInput.value)
    const phoneValidation = validatePhone(phoneInput.value)

    if (!nameValidation.isValid) {
      nameErrorText.textContent = nameValidation.error
      nameInput.style.borderColor = '#da5d71'
      errors.push(nameValidation.error)
    }

    if (!emailValidation.isValid) {
      emailErrorText.textContent = emailValidation.error
      emailInput.style.borderColor = '#da5d71'
      errors.push(emailValidation.error)
    }

    if (!phoneValidation.isValid) {
      phoneErrorText.textContent = phoneValidation.error
      phoneInput.style.borderColor = '#da5d71'
      errors.push(phoneValidation.error)
    }

    if (errors.length) return

    updateActiveStep(2)
  })
}
