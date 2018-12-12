var Web3 = require('web3');
var web3 = new Web3();
import contarct from './contract.json'

export async function connectContract() {
  let act = await _connectMetamask(),
    Instance = await _createContractInstance(),
    admin_wallet = contarct.admin_wallet

  return { act, Instance, admin_wallet }
}

function _connectMetamask() {
  return new Promise(async (resolve, reject) => {
    // set the provider of web3
    if (typeof web3 !== 'undefined') {
      window.micaWeb3 = new Web3(window.web3.currentProvider);
      await window.ethereum.enable()
    } else {
      return
    }
    let act = new Promise((resolve) => {
      window.micaWeb3.eth.getAccounts((e, r) => {
        if (!e) { resolve(r[0]) }
        resolve('')
      })
    })
    resolve(act)
  })
}

function _createContractInstance() {
  return new Promise(resolve => {
    resolve(window.micaWeb3.eth.contract(contarct.abi).at(contarct.address))
  })
}
