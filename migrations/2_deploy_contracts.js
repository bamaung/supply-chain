// migrating the appropriate contracts
var Roles = artifacts.require("./Roles.sol");
var FarmerRole = artifacts.require("./FarmerRole.sol");
var DistributorRole = artifacts.require("./DistributorRole.sol");
var RetailerRole = artifacts.require("./RetailerRole.sol");
var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");
var Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {
  deployer.deploy(Roles);
  deployer.link(Roles, FarmerRole);
  deployer.link(Roles, DistributorRole);
  deployer.link(Roles, RetailerRole);
  deployer.link(Roles, ConsumerRole);
  deployer.deploy(FarmerRole);
  deployer.deploy(DistributorRole);
  deployer.deploy(RetailerRole);
  deployer.deploy(ConsumerRole);
  deployer.deploy(Ownable);
  deployer.deploy(SupplyChain);
};
