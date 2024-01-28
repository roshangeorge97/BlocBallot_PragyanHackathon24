# BlocBallot: Blockchain-Powered Voting Platform

## Introduction

BlocBallot is a revolutionary voting platform that leverages the power of blockchain technology and AI to ensure secure and private elections. Built on top of the Cosmos blockchain using the CosmWasm smart contract framework, BlocBallot aims to eliminate voter manipulations and enhance the integrity of the electoral process.

## Problem Statement

Traditional voting systems often face challenges related to security, transparency, and privacy. BlocBallot addresses these issues by employing blockchain technology, providing a decentralized and tamper-proof infrastructure for conducting elections. This ensures that votes are securely recorded, and the results are transparent and verifiable.

## Features

- **Blockchain Security**: Utilizes the security features of the Cosmos blockchain to prevent tampering and ensure the integrity of the voting process, with AI biometric Auth.
- **Privacy Protection**: Employs cryptographic and AI techniques to safeguard voter privacy, making it impossible to trace individual votes back to specific users.
- **Transparency**: All transactions and voting records are stored on the blockchain, providing a transparent and auditable history of the election.
- **User-Friendly Interface**: Built with ReactJS to offer an intuitive and user-friendly voting experience.

## Links

- [Repo](https://github.com/roshangeorge97/BlocBallot_PragyanHackathon24/)

## Screenshots

![](/screenshots/a1.png)

![](/screenshots/a2.png)

![](/screenshots/a3.png)

![](/screenshots/a4.png)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
* metamask extension
* Configured cosVm in metamask, if not yet check out: https://doc.cosvm.net/welcome-to-cosvm/user-guide/metamask-configuration
* python
* Ganache - For Local Testing

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/roshangeorge97/BlocBallot_PragyanHackathon24
   ```
2. cd into repo
   ```sh
   cd BlocBallot_PragyanHackathon24
   ```
#### Now we have three modules, lets start each step by step:

3. AdminPanel - The Dashboard of Government Admins
   ```sh
   cd AdminPanel
   npm i
   npm run dev
   ```
   
4. Next you need to Fingerprint scanner API in python - To scan voters identity
   #### 
   ```sh
   pip install requirements.txt
   python app.py
   ```
   
5. Download some bmp fingerprint images from here: https://fvs.sourceforge.net/fingerprint_bitmaps.zip
   
6. Finally VotingSystem - Where Voters cast votes
   ```sh
   cd VotingSystem
   npm i
   npm run dev
   ```

<!-- USAGE EXAMPLES -->
## Usage

- At First, Create Election, Register the Candidates and Add voters from Admin.
- Run Python API
- Login as Voter, by uploading fingerprint images(download link given above), and cast the votes!

## Built With

- JavaScript
- NPM
- CosVM
- Solidity
- TailwindCSS
- Python
- Flask

## Future Updates

- [ ] Integrating with Truffle
- [ ] Uploading Images of Candidates on IPFS

## Author

- [Profile](https://github.com/roshangeorge97 "Roshan George")
- [Email](mailto:roshangeorge2003@gmail.com?subject=Hi "Hi!")
- [Website](https://roshangeorge97.github.io/portfolio/)

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!
