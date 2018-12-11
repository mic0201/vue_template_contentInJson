const axios = require('axios')

export function getTwitterWall() {
  let url = `json/section_11_twitter-wall.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
