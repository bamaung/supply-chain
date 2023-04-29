# ETH Supply Chain Dapp
## Libraries and tools used
- nodejs v10.24.1
- npm 6.14.12
- Truffle v4.1.14 (core: 4.1.14)
- Solidity v0.4.24 (solc-js)
- truffle-assertions 0.9.2 (used for testing solidity events)
- truffle-hdwallet-provider 1.0.17
- web3js 0.20.7

## Compile and test the project
```sh
$ truffle develop  # start the development client
$ compile 
$ test
```

## Deploy smart contracts to the Sepolia testnet
```sh
$ truffle migrate --network sepolia
```

## Tx hash and Smart Contract
|                          |                                                                    |
|--------------------------|--------------------------------------------------------------------|
| FarmerRole Tx hash       | 0x58371feaf00597ab6eba1716bdc434382d43d124fe347905390be49c4d00c8ab |
| FarmerRole contract      |                         0x0932351e7b89694e895e6a0e96ed697f974f7fcd |
| DistributorRole Tx hash  | 0x109a81f444d28616ed25e13debf1501270c64be11a79c811c8d0d2da6449d4f2 |
| DistributorRole contract |                         0x78caa15cc9ac6f656fd14c6db8b0ec47027fa4ba |
| RetailerRole Tx hash     | 0xecea19b40c69eb7b0c21d7d21253892526f9d7fed5dccd2625c5d57e8e54099b |
| RetailerRole contract    |                         0x070e5a799b0045f4190199e6f5bdbe6179aac331 |
| ConsumerRole Tx hash     | 0xddcbf616a6b7833b07fbd7a4b824afab9b5a8a5d65cd716f6b570449fd3350bb |
| ConsumerRole contract    |                         0x2f5c7dc94b1a25da61a571187e2a5ba4b0d40e53 |
| SupplyChain Tx hash      | 0xabae25e52cfa1a2ad7641f0d3083ea3aba90f057cc8a886c0c37a25292dbcba9 |
| SupplyChain contract     |                         0x7998140c3ab5ed211bd47cfb2cdfa76e7aa0606f |

[View Supply chain contract on etherscan](https://sepolia.etherscan.io/address/0x7998140c3ab5ed211bd47cfb2cdfa76e7aa0606f)

## IPFS website
To make Dapp more decentralize I used IPFS for website hosting.

[Fair Trade Coffee](https://gateway.ipfs.io/ipfs/QmPthR3pBQKzUmjPPWHsWbVe8yweu1DHXzN4MJ5XvRvm3Q/supply-chain/)

### Deploy to IPFS
- Copy the necessary files to the build directory.
```sh
$ cp index.html build/
$ cp src/js build/
$ cp style.css build/
```
- Replace the code on line 105 of the build/js/app.js file with the code below.
```js
var jsonSupplyChain='build/contracts/SupplyChain.json';
```
- Upload to IPFS
```sh
$ ipfs add -r build
$ ipfs name publish <ipfs-hash-of-the-build-folder>
```

## Diagrams
### Activity Diagram
![Activity Diagram](/images/activity.png)

### Sequence Diagram
![Sequence Diagram](/images/sequence.png)

### State Diagram
![State Diagram](/images/state.png)

### Classes (Data Model) Diagram
![Classes Diagram](/images/class.png)