/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ConnectFourSInterface extends utils.Interface {
  functions: {
    "challenge(address)": FunctionFragment;
    "endSeason()": FunctionFragment;
    "forfeit(uint256)": FunctionFragment;
    "gameId()": FunctionFragment;
    "getGame(uint256)": FunctionFragment;
    "getGameBoard(uint8)": FunctionFragment;
    "makeMove(uint8,uint8)": FunctionFragment;
    "seasonId()": FunctionFragment;
    "seasons(uint256)": FunctionFragment;
    "startSeason()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "challenge"
      | "endSeason"
      | "forfeit"
      | "gameId"
      | "getGame"
      | "getGameBoard"
      | "makeMove"
      | "seasonId"
      | "seasons"
      | "startSeason"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "challenge",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "endSeason", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "forfeit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "gameId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getGame",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameBoard",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "makeMove",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "seasonId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "seasons",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startSeason",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endSeason", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forfeit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gameId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGameBoard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeMove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seasonId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seasons", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startSeason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "GameCreated(uint256,address,address)": EventFragment;
    "GameFinished(uint256,address)": EventFragment;
    "SeasonEnded(uint256)": EventFragment;
    "SeasonStarted(uint256)": EventFragment;
    "TurnTaken(uint256,address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GameCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SeasonEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SeasonStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TurnTaken"): EventFragment;
}

export interface GameCreatedEventObject {
  gameId: BigNumber;
  teamOne: string;
  teamTwo: string;
}
export type GameCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  GameCreatedEventObject
>;

export type GameCreatedEventFilter = TypedEventFilter<GameCreatedEvent>;

export interface GameFinishedEventObject {
  gameId: BigNumber;
  winner: string;
}
export type GameFinishedEvent = TypedEvent<
  [BigNumber, string],
  GameFinishedEventObject
>;

export type GameFinishedEventFilter = TypedEventFilter<GameFinishedEvent>;

export interface SeasonEndedEventObject {
  seasonId: BigNumber;
}
export type SeasonEndedEvent = TypedEvent<[BigNumber], SeasonEndedEventObject>;

export type SeasonEndedEventFilter = TypedEventFilter<SeasonEndedEvent>;

export interface SeasonStartedEventObject {
  seasonId: BigNumber;
}
export type SeasonStartedEvent = TypedEvent<
  [BigNumber],
  SeasonStartedEventObject
>;

export type SeasonStartedEventFilter = TypedEventFilter<SeasonStartedEvent>;

export interface TurnTakenEventObject {
  gameId: BigNumber;
  team: string;
  column: number;
}
export type TurnTakenEvent = TypedEvent<
  [BigNumber, string, number],
  TurnTakenEventObject
>;

export type TurnTakenEventFilter = TypedEventFilter<TurnTakenEvent>;

export interface ConnectFourS extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnectFourSInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    challenge(
      opponent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    forfeit(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gameId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGame(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number] & {
        teamOne: string;
        teamTwo: string;
        winner: string;
        turn: number;
      }
    >;

    getGameBoard(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[][]]>;

    makeMove(
      _gameId: PromiseOrValue<BigNumberish>,
      columnIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    seasonId(overrides?: CallOverrides): Promise<[BigNumber]>;

    seasons(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
        isActive: boolean;
      }
    >;

    startSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  challenge(
    opponent: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endSeason(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  forfeit(
    _gameId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gameId(overrides?: CallOverrides): Promise<BigNumber>;

  getGame(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number] & {
      teamOne: string;
      teamTwo: string;
      winner: string;
      turn: number;
    }
  >;

  getGameBoard(
    _gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[][]>;

  makeMove(
    _gameId: PromiseOrValue<BigNumberish>,
    columnIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  seasonId(overrides?: CallOverrides): Promise<BigNumber>;

  seasons(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, boolean] & {
      startTimestamp: BigNumber;
      endTimestamp: BigNumber;
      isActive: boolean;
    }
  >;

  startSeason(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    challenge(
      opponent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    endSeason(overrides?: CallOverrides): Promise<void>;

    forfeit(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    gameId(overrides?: CallOverrides): Promise<BigNumber>;

    getGame(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number] & {
        teamOne: string;
        teamTwo: string;
        winner: string;
        turn: number;
      }
    >;

    getGameBoard(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[][]>;

    makeMove(
      _gameId: PromiseOrValue<BigNumberish>,
      columnIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    seasonId(overrides?: CallOverrides): Promise<BigNumber>;

    seasons(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
        isActive: boolean;
      }
    >;

    startSeason(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GameCreated(uint256,address,address)"(
      gameId?: null,
      teamOne?: null,
      teamTwo?: null
    ): GameCreatedEventFilter;
    GameCreated(
      gameId?: null,
      teamOne?: null,
      teamTwo?: null
    ): GameCreatedEventFilter;

    "GameFinished(uint256,address)"(
      gameId?: null,
      winner?: null
    ): GameFinishedEventFilter;
    GameFinished(gameId?: null, winner?: null): GameFinishedEventFilter;

    "SeasonEnded(uint256)"(seasonId?: null): SeasonEndedEventFilter;
    SeasonEnded(seasonId?: null): SeasonEndedEventFilter;

    "SeasonStarted(uint256)"(seasonId?: null): SeasonStartedEventFilter;
    SeasonStarted(seasonId?: null): SeasonStartedEventFilter;

    "TurnTaken(uint256,address,uint8)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      team?: null,
      column?: null
    ): TurnTakenEventFilter;
    TurnTaken(
      gameId?: PromiseOrValue<BigNumberish> | null,
      team?: null,
      column?: null
    ): TurnTakenEventFilter;
  };

  estimateGas: {
    challenge(
      opponent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    forfeit(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gameId(overrides?: CallOverrides): Promise<BigNumber>;

    getGame(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameBoard(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makeMove(
      _gameId: PromiseOrValue<BigNumberish>,
      columnIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    seasonId(overrides?: CallOverrides): Promise<BigNumber>;

    seasons(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    challenge(
      opponent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    forfeit(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gameId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGame(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGameBoard(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makeMove(
      _gameId: PromiseOrValue<BigNumberish>,
      columnIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    seasonId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seasons(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
