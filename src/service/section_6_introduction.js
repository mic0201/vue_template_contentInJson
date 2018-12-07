const axios = require('axios')

export function getIntroduction_6() {
  let url = `json/section_6_introduction.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}

export function getIcon1() {
  let url = `img/section_6_introduction/section-6-1.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}

export function getIcon2() {
  let url = `img/section_6_introduction/section-6-2.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}

export function getIcon3() {
  let url = `img/section_6_introduction/section-6-3.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
