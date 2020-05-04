let newComfirmCases = document.getElementById('newComfirmedCases')
let recoveredCase = document.getElementById('recovered')
let toatalDeath = document.getElementById('total-death')
let ad = document.querySelector('.realtime-data-card-count-off');
console.log(ad)
let url = "https://api.covid19api.com/summary"
const loadJson = get => {
    const option = {
        method: 'Get',
        body: JSON.stringify(get),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    return fetch(url, option )
    .then(res => res.json())
    .then(res => (result = res.Global))
    .then(res => (
        newComfirmCases.textContent = result.TotalConfirmed,
        recoveredCase.textContent = result.TotalRecovered,
        toatalDeath.textContent = result.TotalDeaths
        ))
    .catch(error => console.error(`Error: ${error}`))
}
loadJson()