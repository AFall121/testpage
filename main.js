const box_colors = document.querySelectorAll('.box-color')
const colorRandom = () => {
  let r = Math.floor(Math.random()*256)
  let g = Math.floor(Math.random()*256)
  let b = Math.floor(Math.random() * 256)
  // return "rgb("+r+","+g+","+b+")"
  return `rgb(${r},${g},${b})`
}

box_colors.forEach((item) => {
  item.style.backgroundColor = colorRandom()
})


