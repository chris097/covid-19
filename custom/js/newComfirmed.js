let newComfirmCases = document.getElementById('newComfirmedCases')
console.log(newComfirmCases)
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
    .then(res => (res.Global.TotalDeaths))
    .then(res => (newComfirmCases.textContent = res))
    .catch(error => console.error(`Error: ${error}`))
}
loadJson()