This project captures a snapshot of the current state and presents the information clearly and concisely to the technicians so they can receive race data.

The project will be divided into three stages:
1/ Retrieve the information using `fetch` and an `async` function.
2/ Process the data to make it clear and readable.
3/ Display the processed data in the main module.

Workflow:

`fetch(link)` -> data -> JSON -> read and extract -> pass logic function => `console.log` in main

Structure:

- project
  -- main
  -- data
  -- utils

functions in utils.js:

data => async => retrieve data from the JSON file
carInRace => async => count the number of cars currently racing
carWaiting => async => return a list of car objects
nextCar => async => return the next car to enter the garage (the first one on the list; no specific logic)
carDone => async => the number of cars that have been checked
findNameByCarID => async => find a car by its ID; error if not found

functions in data.js:

catchData => async => retrieve data and write it to a JSON file
readFile => async => retrieve data from the JSON file
