/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ConnectFourS, ConnectFourSInterface } from "../ConnectFourS";

const _abi = [
  {
    inputs: [],
    name: "GameOver",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSelection",
    type: "error",
  },
  {
    inputs: [],
    name: "NotYourTurn",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "teamOne",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "teamTwo",
        type: "address",
      },
    ],
    name: "GameCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "GameFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "team",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "column",
        type: "uint8",
      },
    ],
    name: "TurnTaken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "opponent",
        type: "address",
      },
    ],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gameId",
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
    name: "getGame",
    outputs: [
      {
        internalType: "address",
        name: "teamOne",
        type: "address",
      },
      {
        internalType: "address",
        name: "teamTwo",
        type: "address",
      },
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "turn",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_gameId",
        type: "uint8",
      },
    ],
    name: "getGameBoard",
    outputs: [
      {
        internalType: "uint8[7][6]",
        name: "",
        type: "uint8[7][6]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_gameId",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "columnIndex",
        type: "uint8",
      },
    ],
    name: "makeMove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ded806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80635e24b0f11461005c57806372fb9703146100715780639b33b42914610084578063a2f77bcc146100ad578063d7c81b551461012b575b600080fd5b61006f61006a366004610c09565b610142565b005b61006f61007f366004610c3c565b610424565b610097610092366004610c6c565b61055a565b6040516100a49190610c87565b60405180910390f35b6100f86100bb366004610ce5565b60016020819052600091825260409091208054918101546002909101546001600160a01b039283169291821691811690600160a01b900460ff1684565b604080516001600160a01b0395861681529385166020850152919093169082015260ff90911660608201526080016100a4565b61013460005481565b6040519081526020016100a4565b60ff82166000818152600160205260409020600201546001600160a01b03161561017f5760405163df469ccb60e01b815260040160405180910390fd5b8160068160ff1611156101a557604051631efccef760e11b815260040160405180910390fd5b60ff84166000908152600160208190526040822060028101549092918291600160a01b900416156101d75760016101da565b60025b6002840154909150600160a01b9004600116156102015782546001600160a01b0316610210565b60018301546001600160a01b03165b6001600160a01b0316336001600160a01b03161461024157604051631cc191eb60e31b815260040160405180910390fd5b60005b60078160ff1610156102ec5760058160ff16111561027557604051631efccef760e11b815260040160405180910390fd5b6000846003018260ff166006811061028f5761028f610cfe565b018860ff16600781106102a4576102a4610cfe565b602081049091015460ff601f9092166101000a900416905060008190036102d957816102cf81610d2a565b92509350506102ec565b50806102e481610d2a565b915050610244565b5080836003018360ff166006811061030657610306610cfe565b018760ff166007811061031b5761031b610cfe565b60208104909101805460ff938416601f9093166101000a9283029284021916919091179055600284018054600160a01b900490911690601461035c83610d2a565b82546101009290920a60ff818102199093169183160217909155604080513381528983166020820152918a1692507fa6f41f711ea470b4b237d1b3e43b201e53517677308ae067a273fb1948ddbf0c910160405180910390a26103c1878784846105f9565b1561041b576002830180546001600160a01b031916339081179091556040805160ff8a16815260208101929092527fb7f35e624e036288272fbf3342c09219261ff29fdddd826989b289134e9ae535910160405180910390a15b50505050505050565b806001600160a01b038116330361043a57600080fd5b610442610aa7565b6040805160a0810182523381526001600160a01b038581166020808401918252600084860181815260608601828152608087018981528354845260019485905297909220865181549087166001600160a01b03199182161782559451938101805494871694909516939093179093559151600282018054935160ff16600160a01b026001600160a81b03199094169190941617919091179091559151909182916104f29060038301906006610ad4565b5050600054604080519182523360208301526001600160a01b038716908201527f8946648bc1dbc670d3f07e2c4de91731227b6d4ccc53b8ab1e951e84d960577e915060600160405180910390a160008054908061054f83610d49565b919050555050505050565b610562610aa7565b60ff8216600090815260016020526040808220815160c081019092529091600390910190600690835b828210156105ee576040805160e08101918290529085840190600790826000855b825461010083900a900460ff168152602060019283018181049485019490930390920291018084116105ac57905050505050508152602001906001019061058b565b505050509050919050565b60008061060886868686610699565b90508060040361061c576001915050610691565b600061062a87878787610759565b90508060040361063f57600192505050610691565b600061064d88888888610804565b9050806004036106635760019350505050610691565b60006106718989898961090a565b905080600403610688576001945050505050610691565b60009450505050505b949350505050565b60006001816106a88683610d62565b90505b60078160ff1610156106f1576106c387868387610a39565b156106da57816106d281610d49565b9250506106df565b6106f1565b806106e981610d2a565b9150506106ab565b5060ff851615610750576000610708600187610d81565b90505b61071787868387610a39565b1561072e578161072681610d49565b925050610733565b61074e565b60ff81161561074e578061074681610d9a565b91505061070b565b505b95945050505050565b60006001816107688583610d62565b90505b60068160ff1610156107b15761078387828887610a39565b1561079a578161079281610d49565b92505061079f565b6107b1565b806107a981610d2a565b91505061076b565b5060ff8416156107505760006107c8600186610d81565b90505b6107d787828887610a39565b1561072e57816107e681610d49565b92505060ff81161561074e57806107fc81610d9a565b9150506107cb565b60006001816108138583610d62565b90505b610821856006610d81565b60ff168160ff1610156108685761083a87828387610a39565b15610851578161084981610d49565b925050610856565b610868565b8061086081610d2a565b915050610816565b5060ff84161580159061087d575060ff851615155b1561075057600061088f600186610d81565b9050600061089e600188610d81565b90505b6108ad88838388610a39565b156108c457826108bc81610d49565b9350506108c9565b6108fe565b60ff821615806108da575060ff8116155b6108fe57816108e881610d9a565b92505080806108f690610d9a565b9150506108a1565b50509050949350505050565b6000600160ff8416156109a5576000610924600186610d81565b90506000610933876001610d62565b90505b60078160ff1610156109a25761094e88838388610a39565b15610965578261095d81610d49565b93505061096a565b6109a2565b60ff8216158061097e575060068160ff1610155b6109a2578161098c81610d9a565b925050808061099a90610d2a565b915050610936565b50505b60ff8516156107505760006109bb856001610d62565b905060006109ca600188610d81565b90505b60068260ff161080156109de575060015b156108fe576109ef88838388610a39565b156108c457826109fe81610d49565b93505060068260ff16101580610a15575060ff8116155b6108fe5781610a2381610d2a565b9250508080610a3190610d9a565b9150506109cd565b600080600160008760ff16815260200190815260200160002060030190508260ff16818660ff1660068110610a7057610a70610cfe565b018560ff1660078110610a8557610a85610cfe565b602081049091015460ff601f9092166101000a90041614915050949350505050565b6040518060c001604052806006905b610abe610b1e565b815260200190600190039081610ab65790505090565b8260068101928215610b0e579160200282015b82811115610b0e578251610afe9083906007610b3c565b5091602001919060010190610ae7565b50610b1a929150610bcb565b5090565b6040518060e001604052806007906020820280368337509192915050565b600183019183908215610bbf5791602002820160005b83821115610b9057835183826101000a81548160ff021916908360ff1602179055509260200192600101602081600001049283019260010302610b52565b8015610bbd5782816101000a81549060ff0219169055600101602081600001049283019260010302610b90565b505b50610b1a929150610bdf565b80821115610b1a5760008155600101610bcb565b80821115610b1a5760008155600101610bcb565b803560ff81168114610c0457600080fd5b919050565b60008060408385031215610c1c57600080fd5b610c2583610bf3565b9150610c3360208401610bf3565b90509250929050565b600060208284031215610c4e57600080fd5b81356001600160a01b0381168114610c6557600080fd5b9392505050565b600060208284031215610c7e57600080fd5b610c6582610bf3565b610540810181836000805b6006811015610cdb57825184835b6007811015610cc257825160ff16825260209283019290910190600101610ca0565b50505060e0939093019260209290920191600101610c92565b5050505092915050565b600060208284031215610cf757600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff8103610d4057610d40610d14565b60010192915050565b600060018201610d5b57610d5b610d14565b5060010190565b60ff8181168382160190811115610d7b57610d7b610d14565b92915050565b60ff8281168282160390811115610d7b57610d7b610d14565b600060ff821680610dad57610dad610d14565b600019019291505056fea2646970667358221220b04c35d8766cdb4a6a01f07e2a84323911f42f6d81da5385c7da69da194163c064736f6c63430008110033";

type ConnectFourSConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectFourSConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectFourS__factory extends ContractFactory {
  constructor(...args: ConnectFourSConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConnectFourS> {
    return super.deploy(overrides || {}) as Promise<ConnectFourS>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ConnectFourS {
    return super.attach(address) as ConnectFourS;
  }
  override connect(signer: Signer): ConnectFourS__factory {
    return super.connect(signer) as ConnectFourS__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectFourSInterface {
    return new utils.Interface(_abi) as ConnectFourSInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectFourS {
    return new Contract(address, _abi, signerOrProvider) as ConnectFourS;
  }
}