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

function clearActiveCircleClass() {
  circleSteps.forEach((circle) => {
    circle.classList.remove('activeCircle')
  })
}

function setStep1Context() {
  headerH2.textContent = 'Personal info'
  headerP.textContent =
    'Please provide your name, email address, and phone number.'
  stepContent.innerHTML = step1Content
  clearActiveCircleClass()
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
  clearActiveCircleClass()
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
  const anualOfferLabels = document.querySelectorAll('.anual-offer')
  const arcadePrize = document.querySelector('#arcade-prize')
  const advancePrize = document.querySelector('#advance-prize')
  const proPrize = document.querySelector('#pro-prize')

  function setYearlyContext() {
    arcadePrize.textContent = '$90/yr'
    advancePrize.textContent = '$120/yr'
    proPrize.textContent = '$150/yr'
    monthlyLabel.style.color = '#9fa0a5'
    yearlyLabel.style.color = '#082e5c'
    anualOfferLabels.forEach((label) => {
      label.style.display = 'block'
    })
  }

  function setMonthlyContext() {
    arcadePrize.textContent = '$9/mo'
    advancePrize.textContent = '$12/mo'
    proPrize.textContent = '$15/mo'
    monthlyLabel.style.color = '#082e5c'
    yearlyLabel.style.color = '#9fa0a5'
    anualOfferLabels.forEach((label) => {
      label.style.display = 'none'
    })
  }

  switchButton.addEventListener('change', (e) => {
    if (e.target.checked) {
      setYearlyContext()
    } else {
      setMonthlyContext()
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

function setStep3Context() {
  clearActiveCircleClass()
  circleSteps[2].classList.add('activeCircle')
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
      setStep3Context()
      break
    case 4:
      // circleSteps[3].classList.add('activeCircle')
      break
    default:
      break
  }
}
