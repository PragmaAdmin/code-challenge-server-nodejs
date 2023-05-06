# Pragmateam code challenge server (NodeJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm start` - Start the application (Port 8081)


## Highlights of improvements

- Instead of looping through data in the frontend side, have used that data in the backend part to fetch the data from API. So instead of multiple calls, we will get data in a single call.
- Data returned has all the values of the temperature and the beer now.
- Frontend is focused now more on rendering rather than on logical aspect.

## What would you improve next if you had more time?

- I could have refactored way more on the backend side. The status logic could have been added in backend side.
- I could have added end to end testing as well.
- Test cases not added in backend

## Questions you would ask and your own answers and assumptions

- Instead of using setInterval, web sockets could have been used? Probably

## Explanations of decisions or the approach you took

- In order to make frontend light, I decided to remove multiple calls. Instead I moved that logic to backend so that only one API is called at a time.

## Any other notes you feel relevant to evaluate your test improvements
