# protein-and-calorie-balancer

Created using Create React App. There is no backend and everything happens within the app.

Live at https://protein-and-calorie-balancer.web.app/

# Development

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

1. `firebase login`
1. `firebase init`
1. `firebase deploy`
1. Check `https://protein-and-calorie-balancer.web.app`


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Upcoming Features
In the order of priorities:

- rice caloriePer100g (compare with Noom)
- Data tab: Weight per 1g of protein
- custom ingredients (enter protein and calorie per unit (e.g. gram). Select unit (e.g. gram). over 20g of protein per 100g of food is automatically considered meat?)
- handle custom ingredients in import and export
- ability to partially clear out the export-in-localStorage (e.g. remove requirement selection while keeping custom ingredients)
- display version
- share github repo url and github release page

- button to clear saved export in localStorage
- multi objective optimization?
- Display range of run result (i.e. Linear Programming doesn't just return THE best option, but top 10 result -> display it on a table): columns include protein, calorie, ingredient name, amount
- Color-coding for ranged run result: blue shade highlights "better", green shade highlights "closest to goal"
- Column sorting on the ranged run result table
- handle multiple meals at once (e.g. 3-6 meals = 3-6 columns. Allow users to edit table directly - optional requirement)

- hide Optional Requirement by default
- select all meat at once in autocomplete
- Optional requirement: meat vs veggie (%-wise) e.g. 60% meat, 40% veggies
- Optional requirement: among meat (%-wise) e.g. 60% chicken, 40% fish
- Optional requirement: among veggies (%-wise) e.g. 50% onion, 50% carrot
- Goal input: derive min protein and max calorie per meal from daily calorie goal + daily protein goal + number of meals + junk food balance defaulting to 80:20
- CSV export of Data tab
- Image export of Data tab
- CSV export of ranged run result data (goal, requirement inputs / ingredient name, amount, protein, calorie, total calorie)
- Image export of ranged run result data
