# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email richard.stevens@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
npm install

## Start development server
npm run dev

## Run tests
npm run test

# Design Decisions
1. I upgraded all the dependencies to be Node.js v20 compatible
2. I use React `SWR` library for data fetching.
3. `/src/client/components` contains all the react components
4. `/srv/client/lib/` contains reusable libraries for frontend
5. `/src/client/model/` contains model for different data structures.
6. I created `/srv/client/lib/useSWRWithFetcher.js` library to reuse code for retrieving data from server side easily.