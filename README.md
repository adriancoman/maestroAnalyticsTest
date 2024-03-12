# Analytics testing
This is the sample repo for a medium article I'm writing about how to use UI automation frameworks to validate that your analytics data is correct.
The gist of it is that since you already have UI automation tests running, you might as well use them to validate that the analytics data is correct and that it's not being affected by changes in your app.

This is structured to show how it would look like in an Android project, but it would be similar no matter the platform.
You can find the UI framework in the `maestro` folder and the sample app in `app/src/main/java/com/lotusss/analytics`.

## Prerequisites
I'm using Maestro as the UI automation framework for this project but feel free to use any other framework you want. You can find more information about Maestro in the following link: https://maestro.mobile.dev/

## Getting Started
First, you'll need to install the Maestro CLI. You can do this going to the following link and following the instructions: https://maestro.mobile.dev/getting-started/installing-maestro

In order to run the sample project, from the root of the project, run the following command:
```
maestro test maestro/flow.yaml
```

In the `fetchAnalyticsData.js` file you'll want to change the `expectedAnalyticsData` object to match the expected analytics data for the flow you're testing and change the url of your API service.
