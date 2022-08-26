/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LottoCommu, LottoCommuInterface } from "../LottoCommu";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "lotteryAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "operatorAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "balanceEachRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ticketCount",
        type: "uint256",
      },
    ],
    name: "buyTicketDAO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "calculateFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roundId_",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roundId_",
        type: "uint256",
      },
    ],
    name: "claimLotteryReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isStartRound",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isWinEachRound",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lottery",
    outputs: [
      {
        internalType: "contract ILottery",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lotteryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryIdEachRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lottoToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lottoTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "memberTicketsAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roundId_",
        type: "uint256",
      },
    ],
    name: "reward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roundId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roundReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ticketsEachRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenFeeReservers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526005600e556103e8600f553480156200001c57600080fd5b5060405162002318380380620023188339818101604052810190620000429190620001a6565b82600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200024a565b600081519050620001a08162000230565b92915050565b600080600060608486031215620001bc57600080fd5b6000620001cc868287016200018f565b9350506020620001df868287016200018f565b9250506040620001f2868287016200018f565b9150509250925092565b6000620002098262000210565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200023b81620001fc565b81146200024757600080fd5b50565b6120be806200025a6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80637d207ce5116100c3578063ba13a5721161007c578063ba13a572146103ef578063d2ef07951461040d578063d43cf7a81461043d578063ddca3f431461046d578063e278fe6f1461048b578063f62385321461049557610158565b80637d207ce5146102f55780638cd221c91461032557806399a5d74714610343578063a8e6eb3014610373578063a9fb763c146103a3578063b6f10e32146103d357610158565b8063420f37ef11610115578063420f37ef146102315780634c450e261461026157806355e3f0861461027f5780635c1accab146102895780637556e8e5146102a757806376809ce3146102d757610158565b8063127effb21461015d5780632622f59a1461017b57806332ed2ac814610197578063365b48e9146101c7578063379607f5146101f75780633beedf6d14610213575b600080fd5b6101656104c5565b6040516101729190611a47565b60405180910390f35b610195600480360381019061019091906117ae565b6104eb565b005b6101b160048036038101906101ac9190611800565b610bf3565b6040516101be9190611c55565b60405180910390f35b6101e160048036038101906101dc91906117ae565b610c18565b6040516101ee9190611c55565b60405180910390f35b610211600480360381019061020c91906117ae565b610c30565b005b61021b610ef8565b6040516102289190611a47565b60405180910390f35b61024b600480360381019061024691906117ae565b610f1c565b6040516102589190611c55565b60405180910390f35b610269610f34565b6040516102769190611a47565b60405180910390f35b610287610f5a565b005b6102916111b6565b60405161029e9190611aff565b60405180910390f35b6102c160048036038101906102bc91906117ae565b6111dc565b6040516102ce9190611c55565b60405180910390f35b6102df6111f4565b6040516102ec9190611c55565b60405180910390f35b61030f600480360381019061030a91906117ae565b6111fa565b60405161031c9190611ae4565b60405180910390f35b61032d61121a565b60405161033a9190611c55565b60405180910390f35b61035d600480360381019061035891906117ae565b611220565b60405161036a9190611c55565b60405180910390f35b61038d600480360381019061038891906117ae565b611244565b60405161039a9190611ae4565b60405180910390f35b6103bd60048036038101906103b891906117ae565b611264565b6040516103ca9190611c55565b60405180910390f35b6103ed60048036038101906103e891906117ae565b611308565b005b6103f76115bf565b6040516104049190611b1a565b60405180910390f35b61042760048036038101906104229190611800565b6115e5565b6040516104349190611ae4565b60405180910390f35b6104576004803603810190610452919061175c565b611614565b6040516104649190611c55565b60405180910390f35b61047561162c565b6040516104829190611c55565b60405180910390f35b610493611632565b005b6104af60048036038101906104aa91906117ae565b6116c4565b6040516104bc9190611c55565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60001515600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c2148279600660006003548152602001908152602001600020546040518263ffffffff1660e01b815260040161055f9190611c55565b602060405180830381600087803b15801561057957600080fd5b505af115801561058d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b19190611785565b1515146105f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ea90611b35565b60405180910390fd5b60008111610636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062d90611bd5565b60405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631209b1f66040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156106a257600080fd5b505af11580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da91906117d7565b826106e59190611d41565b905060006106f282611220565b905080826107009190611cba565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161075b9190611a47565b60206040518083038186803b15801561077357600080fd5b505afa158015610787573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ab91906117d7565b10156107ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e390611c15565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd333084866108389190611cba565b6040518463ffffffff1660e01b815260040161085693929190611a62565b602060405180830381600087803b15801561087057600080fd5b505af1158015610884573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a89190611785565b5060008367ffffffffffffffff8111156108eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156109195781602001602082028036833780820191505090505b50905060005b8481101561098257600082600081518110610963577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050808061097a90611e2b565b91505061091f565b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518363ffffffff1660e01b8152600401610a00929190611a99565b602060405180830381600087803b158015610a1a57600080fd5b505af1158015610a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a529190611785565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663716cac96826040518263ffffffff1660e01b8152600401610aae9190611ac2565b600060405180830381600087803b158015610ac857600080fd5b505af1158015610adc573d6000803e3d6000fd5b505050508160106000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b519190611cba565b925050819055508360076000600354815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bba9190611cba565b92505081905550836009600060035481526020019081526020016000206000828254610be69190611cba565b9250508190555050505050565b6007602052816000526040600020602052806000526040600020600091509150505481565b60066020528060005260406000206000915090505481565b60011515600b600083815260200190815260200160002060009054906101000a900460ff16151514610c97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8e90611bb5565b60405180910390fd5b60006007600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610d2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2190611b55565b60405180910390fd5b60001515600d600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610dce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc590611b95565b60405180910390fd5b6000610dd982611264565b9050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610e38929190611a99565b602060405180830381600087803b158015610e5257600080fd5b505af1158015610e66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8a9190611785565b506001600d600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915090505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60001515600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c2148279600660006003548152602001908152602001600020546040518263ffffffff1660e01b8152600401610fce9190611c55565b602060405180830381600087803b158015610fe857600080fd5b505af1158015610ffc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110209190611785565b151514611062576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105990611b35565b60405180910390fd5b60001515600a6000600354815260200190815260200160002060009054906101000a900460ff161515146110cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c290611bf5565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e580f47b6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561113557600080fd5b505af1158015611149573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116d91906117d7565b600660006003548152602001908152602001600020819055506001600a6000600354815260200190815260200160002060006101000a81548160ff021916908315150217905550565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60086020528060005260406000206000915090505481565b600f5481565b600b6020528060005260406000206000915054906101000a900460ff1681565b60035481565b6000600f54600e54836112339190611d41565b61123d9190611d10565b9050919050565b600a6020528060005260406000206000915054906101000a900460ff1681565b600061130160096000848152602001908152602001600020546112f360086000868152602001908152602001600020546007600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116dc90919063ffffffff16565b6116f290919063ffffffff16565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138f90611c35565b60405180910390fd5b60011515600a6000600354815260200190815260200160002060009054906101000a900460ff16151514611401576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f890611b75565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ae169a5060066000848152602001908152602001600020546040518263ffffffff1660e01b815260040161146f9190611c55565b600060405180830381600087803b15801561148957600080fd5b505af115801561149d573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637556e8e560066000848152602001908152602001600020546040518263ffffffff1660e01b815260040161150f9190611c55565b602060405180830381600087803b15801561152957600080fd5b505af115801561153d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061156191906117d7565b60086000838152602001908152602001600020819055506001600b600083815260200190815260200160002060006101000a81548160ff021916908315150217905550600360008154809291906115b790611e2b565b919050555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d6020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60106020528060005260406000206000915090505481565b600e5481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b990611c35565b60405180910390fd5b565b600c6020528060005260406000206000915090505481565b600081836116ea9190611d41565b905092915050565b600081836117009190611d10565b905092915050565b60008135905061171781612043565b92915050565b60008151905061172c8161205a565b92915050565b60008135905061174181612071565b92915050565b60008151905061175681612071565b92915050565b60006020828403121561176e57600080fd5b600061177c84828501611708565b91505092915050565b60006020828403121561179757600080fd5b60006117a58482850161171d565b91505092915050565b6000602082840312156117c057600080fd5b60006117ce84828501611732565b91505092915050565b6000602082840312156117e957600080fd5b60006117f784828501611747565b91505092915050565b6000806040838503121561181357600080fd5b600061182185828601611732565b925050602061183285828601611708565b9150509250929050565b60006118488383611a29565b60208301905092915050565b61185d81611d9b565b82525050565b600061186e82611c80565b6118788185611c98565b935061188383611c70565b8060005b838110156118b457815161189b888261183c565b97506118a683611c8b565b925050600181019050611887565b5085935050505092915050565b6118ca81611dad565b82525050565b6118d981611de3565b82525050565b6118e881611e07565b82525050565b60006118fb600e83611ca9565b915061190682611ed2565b602082019050919050565b600061191e600b83611ca9565b915061192982611efb565b602082019050919050565b6000611941601283611ca9565b915061194c82611f24565b602082019050919050565b6000611964600f83611ca9565b915061196f82611f4d565b602082019050919050565b6000611987601283611ca9565b915061199282611f76565b602082019050919050565b60006119aa601183611ca9565b91506119b582611f9f565b602082019050919050565b60006119cd601583611ca9565b91506119d882611fc8565b602082019050919050565b60006119f0601583611ca9565b91506119fb82611ff1565b602082019050919050565b6000611a13600c83611ca9565b9150611a1e8261201a565b602082019050919050565b611a3281611dd9565b82525050565b611a4181611dd9565b82525050565b6000602082019050611a5c6000830184611854565b92915050565b6000606082019050611a776000830186611854565b611a846020830185611854565b611a916040830184611a38565b949350505050565b6000604082019050611aae6000830185611854565b611abb6020830184611a38565b9392505050565b60006020820190508181036000830152611adc8184611863565b905092915050565b6000602082019050611af960008301846118c1565b92915050565b6000602082019050611b1460008301846118d0565b92915050565b6000602082019050611b2f60008301846118df565b92915050565b60006020820190508181036000830152611b4e816118ee565b9050919050565b60006020820190508181036000830152611b6e81611911565b9050919050565b60006020820190508181036000830152611b8e81611934565b9050919050565b60006020820190508181036000830152611bae81611957565b9050919050565b60006020820190508181036000830152611bce8161197a565b9050919050565b60006020820190508181036000830152611bee8161199d565b9050919050565b60006020820190508181036000830152611c0e816119c0565b9050919050565b60006020820190508181036000830152611c2e816119e3565b9050919050565b60006020820190508181036000830152611c4e81611a06565b9050919050565b6000602082019050611c6a6000830184611a38565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611cc582611dd9565b9150611cd083611dd9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d0557611d04611e74565b5b828201905092915050565b6000611d1b82611dd9565b9150611d2683611dd9565b925082611d3657611d35611ea3565b5b828204905092915050565b6000611d4c82611dd9565b9150611d5783611dd9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d9057611d8f611e74565b5b828202905092915050565b6000611da682611db9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611dee82611df5565b9050919050565b6000611e0082611db9565b9050919050565b6000611e1282611e19565b9050919050565b6000611e2482611db9565b9050919050565b6000611e3682611dd9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e6957611e68611e74565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4c6f747465727920697320656e64000000000000000000000000000000000000600082015250565b7f446964206e6f7420627579000000000000000000000000000000000000000000600082015250565b7f526f756e64206973206e6f742073746172740000000000000000000000000000600082015250565b7f596f752061726520636c61696d65640000000000000000000000000000000000600082015250565b7f5468697320726f756e64206e6f742077696e0000000000000000000000000000600082015250565b7f7469636b657420636f756e742069732030000000000000000000000000000000600082015250565b7f5468697320726f756e6420697320737461727465640000000000000000000000600082015250565b7f42616c616e6365206973206e6f7420656e6f7567680000000000000000000000600082015250565b7f4e6f74206f70657261746f720000000000000000000000000000000000000000600082015250565b61204c81611d9b565b811461205757600080fd5b50565b61206381611dad565b811461206e57600080fd5b50565b61207a81611dd9565b811461208557600080fd5b5056fea264697066735822122046e6816577a7c172f86e1955d49c928f58f6b8af32335c0a893a831f7740603b64736f6c63430008040033";

export class LottoCommu__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    lotteryAddress_: string,
    tokenAddress_: string,
    operatorAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LottoCommu> {
    return super.deploy(
      lotteryAddress_,
      tokenAddress_,
      operatorAddress_,
      overrides || {}
    ) as Promise<LottoCommu>;
  }
  getDeployTransaction(
    lotteryAddress_: string,
    tokenAddress_: string,
    operatorAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      lotteryAddress_,
      tokenAddress_,
      operatorAddress_,
      overrides || {}
    );
  }
  attach(address: string): LottoCommu {
    return super.attach(address) as LottoCommu;
  }
  connect(signer: Signer): LottoCommu__factory {
    return super.connect(signer) as LottoCommu__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LottoCommuInterface {
    return new utils.Interface(_abi) as LottoCommuInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LottoCommu {
    return new Contract(address, _abi, signerOrProvider) as LottoCommu;
  }
}
