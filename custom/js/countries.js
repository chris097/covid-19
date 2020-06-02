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

//Map
/*
var map;
function initMap() {
    let option = {
        center: {lat: 5.476310, lng: 7.025853},
        zoom: 8
    }
  map = new google.maps.Map(document.querySelector('.covid-map-locator'), option)


  let marker = new google.maps.Marker({
      position: {lat: 5.476310, lng: 7.025853},
      map:map
  })
  marker()
}

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtavCbJsdKZKOcH3yFpQmVHaH5K-ylFT8&callback=initMap"
    async defer></script>
*/
// gobal variable
let listCountry = [];
let listCount = []
let searchBar = document.getElementById('search')
let result = document.querySelector('.countries-flag-name')

/*
const getAllCountriesInfo = (e) =>{
    let getDo = e.target;
  if(getDo !== -1){
   let sd = loadCountries()
   
  }
}*/
  

// get content from search form
searchBar.addEventListener('keyup', (e) =>{
    let sreachForm = e.target.value.toUpperCase()

    let allCountries = listCountry.filter((name) => {
        return name.Country.includes(sreachForm)
    })
    console.log(allCountries)
    displayAllCountries(allCountries)
    //getAllCountriesInfo(allCountries)
})

/* function for fetchingcovid-19  api
*/
const loadCountries = async () =>{
    try{
        const res = await fetch("https://api.covid19api.com/summary")
        let testing = await res.json();
        listCountry = testing.Countries
        displayAllCountries(listCountry)
        //getAllCountriesInfo(listCountry)
        console.log(listCountry)
    } catch (err){
        console.log(err)
    }
};

// get content on search-list...
/*
function for tracking countries, countries-code, total affected cases in a particular
countries...
*/
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


/*
    const loadStates = async () =>{
        try{
    const tes = await fetch(`https://api.covid19api.com/all`)
            let test = await tes.json();
            let listState = test
            getAllCountriesInfo(listState)
            console.log(listState)
        } catch (err){
            console.log(err)
        }
    };
    loadStates()


const getAllCountriesInfo = (count) => {
    const html = count.map((el) =>{
        return `
        <div class="covid-map-dense"><!--covid map dense-->
        <div class="column-flex"><!--column flex is a utility located @base.css-->
            <img src="./custom/img/nigeria.svg" alt="" class="flag">
        <div class="covid-inner-map">
            <span>${el.Country}</span>
            <span>Africa</span>
        </div>
        </div><!--column flex is a utility located @base.css-->
        <div class="column-flex covid-19-checkout"><!--column flex-->
            <div class="text-center">
                <span class="col-red fs-25">${el.Confirmed}</span>
                <p class="mg-5">Confirmed</p>
            </div>
            <div class="text-center">
                <span class="col-black fs-25">10</span>
                <p class="mg-5">Deaths</p>
            </div>
            <div class="text-center">
                <span class="col-green fs-25">45</span>
                <p class="mg-5">Recovered</p>
            </div>
        </div><!--column flex-->
      <!--Uncompleted slide start next line here-->
      <div class="covid-states"><!--covid states-->
        <p class="text-center mgtop-10">Total 55 cases confirmed in 4 states</p>
        <div class="column-flex covid-states-container"><!--column flex-->
            <img src="./custom/img/covid19a.jpg" alt="">
            <div class="covid-states-content">
                <span>Lagos State</span>
                <div class="column-flex covid-confirmed-cases">
                    <div>confirmed <span>50</span><span>|</span></div>
                    <div>Death <span>20</span><span>|</span></div>
                    <div>Recovered <span>5000</span></div>
                </div>
            </div>
        </div><!--column flex covid states container-->
        <div class="column-flex covid-states-container"><!--column flex-->
            <img src="./custom/img/covid19a.jpg" alt="">
            <div class="covid-states-content">
                <span>Imo State</span>
                <div class="column-flex covid-confirmed-cases">
                    <div>confirmed <span>50</span><span>|</span></div>
                    <div>Death <span>20</span><span>|</span></div>
                    <div>Recovered <span>5000</span></div>
                </div>
            </div>
        </div><!--column flex covid states container-->
    </div><!--covid states-->
    </div><!--covid map dense-->
     `
    })

    console.log(html)*/
    //result.innerHTML = htmlString;

    
    /*
      event click to get covid-19 countries, countries-code 
      state with affected numbers...
    */

  /* result.addEventListener('click', function(e){
       if(e.target !== -1){
           
       }
   });*/

/* function for tracking covid-19 countries-code, countries,
states with covid-19 and numbers...
*/

}
loadCountries()

