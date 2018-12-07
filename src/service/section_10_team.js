const axios = require('axios')

export function getTeam() {
  let url = `json/section_10_team.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
