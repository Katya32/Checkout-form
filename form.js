const titleRef = document.createElement('h2');
titleRef.textContent = 'Payment';
titleRef.classList.add('mb-3');
titleRef.classList.add('mt-3');

const newBlockRef = document.querySelector('.justify-content-center')
newBlockRef.append(titleRef)


function createRadioButton(idName, nameForInput) {
  const divRef = document.createElement('div');
  const inputRef = document.createElement('input');
  const labelRef = document.createElement('label');

  divRef.classList.add('custom-control');
  divRef.classList.add('custom-radio');
    
  inputRef.classList.add('custom-control-input');
  inputRef.classList.add('m-2');
  inputRef.setAttribute('id', idName);
  inputRef.setAttribute('type', 'radio');
  inputRef.setAttribute('name', idName);
    
  labelRef.classList.add('custom-control-label');
  labelRef.setAttribute('for', idName);
  labelRef.setAttribute('type', 'radio');
  labelRef.textContent = nameForInput;

  divRef.append(inputRef, labelRef)
  
  newBlockRef.append(divRef)
  return newBlockRef
}

   const formRadioButton = [
    createRadioButton('creditCard', 'Credit card'), 
    createRadioButton('debitCard', 'Debit card'),
    createRadioButton('payPal', 'Paypal'),
  ]

  
  function createInputs(idName, nameForInput) {
    const divRef = document.createElement('div');
    const labelRef = document.createElement('label');
    const inputRef = document.createElement('input');
    const smallinputNameOnCardRef = document.createElement('small');
    
    divRef.classList.add('mb-3');
    divRef.classList.add('mt-3');
    divRef.classList.add('col-md-4');
        
    labelRef.setAttribute('for', idName);
    labelRef.textContent = nameForInput;
        
    inputRef.classList.add('form-control');
    inputRef.setAttribute('id', idName);
    inputRef.setAttribute('type', 'text');
    inputRef.setAttribute('name', idName);

    smallinputNameOnCardRef.classList.add('text-muted');
    smallinputNameOnCardRef.textContent = 'Full name as displayed on card';
    

    divRef.append(labelRef, inputRef, smallinputNameOnCardRef);

      // код ниже сделан костыльным костылем. не понимаю почему первый imput выдает null
    const firstImput = divRef.querySelector('#nameOnCard');
    if (firstImput === null) {
      inputRef.append(smallinputNameOnCardRef)
    }
       
    newBlockRef.append(divRef);
    return newBlockRef
  }

  const formInputs = [
    createInputs('nameOnCard', 'Name on card'),
    createInputs('creditCardNumber', 'Credit card number'),
    createInputs('expiration', 'Expiration'),
    createInputs('cvv', 'CVV'),
  ]
 
  const formRef = document.querySelector('.js-form')
  class FormManager{
    constructor(formRef) {
    this.formRef = formRef
    }

  addListener(callback) {
    this.formRef.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formValue = {};
      for(let item of formData) {
        formValue[item[0]] = item[1]
      }
      callback(formValue)
    })
  }
}

const signUpForm = new FormManager(formRef)
signUpForm.addListener(data => console.log(data))
  
  
 // function handleSignInSubmit(event) {
  //   event.preventDefault() //сбрасываем дефолтные настройки браузера
    
  //   const formData = new FormData(event.target) //в переменную записывается массив с массивами, в которых значения из импутов 
    
  //   let newObj = {}
  //   for (item of formData) {
  //     newObj[item[0]] = item[1] //после перебора массива с массивами в новый обьект записываеться из input name и value
  //   }
  //   console.log(newObj)
  //   }

  //   const formRef = document.querySelector('.js-form')
  //   formRef.addEventListener('submit', handleSignInSubmit)
  
