export const step1Content = `
  <form>
    <div>
      <div class='label-group'>
        <label for='name'>Name</label>
        <span id='name-error-text'></span>
      </div>
      <input
        autocomplete='off'
        id='name'
        name='name'
        type='text'
        placeholder='e.g John Doe'
      />
    </div>
    <div>
      <div class='label-group'>
        <label for='email'>Email Addres</label>
        <span id='email-error-text'></span>
      </div>
      <input
        autocomplete='off'
        id='email'
        name='email'
        type='email'
        placeholder='jdoe@email.com'
      />
    </div>
    <div>
      <div class='label-group'>
        <label for='phone'>Phone Number</label>
        <span id='phone-error-text'></span>
      </div>
      <input
        autocomplete='off'
        id='phone'
        name='phone'
        type='text'
        placeholder='+1234567890'
      />
    </div>
    <button class="btn filled-button next-step" type='submit'>Next Step</button>
  </form>
`
