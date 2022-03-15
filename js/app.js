const loading = document.getElementById('load');
const loadCountries=()=>{
    loading.innerHTML= `<h1 class="load">Loading...</h1>`
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries=countries=>{
    const coutrieshtml=countries.map(country=>getHtml(country));
    const countriesContainer = document.getElementById('countries');
    const country = coutrieshtml.join(' ');
    loading.innerHTML=`<h1 class="load">Countries</h1>`;
    countriesContainer.innerHTML= country;
}
const getHtml=({flags,name,area,capital})=>{
    return `
    <div class="country">
    <img src="${flags.png}">
    <h2>${name.common}</h2>
    <p>Capital: ${capital}</p>
    <p>Area: ${area}</p>
    </div>
    `
}
loadCountries();