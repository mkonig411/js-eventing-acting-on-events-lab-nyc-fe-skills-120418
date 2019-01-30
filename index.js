// Event Listener

// 1 - find the thing to do the events on 
// we actualy don't need an element (the document will get the event listener)
// 2 - write the function that will happen when we do the thing

const moveDodgerLeft = () => {
  // get the dodger first
  const dodger = document.getElementById('dodger')
  //next change position of dodger using css 
  const currentLeft = dodger.style.left 
  let currentLeftNumber = currentLeft.replace('px','')
  currentLeftNumber = parseInt(currentLeftNumber, 10)
  if (currentLeftNumber > 0) {
  dodger.style.left = currentLeftNumber - 5 + 'px'}
}

const moveDodgerRight = () => {
  // get the dodger first
  const dodger = document.getElementById('dodger')
  //next change position of dodger using css 
  const currentRight = dodger.style.left 
  let currentRightNumber = currentRight.replace('px','')
  currentRightNumber = parseInt(currentRightNumber, 10)
  if (currentRightNumber < 360) {
  dodger.style.left = currentRightNumber + 5 + 'px' }
}

const moveDodgerHelper = (event) => {
  if (event.keyCode ===37) {
    moveDodgerLeft()
  }
   if (event.keyCode ===39) {
    moveDodgerRight()}
}
  document.addEventListener('keydown', moveDodgerHelper)