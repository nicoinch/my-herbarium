# 🪴 MyHerbarium

The My Herbarium application will allow users to monitor their plants at home via dedicated IOT sensors. Users will be able to add and remove plants, associate temperature and humidity sensors, and adjust each plant’s light and humidity levels.

## Install dependencies

```
npm install
```

## Running tasks

### Run tests

Run unit tests:

```
npx nx run my-herbarium:test
```

### Run Storybook

Start Storybook with:

```
npx nx run my-herbarium:storybook
```

Open your browser and navigate to http://localhost:4400/.

### Run dev server

Start local developement server with:

```
npx nx run my-herbarium:serve --configuration=development
```

Open your browser and navigate to http://localhost:4200/.

## Deploy on Chromatic

You need the Chromatic project token to deploy Storybook.

```
npx chromatic --project-token=XXXXX
```
