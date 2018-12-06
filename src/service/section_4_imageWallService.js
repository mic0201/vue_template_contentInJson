const axios = require('axios')

export function getImageWall_4() {
  let url = `json/section_4_image-wall.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
