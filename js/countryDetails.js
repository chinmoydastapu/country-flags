const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    // countries.forEach(c => console.log(c.name.common));

    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name.common}</h3> <hr>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}<p>
            <button onclick="displayDetails('${country.cca3}')">Details</button>
        `;
        countryContainer.appendChild(div);
    });
}

const displayDetails = cca3 => {
    // Accessing single country when clicked on details button
    const url = `https://restcountries.com/v3.1/alpha/${cca3}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(country => {
        // Showing some data
        const detailsContainer = document.getElementById('details-container');
        detailsContainer.classList.add('details');
        detailsContainer.innerHTML = `
            <div><img src="${country[0].flags.png}"></div>
            <p><strong>${country[0].name.common}</strong></p>
        `;
    });
}