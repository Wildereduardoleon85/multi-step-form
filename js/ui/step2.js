export const step2Content = `
    <div class="step-2-content">
        <div class="plans">
        <div class="plan-type activePlan">
            <img src="/images/icon-arcade.svg" alt="arcade-icon" />
            <div>
            <p>Arcade</p>
            <p id="arcade-prize">$9/mo</p>
            <p class="anual-offer">2 months free</p>
            </div>
        </div>
        <div class="plan-type">
            <img src="/images/icon-advanced.svg" alt="advance-icon" />
            <div>
            <p>Advance</p>
            <p id="advance-prize">$12/mo</p>
            <p class="anual-offer">2 months free</p>
            </div>
        </div>
        <div class="plan-type">
            <img src="/images/icon-pro.svg" alt="pro-icon" />
            <div>
            <p>Pro</p>
            <p id="pro-prize">$15/mo</p>
            <p class="anual-offer">2 months free</p>
            </div>
        </div>
        </div>
        <div class="selector">
        <p>Monthly</p>
        <div>
            <input type="checkbox" id="btn-switch" />
            <label for="btn-switch" class="label-switch"></label>
        </div>
        <p>Yearly</p>
        </div>
    </div>
    <button class="btn filled-button next-step" type="button">
        Next Step
    </button>
    <button class="btn go-back" type="button">Go Back</button>
`
