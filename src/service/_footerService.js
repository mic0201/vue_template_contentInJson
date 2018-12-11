const axios = require('axios')

export function getFooter() {
  let url = `json/footer.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
