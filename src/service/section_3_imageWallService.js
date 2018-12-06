const axios = require('axios')

export function getImageWall_3() {
  let url = `json/section_3_image-wall.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
