// 1st step 
const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);


}

// 2nd step 
const displayPhones = phones => {
    // console.log(phone)
    const phonesContainer = document.getElementById('phones-container');

    // 5th step 
    phonesContainer.textContent = "";

    // 7th step 
    // display 20 phones 
    phones = phones.slice(0, 10);

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




// handel search bar click 
// 3rd step 
document.getElementById('btn-search').addEventListener('click', function () {
    // start loader
    // step-9th
    toggleSpinner(true);


    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // 4th step 

    loadPhone(searchText);

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
// loadPhone();