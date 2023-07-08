import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import 'hardhat-deploy';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  try {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;
    ;
    await deploy('ConnectFour', {
      from: deployer,
      log: true,
    });

  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
};

func.tags = ['ConnectFour_Single'];
export default func;