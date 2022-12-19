const sender = document.querySelector('.add-form__sender');
const accepter = document.querySelector('.add-form__accepter');
const senderAddress = document.querySelector('.add-form__senderAddress');
const accepterAddress = document.querySelector('.add-form__accepterAddress');
const price = document.querySelector('.add-form__price');
const table = document.querySelector('.table');

const modal = document.querySelector('.add-modal');
const form = document.querySelector('.add-form');
const addButton = document.querySelector('.main-deliveringTable__addButton');

const packages = JSON.parse(localStorage.getItem('packages')) || [];

packages.forEach((package) => {
    const item = document.createElement('div');
    item.classList.add('table__row');
    item.innerHTML = `
    <div>${package.num}</div>
    <div>${package.sender}</div>
    <div>${package.accepter}</div>
    <div>${package.senderAddress}</div>
    <div>${package.accepterAddress}</div>
    <div>${package.price}</div>
  `;

    table.insertAdjacentElement('beforeend', item);
});

addButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const package = {
        num: Math.floor(Math.random() * 2000000),
        sender: sender.value || 'not stated',
        accepter: accepter.value || 'not stated',
        senderAddress: senderAddress.value || 'not stated',
        accepterAddress: accepterAddress.value || 'not stated',
        price: price.value || 'not stated'
    };
    const packages = JSON.parse(localStorage.getItem('packages')) || [];
    packages.push(package);
    localStorage.setItem('packages', JSON.stringify(packages));


    const item = document.createElement('div');
    item.classList.add('table__row');
    item.innerHTML = `
    <div>${package.num}</div>
    <div>${package.sender}</div>
    <div>${package.accepter}</div>
    <div>${package.senderAddress}</div>
    <div>${package.accepterAddress}</div>
    <div>${package.price}</div>
  `;

    table.insertAdjacentElement('beforeend', item);

    sender.value = '';
    accepter.value = '';
    senderAddress.value = '';
    accepterAddress.value = '';
    price.value = '';
    modal.style.display = 'none';
});