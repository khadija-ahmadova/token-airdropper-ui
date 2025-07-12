# Token Airdropper UI

A client-side UI for a smart contract for airdropping tokens.

Smart Contracts can be found here: https://github.com/Cyfrin/TSender

### Getting Started

### Requirements

- [node](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/)
- [git](https://git-scm.com/downloads)
- [MetaMask](https://metamask.io/)

You will need the following environment variable in `.env.local`

- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:` Project ID from [reown cloud](https://cloud.reown.com/sign-in)

### Setup

```
git clone https://github.com/khadija-ahmadova/token-airdropper-ui
cd token-airdropper-ui
pnpm install
pnpm anvil
```
Add anvil chain to MetaMask and import anvil account.

To start the app run
```
pnpm run dev
```
Open http://localhost:3000 in your browser