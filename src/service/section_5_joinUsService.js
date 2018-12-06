const axios = require('axios')

export function getJoinUs() {
  let url = `json/section_5_join-us.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}

export function getIcon1() {
  let url = `img/section_5_join-us/square.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}

export function getIcon2() {
  let url = `img/section_5_join-us/users.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}

export function getBtnIcon() {
  let url = `img/section_5_join-us/users.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
