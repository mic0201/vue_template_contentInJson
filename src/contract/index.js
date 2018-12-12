var Web3 = require('web3');
var web3 = new Web3();
import contarct from './contract.json'

export async function connectContract() {
  web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/v3/aa6f9d72029242c4a9618fadd865c090'))
  let Instance = await _createContractInstance(),
    admin_wallet = contarct.admin_wallet

  console.log(Instance)
  return { Instance, admin_wallet }
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
    resolve(web3.eth.contract(contarct.abi).at(contarct.address))
  })
}
