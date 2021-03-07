/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import { RollupCore } from './RollupCore'

export class RollupCoreFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<RollupCore> {
    return super.deploy(overrides || {}) as Promise<RollupCore>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): RollupCore {
    return super.attach(address) as RollupCore
  }
  connect(signer: Signer): RollupCoreFactory {
    return super.connect(signer) as RollupCoreFactory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupCore {
    return new Contract(address, _abi, signerOrProvider) as RollupCore
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_stakerMap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'latestStakedNode',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountStaked',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'currentChallenge',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isStaked',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'amountStaked',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'currentChallenge',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'firstUnresolvedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'getNode',
    outputs: [
      {
        internalType: 'contract INode',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'stakerNum',
        type: 'uint256',
      },
    ],
    name: 'getStakerAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'isStaked',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastStakeBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestConfirmed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestNodeCreated',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'latestStakedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakerCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'withdrawableFunds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'zombieNum',
        type: 'uint256',
      },
    ],
    name: 'zombieAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'zombieCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'zombieNum',
        type: 'uint256',
      },
    ],
    name: 'zombieLatestStakedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506104b7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e05760003560e01c80637ba9534a116100875780637ba9534a146102095780638640ce5f14610211578063d01e660214610219578063d735e21d14610236578063dff697871461023e578063e8bd492214610246578063ef40a670146102a2578063f33e1fac146102c8576100e0565b80632f30cabd146100e55780633e96576e1461011d5780634f0f4aa9146101435780636177fd181461017c57806362a82d7d146101b657806363721d6b146101d357806365f7f80d146101db57806369fd251c146101e3575b600080fd5b61010b600480360360208110156100fb57600080fd5b50356001600160a01b03166102e5565b60408051918252519081900360200190f35b61010b6004803603602081101561013357600080fd5b50356001600160a01b0316610300565b6101606004803603602081101561015957600080fd5b503561031e565b604080516001600160a01b039092168252519081900360200190f35b6101a26004803603602081101561019257600080fd5b50356001600160a01b0316610339565b604080519115158252519081900360200190f35b610160600480360360208110156101cc57600080fd5b5035610361565b61010b61038b565b61010b610391565b610160600480360360208110156101f957600080fd5b50356001600160a01b0316610397565b61010b6103b8565b61010b6103be565b6101606004803603602081101561022f57600080fd5b50356103c4565b61010b6103f3565b61010b6103f9565b61026c6004803603602081101561025c57600080fd5b50356001600160a01b03166103ff565b604080519586526020860194909452848401929092526001600160a01b0316606084015215156080830152519081900360a00190f35b61010b600480360360208110156102b857600080fd5b50356001600160a01b031661043b565b61010b600480360360208110156102de57600080fd5b5035610459565b6001600160a01b031660009081526008602052604090205490565b6001600160a01b031660009081526006602052604090206001015490565b6000908152600460205260409020546001600160a01b031690565b6001600160a01b0316600090815260066020526040902060030154600160a01b900460ff1690565b60006005828154811061037057fe5b6000918252602090912001546001600160a01b031692915050565b60075490565b60005490565b6001600160a01b039081166000908152600660205260409020600301541690565b60025490565b60035490565b6000600782815481106103d357fe5b60009182526020909120600290910201546001600160a01b031692915050565b60015490565b60055490565b6006602052600090815260409020805460018201546002830154600390930154919290916001600160a01b03811690600160a01b900460ff1685565b6001600160a01b031660009081526006602052604090206002015490565b60006007828154811061046857fe5b906000526020600020906002020160010154905091905056fea2646970667358221220a62ef269e4c42e0a7fcf1ef4b3a25108328f3b71026773ed4c2767e95757704f64736f6c634300060b0033'
