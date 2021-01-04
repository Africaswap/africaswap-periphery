const Router = artifacts.require("AfricaswapRouter02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;
  //Configurar o endereço da Fabrica goerli
  //const FACTORY_ADDRESS = '0xcacBa00e0e9E2B4b475a0E811d48d43c8fBb2b04';

  //Configurar o endereço da Fabrica ganache
  // const FACTORY_ADDRESS = '0x4E74b29E0Af0530B8F83a295227E984D3e6Ef981';

  //Configurar o endereço da Fabrica BSC
  const FACTORY_ADDRESS = '0x43Eedab3DBCe98F6a631f007ca1E221920f57C7B';

  if(network === 'mainnet') {
	weth = await WETH.at('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
  } else if(network == 'goerli'){
    weth = await  WETH.at('0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6');
  } else {
	await deployer.deploy(WETH);
	weth = await WETH.deployed();
}
    
	await deployer.deploy(Router, FACTORY_ADDRESS, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6");
};

