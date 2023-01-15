import { validateForm } from './helpers/validateForm.js'
import { renderSideBarContent } from './ui/sidebarContent.js'
import { step1Content } from './ui/step1.js'
import { step2Content } from './ui/step2.js'

// Render sideBar
renderSideBarContent()

const circleSteps = document.querySelectorAll('.circle')
const stepContent = document.querySelector('.step-content')
const headerH2 = document.querySelector('.header h2')
const headerP = document.querySelector('.header p')

function setStep1Context() {
  headerH2.textContent = 'Personal info'
  headerP.textContent =
    'Please provide your name, email address, and phone number.'
  stepContent.innerHTML = step1Content
  circleSteps.forEach((circle) => {
    circle.classList.remove('activeCircle')
  })
  circleSteps[0].classList.add('activeCircle')

  const nameInput = document.querySelector('form #name')
  const emailInput = document.querySelector('form #email')
  const phoneInput = document.querySelector('form #phone')

  const nameErrorText = document.querySelector('#name-error-text')
  const emailErrorText = document.querySelector('#email-error-text')
  const phoneErrorText = document.querySelector('#phone-error-text')
  const form = document.querySelector('.main-content form')

  const inputs = {
    name: {
      nameInput,
      nameErrorText,
    },
    email: {
      emailInput,
      emailErrorText,
    },
    phone: {
      phoneInput,
      phoneErrorText,
    },
  }

  // Add form validations (update to step #2)
  validateForm(inputs, form, updateActiveStep)
}

// Set default step
setStep1Context()

function setStep2Context() {
  circleSteps.forEach((circle) => {
    circle.classList.remove('activeCircle')
  })
  headerH2.textContent = 'Select your plan'
  headerP.textContent = 'You have the option of monthly or yearly billing'
  circleSteps[1].classList.add('activeCircle')
  stepContent.innerHTML = step2Content

  const goBackButton = document.querySelector('.btn.go-back')
  const nextButton = document.querySelector('.btn.filled-button.next-step')
  const planTypeButtons = document.querySelectorAll('.plan-type')
  const switchButton = document.querySelector('#btn-switch')
  const selector = document.querySelector('.selector')
  const monthlyLabel = selector.firstElementChild
  const yearlyLabel = selector.lastElementChild

  switchButton.addEventListener('change', (e) => {
    if (e.target.checked) {
      monthlyLabel.style.color = '#9fa0a5'
      yearlyLabel.style.color = '#082e5c'
    } else {
      monthlyLabel.style.color = '#082e5c'
      yearlyLabel.style.color = '#9fa0a5'
    }
  })

  planTypeButtons.forEach((planTypeButton) => {
    planTypeButton.addEventListener('click', (e) => {
      planTypeButtons.forEach((button) => {
        button.classList.remove('activePlan')
      })
      e.target.classList.add('activePlan')
    })
  })

  nextButton.addEventListener('click', () => {
    updateActiveStep(3)
  })

  goBackButton.addEventListener('click', () => {
    updateActiveStep(1)
  })
}

function updateActiveStep(step) {
  switch (step) {
    case 1:
      setStep1Context()
      break
    case 2:
      setStep2Context()
      break
    case 3:
      circleSteps[2].classList.add('activeCircle')
      break
    case 4:
      // circleSteps[3].classList.add('activeCircle')
      break
    default:
      break
  }
}

// updateActiveStep(2)
