async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  const candidateNames = ["Mino","Bind","Reshma","vISHNu","Amja"];

  const partyNames = ["MNS","MNS","BJP","ShivSena","AAP"];

  const cities = ["Chni","jhari","Up","TN","MNS"];

  const Voting_ = await Voting.deploy(candidateNames, partyNames, cities, 120);
  console.log("Contract address:", Voting_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
