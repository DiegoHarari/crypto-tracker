# crypto-tracker
Crypto Price Tracker (React Native)
# Crypto Price Tracker (React Native)

Mini React Native (Expo) app showing live USD prices for Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and Chainlink (LINK).[web:10][web:13]

The app uses:

- **React Native + Expo** for the mobile UI.
- **web3.js** wired in via `src/web3/web3Client.js` as the primary Web3 library.[web:12]
- **CoinGecko simple price API** to fetch token prices in USD.[web:10]

## Features

- Live prices for BTC, ETH, SOL, LINK in USD.
- Auto-refresh every 15 seconds plus pull-to-refresh.
- Simple card-based UI suitable for extension into a full Web3 dApp.

## Getting started

1. Install dependencies:


2. Start the Expo dev server:


3. Run on a device or simulator using the Expo Go app or platform runtimes.

## Project structure

- `App.js`: Entry point and app shell.
- `src/screens/HomeScreen.js`: Main screen listing token prices.
- `src/components/PriceCard.js`: Single token price card component.
- `src/hooks/useCryptoPrices.js`: Price fetching hook with auto-refresh.
- `src/api/cryptoApi.js`: CoinGecko API client for prices.[web:10]
- `src/web3/web3Client.js`: Reusable `web3.js` client (HTTP provider).

## Screenshots

Screenshots are stored under `assets/screenshots`:

- `home-light.png`: Home screen in a light-style simulator.
- `home-dark.png`: Home screen in dark simulator.

Capture screenshots from your emulator or device and overwrite the placeholder files.
