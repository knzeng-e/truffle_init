const Migrations = artifacts.require("Migrations");
const Myfile = artifacts.require("MyTestContract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Myfile);
};
