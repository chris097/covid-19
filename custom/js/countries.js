/*let url1 = "https://api.covid19api.com/summary"
const loadSearch = get => {
    const option = {
     method: 'Get',
     body: JSON.stringify(get),
     headers: new Headers({
         'Content-Type': 'application/json'
     })
 }
 return fetch(url1, option )
 .then(res => res.json())
 .then(res => {
    
     const data = res.Countries;

     data.forEach(e => {
         
     const li = document.createElement('li')
     li.className = 'covid-countries-name-code'
     const div = document.createElement('div')
     div.className = 'covid-country-code'
     const p = document.createElement('p')
     const h1 = document.createElement('hi')
     h1.textContent = `${e.CountryCode}`
     p.textContent = `${e.Country}`
     const divs = document.createElement('div')
     divs.className = 'covid-current-flex-end'
     divs.textContent = `${e.TotalConfirmed}`
     div.appendChild(h1)
     div.appendChild(p)
     li.appendChild(div)
     li.appendChild(divs)

     console.log(li)

     document.querySelector('.countries-flag-name').appendChild(li).addEventListener('click', function(){
         console.log('something was clicked')
     })

     });
 })
 .catch(error => console.error(`Error: ${error}`))
}
loadSearch() 

// UIController
const dispalySearch = () =>{
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let code = document.getElementById('search')


    if(code.value === ''){
        console.log('column should not be empty...')

    }else if(alphabet.indexOf(code.value) !== -1 || alphabet.indexOf(code.value) !== code.value.toUpperCase()){
        loadSearch() 
    }else{
        console.log('please letter is required...')
    }
};

// Press Enter Key
document.addEventListener('keyup', (e) =>{
    if(e.keyCode === 13 || e.charCode === 13 || e.which === 13){
        dispalySearch()
    }
});*/

let listCountry = [];
let searchBar = document.getElementById('search')
let result = document.querySelector('.countries-flag-name')

searchBar.addEventListener('keyup', (e) =>{
    let sreachForm = e.target.value.toUpperCase()

    let allCountries = listCountry.filter((name) => {
        return name.Country.includes(sreachForm)
    })
    console.log(allCountries)
    displayAllCountries(allCountries)
})

const loadCountries = async () =>{
    try{
        const res = await fetch("https://api.covid19api.com/summary")
        let testing = await res.json();
        listCountry = testing.Countries
        displayAllCountries(listCountry)
        console.log(listCountry)
    } catch (err){
        console.log(err)
    }
};

const displayAllCountries = (country) => {
    const htmlString = country.map((name) =>{
        return `
        <li class="covid-countries-name-code">
            <div class="covid-country-code">
           <h1>${name.CountryCode}</h1>
            <p>${name.Country}</p>
        </div>
         <div class="covid-current-flex-end">${name.TotalConfirmed}</div>
        </li>
     `
    })
    .join('');
    result.innerHTML = htmlString;

    let ad =result.addEventListener('click', function(){
        console.log('something was clicked')
    })
    console.log(result)
}

loadCountries()
