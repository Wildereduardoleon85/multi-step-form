import { steps } from '../constants/steps.js'

const stepsContainer = document.querySelector('#steps')

export function renderSideBarContent() {
  steps.forEach((step) => {
    const stepDiv = document.createElement('DIV')
    stepDiv.classList.add('step')
    stepsContainer.appendChild(stepDiv)

    const circleDiv = document.createElement('DIV')
    circleDiv.classList.add('circle')
    circleDiv.setAttribute('id', `circle-${step.id}`)
    stepDiv.appendChild(circleDiv)

    const circleP = document.createElement('P')
    const circlePText = document.createTextNode(step.id)
    circleP.appendChild(circlePText)
    circleDiv.appendChild(circleP)

    const stepTextDiv = document.createElement('DIV')
    stepTextDiv.classList.add('step-text')
    stepDiv.appendChild(stepTextDiv)

    const stepTextP1 = document.createElement('P')
    const stepTextP1text = document.createTextNode(`STEP ${step.id}`)
    stepTextP1.appendChild(stepTextP1text)
    stepTextDiv.appendChild(stepTextP1)

    const stepTextP2 = document.createElement('P')
    const stepTextP2text = document.createTextNode(step.stepDescription)
    stepTextP2.appendChild(stepTextP2text)
    stepTextDiv.appendChild(stepTextP2)
  })
}
