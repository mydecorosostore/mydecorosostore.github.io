function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

window.onload = () => {
  let currentIndex = 1

  async function FadeSection1Image () {
    const img = document.getElementById('section-1-img')
    const p = document.getElementById('section-1-p')
    img.classList.add('fade')
    p.classList.add('fade')
    await sleep(2500)
    img.src = `images/image${currentIndex}.png`
    currentIndex++
    if (currentIndex >= 9) {
      currentIndex = 1
    }
    await sleep(2500)
    img.classList.remove('fade')
    p.classList.remove('fade')
  }

  FadeSection1Image()
  setInterval(FadeSection1Image, 10000)
}