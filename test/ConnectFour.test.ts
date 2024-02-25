import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

import { ethers } from "hardhat"
import { expect } from "chai"
import { BigNumber } from "ethers"
import { ConnectFourS__factory, ConnectFourS } from "../typechain"
describe("ConnectFour", () => {
  let [account1, account2, account3]: SignerWithAddress[] = []

  let [
    gameOneContractSignerOne,
    gameOneContractSignerTwo,
    gameOneContractSignerThree,
  ]: ConnectFourS[] = []

  beforeEach(async () => {
    ;[account1, account2, account3] = await ethers.getSigners()

    // Deploys and initializes game with teams
    const connectFourContract = await new ConnectFourS__factory(account1).deploy()

    ;[gameOneContractSignerOne, gameOneContractSignerTwo, gameOneContractSignerThree] = [
      connectFourContract.connect(account1),
      connectFourContract.connect(account2),
      connectFourContract.connect(account3),
    ]
  })

  describe("Setup | Challenge", async () => {
    it("Should create new season", async () => {
      await expect(gameOneContractSignerOne.startSeason())
        .to.emit(gameOneContractSignerOne, "SeasonStarted")
        .withArgs(1)
    })
    it("Should create end season", async () => {
      await gameOneContractSignerOne.startSeason()
      await expect(gameOneContractSignerOne.endSeason())
      .to.emit(gameOneContractSignerOne, "SeasonEnded")
      .withArgs(1)
    })
    it("Should create game", async () => {
      await gameOneContractSignerOne.startSeason()
      await expect(gameOneContractSignerOne.challenge(account2.address))
        .to.emit(gameOneContractSignerOne, "GameCreated")
        .withArgs(1, account1.address, account2.address)
    })
  })
  describe("Game Play | Success", () => {
    let connectFourGameOneId: BigNumber = BigNumber.from(0)
    beforeEach(async () => {
      await gameOneContractSignerOne.startSeason()
      const response = await (await gameOneContractSignerOne.challenge(account2.address)).wait()
      ;[connectFourGameOneId] = response.events![0].args!
    })

    it("Should play first move", async () => {
      await expect(gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0))
        .to.emit(gameOneContractSignerTwo, "TurnTaken")
        .withArgs(connectFourGameOneId, account2.address, 0)
    })

    it("Should end with horizontal win; team two; short length game", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await expect(gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3))
        .to.emit(gameOneContractSignerTwo, "GameFinished")
        .withArgs(connectFourGameOneId, account2.address)
    })

    it("Should end with horizontal win; team two; testing failure case", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)
      await expect(gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3))
        .to.emit(gameOneContractSignerTwo, "GameFinished")
        .withArgs(connectFourGameOneId, account2.address)
    })

    it("Should end with horizontal win; team two; testing failure case; new column", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 6)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)
      await expect(gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4))
        .to.emit(gameOneContractSignerTwo, "GameFinished")
        .withArgs(connectFourGameOneId, account2.address)
    })

    it("Should end with horizontal win; team two; long length game", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await expect(gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3))
        .to.emit(gameOneContractSignerTwo, "GameFinished")
        .withArgs(connectFourGameOneId, account2.address)
    })

    it("Should end with horizontal win; team two; long length game; new column", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 6)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 6)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 6)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 6)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await expect(gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4))
        .to.emit(gameOneContractSignerTwo, "GameFinished")
        .withArgs(connectFourGameOneId, account2.address)
    })

    it("Should end with veritical win; team one; med length game", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await expect(gameOneContractSignerOne.makeMove(connectFourGameOneId, 4))
        .to.emit(gameOneContractSignerOne, "GameFinished")
        .withArgs(connectFourGameOneId, account1.address)
    })

    it("Should end with veritical win; team one; med length game: new column", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 6)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 6)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 6)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await expect(gameOneContractSignerOne.makeMove(connectFourGameOneId, 5))
        .to.emit(gameOneContractSignerOne, "GameFinished")
        .withArgs(connectFourGameOneId, account1.address)
    })

    it("Should end with forward angle win; team two; short length game", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await expect(gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4))
        .to.emit(gameOneContractSignerTwo, "GameFinished")
        .withArgs(connectFourGameOneId, account2.address)
    })

    it("Should end with forward angle win; team two; short length game; new column", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 6)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 6)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 6)

      await expect(gameOneContractSignerTwo.makeMove(connectFourGameOneId, 6))
        .to.emit(gameOneContractSignerTwo, "GameFinished")
        .withArgs(connectFourGameOneId, account2.address)
    })

    it("Should end with backward angle win; team one; short length game", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await expect(gameOneContractSignerOne.makeMove(connectFourGameOneId, 1))
        .to.emit(gameOneContractSignerOne, "GameFinished")
        .withArgs(connectFourGameOneId, account1.address)
    })

    it("Should end with backward angle win; team one; short length game", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 6)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 4)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 5)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 4)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await expect(gameOneContractSignerOne.makeMove(connectFourGameOneId, 3))
        .to.emit(gameOneContractSignerOne, "GameFinished")
        .withArgs(connectFourGameOneId, account1.address)
    })

    it("Should end with backward angle win; team one; beta testing failure", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 3)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 1)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 2)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 3)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 2)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 5)
      await expect(gameOneContractSignerOne.makeMove(connectFourGameOneId, 0))
        .to.emit(gameOneContractSignerOne, "GameFinished")
        .withArgs(connectFourGameOneId, account1.address)
    })
  })
  describe("Game Play | Revert", () => {
    let connectFourGameOneId: BigNumber = BigNumber.from(0)
    beforeEach(async () => {
      await gameOneContractSignerOne.startSeason()
      const response = await (await gameOneContractSignerOne.challenge(account2.address)).wait()
      ;[connectFourGameOneId] = response.events![0].args!
    })

    it("Should prevent team one from going first", async () => {
      await expect(
        gameOneContractSignerOne.makeMove(connectFourGameOneId, 1)
      ).to.revertedWithCustomError(gameOneContractSignerOne, "NotYourTurn")
    })

    it("Should prevent random address from playing", async () => {
      await expect(
        gameOneContractSignerThree.makeMove(connectFourGameOneId, 1)
      ).to.revertedWithCustomError(gameOneContractSignerThree, "NotYourTurn")
    })
    it("Should revert if invalid column", async () => {
      await expect(
        gameOneContractSignerTwo.makeMove(connectFourGameOneId, 7)
      ).to.revertedWithCustomError(gameOneContractSignerTwo, "InvalidSelection")
    })
    it("Should revert if row is exceeded", async () => {
      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)

      await gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      await gameOneContractSignerOne.makeMove(connectFourGameOneId, 0)
      await expect(
        gameOneContractSignerTwo.makeMove(connectFourGameOneId, 0)
      ).to.revertedWithCustomError(gameOneContractSignerTwo, "InvalidSelection")
    })
  })
})
