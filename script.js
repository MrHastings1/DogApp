//Dog API below
//https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage')
const dogbutton = document.getElementById('dogButton')

const getNewDog = () => {
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
  console.log(json)
  console.log(json.message)
  dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
})
}

dogbutton.onclick = () => getNewDog()
