// 1st step 
const loadPhone = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    const res = await fetch(url);
    const data = await res.json();

    // 16th step 
    // add dataLimit parameter 
    // displayPhones(data.data);


    displayPhones(data.data, dataLimit);




}

// 2nd step 
// after 16th step add here also dataLimit paramiter
const displayPhones = (phones, dataLimit) => {
    // console.log(phone)
    const phonesContainer = document.getElementById('phones-container');

    // 5th step 
    phonesContainer.textContent = "";

    // 7th step and 11th
    // display 10 phones 


    const showAll = document.getElementById('show-all');

    // after 16th step add here also dataLimit 

    if (dataLimit && phones.length > 10) {
        // 7th step
        phones = phones.slice(0, 10);

        // 11th step 
        // add or remove show all button 
        showAll.classList.remove('d-none');

    }
    else {
        showAll.classList.add('show-all')
    }

    // 8th step 
    // display no phones found 
    const noPhone = document.getElementById('no-phone-messesg');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }



    // display all phones 
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;

        phonesContainer.appendChild(phoneDiv);
    });
    // stop loader 
    // step-10th 
    toggleSpinner(false);

}

// 13th step
// common function for full 3rd,4th,9th step 
const processSearch = (dataLimit) => {
    toggleSpinner(true);

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    loadPhone(searchText, dataLimit);
}



// handel search bar click 
// 3rd step 
document.getElementById('btn-search').addEventListener('click', function () {
    // start loader
    // step-9th
    // toggleSpinner(true);


    // const searchField = document.getElementById('search-field');
    // const searchText = searchField.value;

    // 4th step 

    // loadPhone(searchText);

    // 14th step
    // call 13th step function
    processSearch(10);

    // 6th step 

    searchField.value = "";
})

// loading hole spinner k dekhabo
// loading na hole dekhabo na 
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}

// 12th step 
// click show all button to load all phone 
document.getElementById('btn-show-all').addEventListener('click', function () {


    // 15th step 
    // no limit parameter 
    processSearch();


})





























// loadPhone();