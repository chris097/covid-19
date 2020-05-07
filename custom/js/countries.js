const dispalySearch = () =>{
    let code = document.getElementById('search').value
    let number = '1234567890'.split('')
    if(code === ''){
        console.log('character lenght must be atleat 3')

    }else{

      let url1 = "https://api.covid19api.com/summary"
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

        document.querySelector('.countries-flag-name').appendChild(li)
        });
    })
    
    .catch(error => console.error(`Error: ${error}`))
}
loadSearch()
    }

}



document.addEventListener('keypress', (e) =>{
    if(e.keyCode === 13 || e.charCode === 13 || e.which === 13){
        dispalySearch()
    }
})
