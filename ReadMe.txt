
# React Native (Codevolution)

## Lec 1 - Introduction (4:08)

Q. What is React Native?
# React Native is an open-source framework for building native Android and iOS applications using React.

# JavaScript to access plateform-specific APIs (such as camera and push notifications)

# React components to define the appearance and behavior of our user interface.

# React itself is a library designed for building user interface

# `react-dom` for web apps and `react-native` for native mobile apps.

Q. Why to learn React Native?
# Traditionally developing an IOS app requires knowledge of `Swift` or `Objective C` whereas building an Android app requires Java or Kotlin expertise. Considering the global distribution of users with approximately 31% on IOS and 68% on Android, we would typically need to develop two separate apps using different technologies to cater to everyone. However, with React Native, we can create an app that works seamlessly on both plateforms. That's why React Native is in high demand in the job market.

# Some poular comapanies using React Native are :- Microsoft, Meta, Tesla, Pinterest, Discord and many more.

# Prerequisites - JavaScript, React fundamentals

## Lec 2 - Expo vs React Native (2:45)

# Expo vs React Native :- while both frameworks are allowed for the development of Android and iOS apps they differ significantly in terms of maintenance ease of setup and platform compatibility.

# React Native (RN) is an open-source framework maintained by Meta (Facebook), designed for building cross-platform apps.

# Expo is an open-source framework maintained by Expo itself, designed for building cross-platform apps.

# Unlike plain RN, which can be challenging and time-consuming to set up, Expo provides a streamlined experience. Expo has a suite of tools and services built around React Native, which greatly simplifies the development process.

# If it helps Expo is to React Native how Nextjs is to React.

# Note - With plain Reacgt Native, we cannot build iOS apps on a windows or linux machine. native iOS apps can only be built on a macOS machine.

# With Expo, we can develop our app on windows or linux and run that app on a physical iPhone.

# Expo 

# Expo has evolved significantly over the years and now supports nearly all the features necessary for building mobile apps.

# In the event that we require access to native Android or iOS code, Expo allows us to eject our app and work with a plain React Native codebase. This flexibility ensures that we have the option to leverage the additional functionalities provided by Expo while still retaining the ability to tap into native code when necessary.

# Expo is the default choice for setting up development environment. This endorsement by the React Native community highlights Expo as the optimal starting point for beginners. It provides a smoother onboarding experience and robust set of tools to kick-start our React native journey.

## Lec 3 - Hello World (5:51)

# Let us create our first React Native app.

# Technically it will be Expo project, creating a new `Expo` project is as simple as running a single line of code using below command :-
`npx create-expo-app@latest project-name`

# Folder structure of the React Native project :-

1). `package.json` :- this file contains the project depedencies, scripts and metadata. In depedencies section, we will find essentialmpackages like - expo, react & react-native. Additionally there's a package called `Expo` status bar which controls the application's status bar. `@babel/core` is listed as a dev dependency. Regarding scripts :-
a). `start` - start script is used to initiate the development server and there are additional scripts to specifically target Android, iOS or web platforms.

2). `package-lock.json` :- this file ensures the consistent installation of project dependencies.

3). `babel.config.js` :- this file serves as the babel configuration file, it applies the babel preset Expo preset etending the default react native preset. This configuration adds support for decorators pre-shaking web packages and loading font icons with optional native depedencies provided they're installed. if needed, we can modify this file to include additional Babel plugins or presets.

4). `app.json` :- this an important file as it contains configuration options for the project, these options alter project's behavior during development building submitting and updating the app. Through out this learning we will learn about differnt entries in this file.

5). `App.js` - this file serves as the default screen of our project. It acts as the root file that loads when we start the development server with command `npm start` (similar to that of App.jsx in react project)

6). `assets` folder - this folder serves as a storage location for images, audio files and video files and other resources that need to be bundled with the application.

## Lec 4 - Running App on Device (2:14)

# Running our Expo App
1). iOS Device
2). Android Device
3). iOS simulator
4). Android simulator

# Steps to run the Expo app :-
1). navigate to the folder where we have created the project,
2). run the command `npm start`
3). download `Expo Go` app on our mobile device from playstore
4). make sure the our laptop and mobile device are connected to same Wifi network,
5). Open the Camera app and scan the QR code displayed in the terminal (for iOS device)
5.1). For Android device, use the `Expo Go` app to scanner to scan the terminal's QR code.

## Lec 5 - Running App on iPhone Simulator (2:06)

# Note - Running iOS simulator is only possible on a MAC not on a window or Linux systems.

# Steps :-
1). From terminal run the command - `npm start`
2). download `Xcode` from app store and grant the necessary permission it requests,
3). From terminal find shortcuts to open iOS simulator
3.1). within a few seconds the iPhone simulator should open prompting you to open the app in `Expo Go` app, grant the necessary permission, you will be the running app.

# Note - By default the iPhone SE third generation simulator is open if we prefer to use different device then we can change this from `file` section in iPhone