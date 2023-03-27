const objects = [
  {
    id: 1,
    title: 'Перегородка #1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    url: 'images/Frame 1.png'
  },
  {
    id: 2,
    title: 'Перегородка #2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    url: 'images/Frame 2.png'
  },
  {
    id: 3,
    title: 'Перегородка #3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    url: 'images/Frame 3.png'
  },
  {
    id: 4,
    title: 'Перегородка #4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    url: 'images/Frame 4.png'
  },
  {
    id: 5,
    title: 'Перегородка #5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    url: 'images/Frame 5.png'
  },
  {
    id: 6,
    title: 'Перегородка #6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    url: 'images/Frame 6.png'
  },
]

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

window.onload = () => {
  const button = document.getElementById('section-1-button')
  const img = document.getElementById('section-1-img')
  const h1 = document.getElementById('section-1-h1')
  const p = document.getElementById('section-1-p')

  const obj = objects[0]

  img.src = obj.url
  h1.innerText = obj.title
  p.innerText = obj.description
  img.onclick = () => window.location.replace(`/description.html?id=${obj.id}`)
  button.onclick = () => window.location.replace(`/description.html?id=${obj.id}`)

  let currentIndex = 1

  async function FadeSection1Image () {
    currentIndex++

    const button = document.getElementById('section-1-button')
    const img = document.getElementById('section-1-img')
    const h1 = document.getElementById('section-1-h1')
    const p = document.getElementById('section-1-p')

    img.classList.add('fade')
    h1.classList.add('fade')
    p.classList.add('fade')

    const obj = objects[currentIndex - 1]
    await sleep(2500)

    img.src = obj.url
    h1.innerText = obj.title
    p.innerText = obj.description
    img.onclick = () => window.location.replace(`/description.html?id=${obj.id}`)
    button.onclick = () => window.location.replace(`/description.html?id=${obj.id}`)

    if (currentIndex >= 6) {
      currentIndex = 1
    }

    await sleep(2500)

    img.classList.remove('fade')
    h1.classList.remove('fade')
    p.classList.remove('fade')
  }

  FadeSection1Image()
  setInterval(FadeSection1Image, 10000)
}