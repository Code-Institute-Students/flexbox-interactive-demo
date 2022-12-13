/** Elements */
const parentBox = document.getElementById("parent");
const boxA = document.getElementById("box-a")
const boxB = document.getElementById("box-b")

/** Inputs */
const widthInput = document.getElementById("width");
const shrinkAInput = document.getElementById("flex-shrink-a");
const shrinkBInput = document.getElementById("flex-shrink-b");

/** Event listeners */
widthInput.addEventListener("change", calculate);
shrinkAInput.addEventListener("change", calculate);
shrinkBInput.addEventListener("change", calculate);

/** Number displays */
const parentWidth = document.getElementById("parent-width")

const shrinkAValue = document.getElementById("flex-s-a");
const shrinkACalc = document.getElementById("calc-shrink-a");
const widthA = document.getElementById("actual-width-a");

const shrinkBValue = document.getElementById("flex-s-b");
const shrinkBCalc = document.getElementById("calc-shrink-b");
const widthB = document.getElementById("actual-width-b");

/** Functions */
function calculate(event) {
  event.preventDefault();
  console.log("Adjusting parent width");
  const newParentWidth = widthInput.value;
  console.log("New value = ", newParentWidth);
  // set width of parent box
  
  
  // calculations
  const parentDeficit = 600 - parseInt(newParentWidth)
  const shrinkA = parseInt(shrinkAInput.value)
  const shrinkB = parseInt(shrinkBInput.value)
  const shrinkTotal = shrinkA + shrinkB
  console.log("deficit = ", parentDeficit)
  console.log("sum of flex-shrink values = ", shrinkTotal)
  aShrunkBy = parentDeficit * shrinkA / shrinkTotal
  bShrunkBy = parentDeficit * shrinkB / shrinkTotal

  // set values
  parentWidth.innerText = newParentWidth

  shrinkAValue.innerText = shrinkA
  shrinkBValue.innerText = shrinkB

  shrinkACalc.innerText = aShrunkBy.toFixed()
  shrinkBCalc.innerText = bShrunkBy.toFixed()
  
  widthA.innerText = (300 - aShrunkBy).toFixed()
  widthB.innerText = (300 - bShrunkBy).toFixed()
  

  // set styles
  parentBox.style.width = newParentWidth + "px";
  boxA.style.flexShrink = shrinkA
  boxB.style.flexShrink = shrinkB
}
