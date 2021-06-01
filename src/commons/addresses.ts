/* eslint-disable prefer-const */
import { dataSource, log } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export function getFactoryAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  if (network == 'rinkeby') return '0x33E4363D303D119624B0399D59b2dE06CC2B8728'
  if (network == 'matic') return '0x711cC29a512a01fbf865B6b060D71B883c0b38C1'
  if (network == 'xdai') return ADDRESS_ZERO
  // if (network == 'moonbeam') return '0x6c709500642E026b4e5f084c6390Eb18b08E91BC'
  log.warning('no factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getStakingRewardsFactoryAddress(): string {
  let network = dataSource.network() as string
  // erc20
  if (network == 'mainnet') return ADDRESS_ZERO
  if (network == 'xdai') return ADDRESS_ZERO
  if (network == 'rinkeby') return '0x7929240c367f9b2638D652DBB3D38f7AC516D71B'
  if (network == 'matic') return '0x680242DeD6b8Fc56e5363e67873B983BE78b2166'
  // if (network == 'moonbeam') return '0x2a78D6dAb33499556904Bb46DA0512824498B3C5'
  log.warning('no staking rewards factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getNativeCurrencyWrapperAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  if (network == 'rinkeby') return '0xc778417e063141139fce010982780140aa0cd5ab'
  if (network == 'matic') return '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa'
  if (network == 'xdai') return ADDRESS_ZERO
  log.warning('no native currency wrapper address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getLiquidityTrackingTokenAddresses(): string[] {
  let network = dataSource.network() as string
  if (network == 'mainnet') {
    return [
      '0xa1d65e8fb6e87b60feccbc582f7f97804b725521', // DXD
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
      '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
      '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
      '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
      '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
      '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
      '0x0ae055097c6d159879521c384f1d2123d1f195e6', // STAKE
      '0xa117000000f279d81a1d3cc75430faa017fa5a2e', // ANT
      '0xd56dac73a4d6766464b38ec6d91eb45ce7457c44', // PAN
      '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
      '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
      '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
      '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
      '0x514910771af9ca656af840dff83e8264ecf986ca', // LINK
      '0x960b236a07cf122663c4303350609a66a7b288c0', // ANTyar
      '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', // SNX
      '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', // YFI
      '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8', // yCurv
      '0xd533a949740bb3306d119cc777fa900ba034cd52' // CRV
    ]
  }
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'rinkeby') {
    return [
      '0xc23B40418E16c47E105a61a28ec4c791a1d6372b', //DEXS
      '0xc778417e063141139fce010982780140aa0cd5ab' // WETH
    ]
  }
  if (network == 'matic') {
    return [
      '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa', // PoS-WETH
      '0x4DfAe612aaCB5b448C12A591cD0879bFa2e51d62', // Plasma-WETH
      '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1', // DummyERC20Token
      '0x8a29E2B19120060753f9983e2f850223461Fed55', // DEXSWAP
    ]
  }
  // if (network == 'moonbeam') {
  //   return [
  //     '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d' // WXDAI
  //   ]
  // }
  log.warning('no liquidity tracking token address for unsupported network {}', [network])
  return []
}

export function getUsdcNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return ADDRESS_ZERO
  if (network == 'rinkeby') return '0xc23B40418E16c47E105a61a28ec4c791a1d6372b'
  if (network == 'matic') return '0x8a29E2B19120060753f9983e2f850223461Fed55'
  if (network == 'xdai') return ADDRESS_ZERO

  // if (network == 'moonbeam') return '0x126bEA9554063B2c1d17AF3766982363b2DF1311'
  log.warning('no usdc native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getDaiNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return ADDRESS_ZERO
  if (network == 'rinkeby') return '0xc23B40418E16c47E105a61a28ec4c791a1d6372b'
  if (network == 'matic') return '0x8a29E2B19120060753f9983e2f850223461Fed55'
  if (network == 'xdai') return ADDRESS_ZERO

  // if (network == 'moonbeam') return ADDRESS_ZERO
  log.warning('no dai native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getUsdtNativeCurrencyWrapperPair(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return ADDRESS_ZERO
  if (network == 'rinkeby') return '0xc23B40418E16c47E105a61a28ec4c791a1d6372b'
  if (network == 'matic') return '0x8a29E2B19120060753f9983e2f850223461Fed55'
  if (network == 'xdai') return ADDRESS_ZERO
  log.warning('no usdt native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}
