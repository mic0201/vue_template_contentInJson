var Web3 = require('web3');
var web3 = new Web3();
import contarct from './contract.json'

export async function connectContract() {
  window.micaWeb3 = web3
  web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/v3/aa6f9d72029242c4a9618fadd865c090'))
  let Instance = await _createContractInstance(),
    admin_wallet = contarct.admin_wallet

  return { Instance, admin_wallet }
}

function _createContractInstance() {
  return new Promise(resolve => {
    resolve(web3.eth.contract(contarct.abi).at(contarct.address))
  })
}
