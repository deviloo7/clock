/*setInterval(setClock(),1000)


const hourhand= document.querySelector('[data-hour-hand]')
const minhand= document.querySelector('[data-min-hand]')
const secondhand= document.querySelector('[data-second-hand]')
function setClock(){
	const date = new Date()
    const sec = date.getSeconds()/60
     const min = (sec+date.getMinutes())/60
      const hour = (min+date.getHours())/12

      setRotation(secondhand,sec)
      setRotation(minhand,min)
      setRotation(hourhand,hour)
}
function setRotation(element,ratio){
	element.style.setProperty('--rotation',ratio*360)
}*/
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

