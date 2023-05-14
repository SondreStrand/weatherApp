
let inputvalue = document.querySelector('#cityinput')
let btn = document.querySelector('#add')
let city = document.querySelector('#placeoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')

apik = "3045dd712ffe6e702e3245525ac7fa38"

convertion = (val)=> {
    return (val - 273).toFixed(2)
}

btn.addEventListener('click',  () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data=> {
        let nameval = data['name']
        let descrip = data['weather']['0']['description']
        let temperature = data  ['main']['temp']
        let wndspd  = data['wind']['speed']

        city.innerHTML=`været i <span>${nameval}<span>`
        temp.innerHTML = `Temperatur: <span>${ convertion(temperature)} C</span>`
        description.innerHTML = `Sky forhold: <span>${descrip}<span>`
        wind.innerHTML = `vind hastighet: <span>${wndspd} km/h<span>`

    })
    .catch (err => alert('du tastet inn noe feil'))
})

