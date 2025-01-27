
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

# Expo vs React Native :- while both frameworks are allowed for the development of Android and iOS apps they differ significantly in terms of maintenance, ease of setup and platform compatibility.

# React Native (RN) is an open-source framework maintained by Meta (Facebook), designed for building cross-platform apps.

# Expo is an open-source framework maintained by Expo itself, designed for building cross-platform apps.

# Unlike plain RN, which can be challenging and time-consuming to set up, Expo provides a streamlined experience. Expo has a suite of tools and services built around React Native, which greatly simplifies the development process.

# If it helps, Expo is to React Native how Nextjs is to React.

# Note - With plain React Native, we cannot build iOS apps on a windows or linux machine. Native iOS apps can only be built on a macOS machine.

# With Expo, we can develop our app on windows or linux and run that app on a physical iPhone.

# Expo 

# Expo has evolved significantly over the years and now supports nearly all the features necessary for building enterprise mobile apps.

# In the event that we require access to native Android or iOS code, Expo allows us to eject our app and work with a plain React Native codebase. This flexibility ensures that we have the option to leverage the additional functionalities provided by Expo while still retaining the ability to tap into native code when necessary.

# Expo is the default choice for setting up development environment. This endorsement by the React Native community highlights Expo as the optimal starting point for beginners. It provides a smoother onboarding experience and robust set of tools to kick-start our React native journey.

## Lec 3 - Hello World (5:51)

# Let us create our first React Native app.

# Technically it will be Expo project, creating a new `Expo` project is as simple as running a single line of code using below command :-

=> `npx create-expo-app@latest project-name`

# Folder structure of the React Native project :-

1). `package.json` :- this file contains the project depedencies, scripts and metadata. In depedencies section, we will find essentialmpackages like - expo, react & react-native. Additionally there's a package called `Expo` status bar which controls the application's status bar. `@babel/core` is listed as a dev dependency. Regarding scripts :-
a). `start` - start script is used to initiate the development server and there are additional scripts to specifically target Android, iOS or web platforms.

2). `package-lock.json` :- this file ensures the consistent installation of project dependencies.

3). `babel.config.js` :- this file serves as the babel configuration file, it applies the babel preset Expo preset extending the default react native preset. This configuration adds support for decorators, pre-shaking web packages and loading font icons with optional native depedencies provided they're installed. If needed, we can modify this file to include additional Babel plugins or presets.

4). `app.json` :- this an important file as it contains configuration options for the project, these options alter project's behavior during development, building, submitting, and updating the app. Through out this learning we will learn about differnt entries in this file.

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

## Lec 6 - Running App on Android Emulator (4:07)

# Steps to run React Native apps on Android Emulator :-
1). visit developer.android.com/studio and install Android studio application and done the setup,

2). Open Android studio, then select `Virtual Device Manager` option from More Actions dropdown, then create a new virtual device from `Create device` option 

3). select the device that we wish to test on, then click `Next`, then select the Android API level (we have install it for first time), and add name for our virtual device from `AVD Name` option, then click finish on verify configuration screen,

4). run the device by clicking `play` button,

5). with the Android Emulator running in the background return to VS Code and follow terminal commands to run the app on Android Emulator

## Lec 7 - Core Components (02:48)

# When we use React to create web user interfaces, we often utilize HTML tags such as div, span, and paragraph

# It is crucial to note that the web elements that we write for the web are specific to the browser's understanding of HTML. When working with react native these elements won't work because react native doesn't incorporate the concept of a document object model (DOM).

# Core Components contd..

# In Android and iOS app development, we employ a fundamental building block called a `View` for user interfaces. A view is a small rectangular element on the screen that can display text, images or respond to user input.

# Android - views are written in Kotlin or Java,

# iOS - views are written in Swift or Objective-C,

# React Native - views using JavaScript through React components,

# At runtime, React native generates the corresponding Android and iOS views for these components.

# React Native offers a collection of essential pre-built components known as "Core components," which are readily available for building our native app's user interface.

# A notable difference between creating react components for the web and react native is that in react native we need to import core components from the react native library where as in react for web development we don't import HTML elements like div, span or paragraph.

## Lec 8 - View (6:50)

# View :- First core component in the react native library,

# The View component is a fundamental core component in React Native that serves as building block for creating user interfaces. It functions as a container that supports layout using flexbox, styling, touch handling and accessibility controls. In web development terms, the View component can be compared to the `<div>` tag. The View component is typically nested inside other views and can have zero or more children of any type. It provides the structure and organization for other components in the UI.

# View component is an essential core component in react native serving as a building block for creating UIs. It acts as a container that supports layout and styling. View component can be nested as well.

## Lec 9 - Text (3:33)

# Text - It is component for displaying text. It supports nesting, styling and touch handling. Depending on the target platform, React Native will translate this component to either a UITextView (iOS), a TextView (Android), or a paragraph tag `<p></p>` (web).

# In React Native all text nodes must be wrapped inside a text component. Directly placing text under a view is not allowed.

# We can also nest `Text` component.

# The `Text` component is essential for displaying text in react native. Every text node within a view must be wrapped with the `Text` component.

## Lec 10 - Image (5:50)

# The `Image` component enables us to display various types of images, including
- Static images,
- Network images,
- Images from the local disk, such as the camera roll

# React Native seamlessly translates the Image component to platform-specific counterparts
:-
# UIImageView for iOS,
# ImageView for Android,
# image tag `img` for the Web

# Begin by rendering static image from local,

# Note - we need to pass remote image path as key value pair (object) using `uri` attribute. It is mandatory to specify width and height for Network images.

# For static images react native can infer the dimensions from the file data.

# Image component is utilized to render images in react native. We can display static images, Network images and even local images from the camera roll.

## Lec 11 - Scroll View (3:36)

# Due to huge long text we are not able to scroll the react native app to below 2nd image. So this is a critical distinction between web development and react native app development.

# Although a `div` tag is similar to view component, it doesn't scroll automatically.

Q. If we are not able to scroll the react native app to view entire content then how can we view the entire content?
# Using `Scroll View`

# ScrollView
# ScrollView component wraps the platform-specific scrolling functionality. It require a bounded height to function properly.

# Import `ScrollView` component from react-native and replace it with `View` component. After adding this we can check scrolling effect added in the react-native app. However we still can't fully see the end of the second image and this issue arises from the padding on the scroll view component. To address this, we can nest the `ScrollView` within `View` component.

# Unlike `<div>` tag in web development, the `View` component in react-native doesn't scroll by default. For scrollable content we should utilize the `ScrollView` component and ensure it has a bounded height.

## Lec 12 - Button (3:59)

# The button component allows users to trigger actions. It has platform-specific rendering for iOS and Android.

Q. How Button component is different from button tag in HTML?
# Unlike the HTML button element the button component in react native has self-closing tag, there is no inner text or the closing tag for react native button component. To specify the button text we use a prop called `title`.

# `click` Event Handling in react native - in react application development, we used to use `onClick` prop to listen to click events on the button. Similarly in react native the button component provides an `onPress` prop.

# `color` prop in Button component of react native :- `color` prop allow easy customization of the button color.

# `disabled` prop - mainly used in form handling.
# It is better to manage a state variable to control the `disabled` prop value instead of directly assigning `true` or `false`.

## Lec 13 - Pressable (4:17)

# There are times when we need to trigger actions on the press of other elements such as images or text, to address this requirement react native provides a component called `Pressable`.

# `Pressable` is a wrapper component that detects various stages of press interactions on its defined children.

# To detect press we will wrap the required component with a `Pressable` component. Similar to button component the `Pressable` component accepts the `onPress` prop to handle the press event.

# If we feel native button component doesn't meet your app's requirements, then we can create a custom button using `Pressable` component

# We can create a custom button using Pressable.

# In addition to `onPress`, the Pressable component supports several other events that we can listen to
- `onPress` is called when a press is activated,
- `onLongPress` is triggered when a press is held for longer than 500 milliseconds.
- `onPressOut` is called when the press gester is deactivated

# After triggering `onPressIn` the user removes their finger triggering `onPressOut` which is followed by `onPress` however if the user keeps their finger pressed for more than 500 milliseconds after `onpressIn`, `onLonPress` is triggered followed by `onpressOut`

## Lec 14 - Modal (6:39)

# Modal is a screen that overlays the app content to provide important information or prompt the user for a decision. Since they are purposefully interruptive make sure we use them only when necessary.

# Example - Let us learn how to show and hide a model on press of a button

# By default, Modal is always visible, we need to control its visibility based on user interaction. To achieve this, we require a state variable,

# `visible` - it is boolean prop which is used to set visibility of the modal,

# `onRequestClose` - another prop on modal which is used close the modal. It is triggered when the user presses the back button on Android or dismiss the Modal with gester on iOS.

# `animationType` :- this prop is used to open modal with animation. Bydefault it's value is none. Other values that we can assign to this prop are 1). `slide`, 2). `fade`

# `presentationStyle` - this prop deals with presentation style of the modal.Bydefault it's value is `fullScreen`. Other values that we can assign to this prop are 1). `formSheet`, 2). `pageSheet`.

# `formSheet` also provides a similar UI but they differ on larger iOS devices. `formSheet` is narrow where as `pageSheet` is wider. 

# Note - `presentationStyle` prop only affects iOS and not Android.

# Modal component in react native allow us to present important information or prompt user decisions.

## Lec 15 - Status Bar (3:21)

# The `StatusBar` component allows us to control the application's status bar which is the area typically located at the top of the screen.

# The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and network information, battery level and other status icons.

# backgroundColor="lightgreen" - this prop is used to specify background color for the status bar and it is specific to the Android devices.

# The prop to control the text color is called `barStyle`and its default value is default in string

# We can choose `hidden` prop to hide the status bar

# Although we can't change the background color on iOS but we can adjust text color on both platforms.

## Lec 16 - Activity Indicator (3:10)

# The ActivityIndicator component displays a circular loading indicator. It is used to inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

# Although the ActivityIndicator component in Android and iOS devices have slight visual differences they effectively convey the message that something is happening in the background.

# Important props available in the ActivityIndicator component :-
1). `size` :- It is used to specify the size of the laoding spinner. By default its value is `small`

2). `color` - it is used to specify the color to loading spinner. By default it uses the system accent deafult color for Android and a shade of gray for iOS,

3). `animating` - this prop is used to control the visibility of the component. By default it is set to `true` which is why we are able to see running loading spinner.

# A better approach to toggle the animating value using useState hook.

## Lec 17 - Alert (4:18)

# Alert component technically it serves more as an API than a typical component, rather than rendering it as a part of JSX we invoke methods that generate UI elements. 

# When using `Alert` we can launch another dialog with a specified title and message. Optionally we can also specify a list of buttons.

# By default `Alert` box contain `OK` button. We can also optionally specify a message as the second parameter.

Q. How we can control the buttons shown in the `Alert`?
# on iOS we can specify any number of buttons while on Android the limit is three.

## Lec 18 - Custom Components (3:06)

# Core components provided by react native :-
1). View,
2). Text,
3). Image,
4). ScrollView,
5). Button,
6). Pressable,
7). Modal,
8). StatusBar,
9). ActivityIndicator,
10), Alert

# Create and manage Custom Component :- Althought the component that we have created in example (Greet) is simple but we can imagine creating reusable custom components such as custom Card component, a custom button component, a custom ListItem and many more.

## Lec 19 - Styling (1:44)

# Styling React Native apps share similarities with styling web apps but it also introduces some key differences. The most notable difference is that react native doesn't use CSS for styling instead we style our app using JavaScript itself.

# The naming conventions for styles and their values are similar to CSS on the Web but with a slight modification, names are written in camel case notation. For example - `background-color` is written as `backgroundColor`.

# Styling Approaches :-
1). Inline styles - Inline styles with the `style` prop which is accepted by the most of the core components,

2).StyleSheet API - this approach involves using the StyleSheet API provided by react native. This API allows us to define multiple styles in one place using the create method.

# In this section we will focus on :-
1). StyleSheet API,
2). Style various core components,
3). Styling across iOS and Android

## Lec 20 - StyleSheet API (5:55)

# StyleSheet API allows us to style components in react native. For Styling there is new project directory being created named `stylingRN`

# command to create React Native project project using old version - `npx create-expo-app@latest stylingRN --template blank@sdk-49`

# Although inline styles work fine but they are not the recommended approach for styling in react native. The preferred method is to use the stylesheet API.

Q. Why we should prefer StyleSheet API over inline styling?
# There are couple of reasons :-
1). by moving styles away from the render function we make the code easier to read and understand,
2). naming the styles adds meaning to the low level components in the render function,
3). organising styles in this manner makes the code reusable and easier to maintain.

## Lec 21 - Multiple Styles (5:12)

# Let us explore how we can apply multiple styles to a component,

Q. How doe we specify multiple styles for a component?
# we achieve that using an array of styles,

# one point to remember while using multiple styles on a component is that when merging different styles the last style in the array takes precedence so even if we add a background color to box (let say backgroundColor: "pink") , the box style will continue to render with their respective colors however if we change the order in the array then we can see the specified color to box.

# Note - When merging the background color from the two styles the value from the last element in the array takes precedence.

## Lec 22 - Box Model (5:41)

# Let us take a look at the different styles applicable in the relation to the `Box Model`.

# CSS Box Model represents a box that encloses every HTML elements consisting of margins, borders, padding & the actual content. These properties are also applicable to the react native components.

# In react native all dimensions are unitless and represent density independent pixels, new specific units like `rem` or `pixels` are required.

# similar to CSS for web, react native allows us to specify padding in all four directions.

# margin property also functions similarly to its CSS counterpart for web,

# Border shorthand properties that we used on web will not work on react native instead we need to specify the properties individually

# `borderRadius` nuance in iOS and Android :- when we apply borderRadius property on Text component, it will only work on Android device not on iOS however if we apply `borderRadius` property on `View` component, it work on both Android and iOS devices.

## Lec 23 - Shadow and Elevation (3:53)

# working with shadow - applying box Shadows using CSS for the web is straightforward we specify the horizontal offset, vertical offset, blur, spread and color. However in react native, we use a group of four properties.

# When we apply `boxShadow` styles it will only work on iOS device not on Android device.

# There are no common styles to apply shadows in both iOS and Android. To add `boxShadow` effect in Android, we have to use `elevation` property which internally utilizes the Android elevation API.

# `shadowColor` is the only property that works on both iOS and Android.

## Lec 24 - Style Inheritance (4:41)

# In CSS for Web, setting a fony color on a div tag applies the same color to nested paragraph tags within the div tag, this is possible due to inheritance which is a feature in CSS, the paragraph (<p> tag) inherits the same color from its parent div tag. However when working with styles in react native app there no inheritance of styles from a `View` component to `Text` component, in order to set text color to white we need to create and apply a separate style on this text component.

# Although React Native's style inheritance capabilities are limited compared to CSS it still supports style inheritance within `Text` subtree. In our example, the white color from the parent text component is inheriited by the nested text component. So, inheritance from `View` to `Text` doesn't work but from `Text` to another nested `Text` does work.