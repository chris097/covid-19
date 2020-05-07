const engine = (className, value) =>{
    return className.textContent = value;
}
/*
// active cases
function activeCases(totalCase, totalDeath, recoverCase){
    return (totalDeath + recoverCase) - totalCase;
}
*/
let newComfirmCases = document.getElementById('newComfirmedCases'),
    recoveredCase = document.getElementById('recovered'),
    toatalDeath = document.getElementById('total-death'),
    active = document.getElementById('activeCases'),
    newAgregated = document.getElementById('new-aggregate'),
    newRecover = document.getElementById('new-recovered'),
    newDeath = document.getElementById('new-death'),
    newActive = document.getElementById('new-active')
    

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
        /*newComfirmCases.textContent = result.TotalConfirmed,
        recoveredCase.textContent = result.TotalRecovered,
        toatalDeath.textContent = result.TotalDeaths
        */
        engine(newComfirmCases,result.TotalConfirmed),
        engine(recoveredCase,result.TotalRecovered),
        engine(toatalDeath,result.TotalDeaths),
        engine(newAgregated, result.NewConfirmed),
        engine(newRecover, result.NewRecovered),
        engine(newDeath, result.NewDeaths),
        /*active.textContent = activeCases(result.TotalRecovered,result.TotalDeaths,result.TotalConfirmed)*/
        active.textContent = `${(result.TotalConfirmed) - (result.TotalDeaths + result.TotalRecovered)}`,
        newActive.textContent = `${(result.NewConfirmed) - (result.NewDeaths + result.NewRecovered)}`
        
        ))
    .catch(error => console.error(`Error: ${error}`))
}
loadJson()