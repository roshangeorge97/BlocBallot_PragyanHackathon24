import React, { useContext, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../constants/constants.js";
import * as Voting from "../../../Contracts/artifacts/contracts/Voting.sol/Voting.json";

const ContractContext = React.createContext();

export default function useContract() {
  return useContext(ContractContext);
}

const contractAddress="0xe9146BFa384289A7929f1CD17079c19ed5099e71";
export function ContractProvider({ children }) {
  const [Candidates, setCandidates] = useState([]);
  const [Error, setError] = useState([]);

  // Fetching Candidate Information for Contract
  async function fetchCandidateList() {
    console.log("Fetching Candidate List");
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        Voting.abi,
        signer 
      );
      const candidatesList = await contract.getAllVotesOfCandidates();
      console.log(candidatesList);
      const formattedCandidates = candidatesList.map((candidate, index) => {
        return {
          index: index,
          name: candidate.name,
          city: candidate.city,
          party: candidate.partyName,
          voteCount: candidate.voteCount.toNumber(),
        };
      });
      console.log("Formatted List:", formattedCandidates);
      setCandidates(formattedCandidates);
      console.log("Type of Candidates:", typeof formattedCandidates);
      console.log("Candidates:", Candidates);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  const value = {
    Candidates,
    fetchCandidateList,
  };

  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
}
