//Lecture des informations du smartcontrat
const Myfile = artifacts.require("MyTestContract");

module.exports = function (deployer) {
//Déploiement du smart contrat: truffle utilise un objet "deployer"
  deployer.deploy(Myfile);
};
