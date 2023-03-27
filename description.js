const objects = [
  {
    id: 1,
    title: 'Перегородка #1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    urls: ['images/Frame 1.png', 'images/Frame 1_1.png', 'images/Frame 1_2.png']
  },
  {
    id: 2,
    title: 'Перегородка #2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    urls: ['images/Frame 2.png', 'images/Frame 2_1.png', 'images/Frame 2_2.png']
  },
  {
    id: 3,
    title: 'Перегородка #3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    urls: ['images/Frame 3.png', 'images/Frame 3_1.png', 'images/Frame 3_2.png']
  },
  {
    id: 4,
    title: 'Перегородка #4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    urls: ['images/Frame 4.png', 'images/Frame 4_1.png', 'images/Frame 4_2.png']
  },
  {
    id: 5,
    title: 'Перегородка #5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    urls: ['images/Frame 5.png', 'images/Frame 5_1.png', 'images/Frame 5_2.png']
  },
  {
    id: 6,
    title: 'Перегородка #6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nostrum voluptate! Earum,\n' +
      '        odio, saepe? Accusantium aliquam commodi consequuntur debitis doloremque expedita laboriosam magni ullam ut!\n' +
      '        Facilis in laboriosam quis ullam.',
    urls: ['images/Frame 6.png', 'images/Frame 6_1.png', 'images/Frame 6_2.png']
  },
]

window.onload = () => {
  const h1 = document.getElementById('section-1-h1')
  const p1 = document.getElementById('section-1-p-1')
  const p2 = document.getElementById('section-1-p-2')
  const img1 = document.getElementById('section-1-img-1')
  const img2 = document.getElementById('section-1-img-2')
  const img3 = document.getElementById('section-1-img-3')

  const usp = new URLSearchParams(window.location.search)
  const id = Number(usp.get('id'))
  const obj = objects[id - 1]

  img1.src = obj.urls[0]
  img2.src = obj.urls[1]
  img3.src = obj.urls[2]
  h1.innerText = obj.title
  p1.innerText = obj.description
  p2.innerText = obj.description
}