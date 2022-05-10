        /* HTML TO JS VARIABLES */
        /* INPUTS */
let elForm = document.querySelector('.js-form');
let elSelectBreadType = elForm.querySelector('.js-bread-select');
let elRadiosBox = elForm.querySelector('.js-radios-size');
let elCheckboxesProducts = elForm.querySelector('.js-checkboxes');
let elCheckboxesAdds = elForm.querySelector('.js-checkboxes-other');

        /* OUTPUTS */
let elOutputBreadType = document.querySelector('.js-bread-type');
let elOutputBreadSize = document.querySelector('.js-bread-size');
let elOutputProducts = document.querySelector('.js-ingredients-list');
let elOutputAdds = document.querySelector('.js-adds-list');

        /* ARRAYS */
let breadTypeArr = ["Yupqa", "O`rta", "Qalin"];
let breadSizeArr = ["25sm", "30sm", "35sm"];
let pizzaProductsArr = ["Pomidor", "Tuzlangan bodring", "Kurka go'shti", "Qo'ziqorin", "Zaytun", "Qazi"];
let addedProductsArr = [];
let pizzaAddsArr = ["Achchiq", "Sosiskali"];
let addedAddsArr = [];




elOutputBreadType.textContent = breadTypeArr[0];

        /* GENERATE OPTION TO SELECT */
for (let i = 0; i < breadTypeArr.length; i++) {
  let newOptionItem = document.createElement('option');
  newOptionItem.value = newOptionItem.textContent = breadTypeArr[i];


  elSelectBreadType.append(newOptionItem);
}

  /* Generate radios pizza size */
for (let i = 0; i < breadSizeArr.length; i++) {
  let wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('form-check',"p-0");

  let radioItem = document.createElement('input');
  radioItem.classList.add('btn-check');
  radioItem.type = 'radio';
  radioItem.name = 'Bread-size';
  radioItem.id = `radio-${i}`;
  radioItem.value = breadSizeArr[i];

  if (i === 0) {
    radioItem.checked = true;
  }

  let newLabel = document.createElement('label');
  newLabel.classList.add('btn', "btn-outline-danger", 'rounded-5');
  newLabel.setAttribute('for', `radio-${i}`);
  newLabel.textContent = breadSizeArr[i];

  wrapperDiv.append(radioItem);
  wrapperDiv.append(newLabel);

  elRadiosBox.append(wrapperDiv);

  radioItem.addEventListener('change', function () {
    elOutputBreadSize.textContent = this.value;
  });
}

  /* Generate checkboxes pizza products */
for (let i = 0; i < pizzaProductsArr.length; i++) {
  let wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('form-check');

  let checkItem = document.createElement('input');
  checkItem.classList.add('form-check-input');
  checkItem.setAttribute("type", 'checkbox');
  checkItem.setAttribute("name", "pizzaProductsArr[i]");
  checkItem.id = `check-top-${i}`;
  checkItem.value = pizzaProductsArr[i];

  let newLabel = document.createElement('label');
  newLabel.classList.add('form-check-label');
  newLabel.setAttribute('for', `check-top-${i}`);
  newLabel.textContent = pizzaProductsArr[i];

  wrapperDiv.append(checkItem);
  wrapperDiv.append(newLabel);

  elCheckboxesProducts.append(wrapperDiv);

  checkItem.addEventListener('change', function () {
    let currentValue = this.value;
    let index = addedProductsArr.indexOf(currentValue);

    if (index > -1) {
      addedProductsArr.splice(index, 1);
    }
    else {
      addedProductsArr.push(currentValue);
    }
    deleteAddedProducts();
  });
}

/* Generate additional checkboxes  */
for (let i = 0; i < pizzaAddsArr.length; i++) {
  let wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('form-check', 'col-6');

  let checkItem = document.createElement('input');
  checkItem.classList.add('form-check-input');
  checkItem.type = 'checkbox';
  checkItem.name = pizzaAddsArr[i];
  checkItem.id = `check-adds-${i}`;
  checkItem.value = pizzaAddsArr[i];

  let newLabel = document.createElement('label');
  newLabel.classList.add('form-check-label');
  newLabel.setAttribute('for', `check-adds-${i}`);
  newLabel.textContent = pizzaAddsArr[i];

  wrapperDiv.append(checkItem);
  wrapperDiv.append(newLabel);

  elCheckboxesAdds.append(wrapperDiv);

  checkItem.addEventListener('change', function () {
    let currentValue = this.value;
    let index = addedAddsArr.indexOf(currentValue);

    if (index > -1) {
      addedAddsArr.splice(index, 1);
    }
    else {
      addedAddsArr.push(currentValue);
    }
    deleteAddedAdds();
  });
}

     /* SELECT OUTPUT */
elSelectBreadType.addEventListener('change', function () {
  elOutputBreadType.textContent = elSelectBreadType.value;
});

 /* delete products list */
let deleteAddedProducts = function () {
  elOutputProducts.innerHTML = '';
  for (let i = 0; i < addedProductsArr.length; i++) {
    let itemLi = document.createElement('li');
    itemLi.textContent = `- ${addedProductsArr[i]}`;
    elOutputProducts.append(itemLi);
  }
}

  /* delete adds list */
let deleteAddedAdds = function () {
  elOutputAdds.innerHTML = '';
  for (let i = 0; i < addedAddsArr.length; i++) {
    let itemLi = document.createElement('li');
    itemLi.textContent = `- ${addedAddsArr[i]}`;
    elOutputAdds.append(itemLi);
  }
}
