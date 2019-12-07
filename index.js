let x, y
let pacman = ''
for (y = 1; y >= -1; y -= 0.05, pacman += '<br>') {
  for (x = -1; x <= 1; x += 0.025) {
    if (
      x * x + y * y < 1 &&  // disk
      Math.abs(Math.atan2(y, x)) > 0.5 && // mouth
      x * x + Math.pow(y - 0.5, 2) > 0.02 // eye
    ) {
      // console.log('*')
      pacman += '*'
    } else {
      // console.log(' ')
      pacman += '..'
      // &nbsp;
    }
  }
}

document.getElementById('pac-man').innerHTML = pacman