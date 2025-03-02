
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

# Section 1 - Basics of React Native

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

# Section 2 - Core Components 

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

# Section 3 - Styling in React Native

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

# In CSS for Web, setting a font color on a div tag applies the same color to nested paragraph tags within the div tag, this is possible due to inheritance which is a feature in CSS, the paragraph (<p> tag) inherits the same color from its parent div tag. However when working with styles in react native app there no inheritance of styles from a `View` component to `Text` component, in order to set text color to white we need to create and apply a separate style on this text component.

# Although React Native's style inheritance capabilities are limited compared to CSS it still supports style inheritance within `Text` subtree. In our example, the white color from the parent text component is inheriited by the nested text component. So, inheritance from `View` to `Text` doesn't work but from `Text` to another nested `Text` does work.

## Lec 25 - Layout with Flexbox (2:25)

# At the core of layout design in React Native is Flexbox

# Flexbox is a powerful one-dimensional layout model used to arrange elements within a container. With Flexbox, we can have the freedom to arrange items either horizontally (from left to right or right to left) or vertically (from top to bottom or bottom to top).

# We can easily control the spacing and alignment of items within the container.

# Flexbox :- It consists of two main entities
- flex container
- flex items

# When we work with flexbox we encounter two axes the main axis and the cross axis

# Main Axis - By default main axis runs from left to right and 
# Cross Axis is perpendicular to it, running from top to bottom

# In React Native above Main axis and Cross axis concepts are opposite. The Main Axis runs from top to bottom and the cross axis left to right,

# Learning Flexbox - It is much like learning CSS where we need to familiarize ourself with the various Flexbox properties and understand how they function. Once we grasp the concepts of Flexbox, we'll have a solid understanding of how layouts are created in React Native.

# Section 4 - Layouts in React Native

## Lec 26 - Code Setup (5:21)

# New Project dir - RNLayout

# Command to create new project - `npx create-expo-app@latest RNLayout --template blank@sdk-49`

# In View section, box component will be act as a flex item within a flex container 

# `children` prop allow the parent to control the text rendered inside the box and style prop allows the parent component to extend the Styles applied to the Box component.

## Lec 27 - Flex (6:07)

# Explore first flexbox property which is `flex`

# The `flex` property plays a crucial role in defining how much of a view will fill the screen along the main axis. It accepts an integer value greater than or equal to 0, indicating the fration of the available space the component should occupy.

# In CSS for Web we need to specify display `flex` to turn a div block into a flex container however in React Native the `View` component is automatically set to display `flex` by default. So View container is a already flex container.

# By default `View` component only occupies enough space to accommodate its children and when it has no children it occupies no space. However if we want the view to take up the entire available space then we use `flex : 1`,

# To ensure the container occupies the entire available space which is extra space at the bottom, set `flex:1` in container's style,

# `flex` value greater than 1 can result in uneven distribution of the available space between the items.

# Note - `flex` property is not just limited to the flex container but it is also applicable to the flex items

# A `View` component has display `flex` by default, when we set `flex: 1` on a container, it takes up the entire available space. If we set `flex` on an item it takes up a fraction or percentage of the avilable space which could be 100 or lesser amount depending on how the available space has been divide.

## Lec 28 - Flex Direction (3:04)

# The `flexDirection` property establishes the main axis, which in turn determines how the flex items are placed within the container. By default, the main axis flows from top to bottom (column), causing the items to be displayed from top to bottom in the UI. By changing the value of the `flexDirection` property, we can alter how the items are positioned.

# Default value of `flexDirection` is column.

# `flexDirection` value `row` ensures left to right placement of boxes.

# Summary - `flexDirection` property sets the direction of the main axis thereby controlling how the items are placed within the container. The possible values are - column, column-reverse, row & row-reverse.

## Lec 29 - Justify Content (4:35)

# `justifyContent` property defines the alignment along the main axis.

# `justifyContent` is a property that we set on the container to control the alignment of its items.

# By default `justifyContent` value is set to `flex- start`
justifyContent: 'flex-start'

# Note - Here individual item not move , items move in group.

# Flexbox provides additional values that controls how the extra space is distributed within the container. Those values 
are space-between, space-evenly & space-around

# `justifyContent` property aligns items based on the main axis.

# Possible values of `justifyContent` are :- flext-start, flex-end, center, space-between, space-evenly & space-around

## Lec 30 - Align Items (3:15)

# `alignItems` property defines the default behavior for laying out flex items along the container's cross-axis. It works similarly to `justifyContent` property but in the perpendicular direction.

# By default the value of `alignItems` property is set to `stretch` that means the flex items will stretch the entire length of the Cross axis which typically flows from left to right.

# We can think of `baseline` as the line upon which the most letters sit in a word like, `Sphinx`. Relating this to flexbox the `baseline` value will align flex items based on their contents baseline.

# Possible values of `alignItems` property are - `stretch`, `flex-start`, `flex-end`, `center` & `baseline`

## Lec 31 - Align Self (4:03)

# `alignItems` property is applied to the container and controls the alignment of all items within it,

# `alignSelf` is applied to individual items, allowing us to control the alignment of each item independently.

# The values available for `alignSelf` are similar to those used in alignItems.

# The default value for `alignSelf` is `auto` and it inherits its value from the `alignItems` property of the parent flex container.

# When `alignSelf` is set to `auto` it takes the value of the parents align items property which is `stretch`

## Lec 32 - Flex Wrap (3:41)

# `flexWrap` - This property allows to control how flex items behave when there's limited space within the container.

# To prevent overflow and handle limited space more effectively we can use the flex wrap property.

# The default value for `flexWrap` property is `nowrap`

# Note - For `flexWrap` : `wrap`, wrapping always occurs from the last item, wrap-reverse just pushes items to the previous column instead of the next column.

# Possible values for `flexWrap` property are - `nowrap`, `wrap` & `wrap-reverse` 

## Lec 33 - Align Content (3:47)

# `alignContent` property aligns lines of content along the cross axis. It is similar to how the `alignItems` property aligns individual items along the cross-axis. A very important condition is that multiple columns or rows must exist within the container.

# The `alignContent` property is used to align these lines of content within the container along the cross access.

# The default value for `alignContent` is `flex-start` which places the both colums at the start of the cross axis where cross axis runs from left to right.

# Possible values of `alignContent` property are - `flex-start`, `flex-end`, `center`, `stretch`, `space-between` & `space-around`

# Summary - The `alignContent` property aligns line of content along cross axis and distributes any extra spacing in the parent container.

## Lec 34 - Gap (2:13)

# Gap related properties allow us to manage spacing between rows and columns. There are three main properties which comes under this :-
1). rowGap - to set gap between rows, we should use this property,

2). columnGap - to set gap between columns, we should use this property,

3). gap - to set gap between both rows & columns, we should use this property

## Lec 35 - Flex Basis (2:30)

# The `flex-basis` property determines the initial size of a flex item before any extra space in the container is distributed. It is serves as an alternative to using the height and width properties in flex layouts.

# By default Flex items have an initial height based on the Box model.

Q. What if we want a specific item to be taller intentionally?
# In such cases we should use the `flex-basis` property

# Can we use `height` property to give height to Box instead of `flex-basis`?
# yes, but there is a difference in both methods, suppose we want both both `Box3` & `Box4` to take up the available space in the container (using flex: 1), box3 is taller than box4 because the available space is distributed proportionally with respect to the flex basis but not the height property.

# Flex basis sets the initial width of an item if the parent container direction is `row` instead of `column`. so we can say that the `flex-basis` property is used to set the initial size of a flex item.

## Lec 36 - Flex Shrink (3:00)

# `flexShrink` property determines how children within a container shrink along the main axis when their combined size exceeds the container's size.

# The `flexShrink` factor is relative to other items within the container.

# Initially every flex item has a default `flexShrink` value of 0, so the items overflow the container however we can control the shrinking behavior by setting a positive value for `flexShrink` property. 

# The shrink factor is relative to other items, meaning that if we set `flexShrink` as 2 then it will shrink twice as much as the first box.

# Summary - `flexShrink` property dictates how flex items should behave when their default size is larger than flex container. By default the value `flexShrink` is 0 on every flex item which causes the items to overflow the container however setting a positive value for `flexShrink` will make the items shrink when necessary and the amount of shrinkage will be relative to other items in the container.

## Lec 37 - Flex Grow (4:35)

# `flexGrow` - It determines how much space an item should occupy inside a flex container when there is a extra space available. Similar to `flexShrink` the `flexGrow` factor is always relative to other items within the container.

# By default, flex items only take up the space required to fit their content and this results in extra space within the container. However there are situations where we want the flex items to grow and fill up the remaining space. By default, all the flex items have a `flexGrow` value of 0 which prevents them using the available extra space, to change this behavior we can use the `flexGrow` property with a positive value.

# If we want all items to grow and use the extra space evenly then we can apply `flexGrow`: 1, to all flex items.

# `flex` vs `flexGrow`

Q. How `flexGrow` is differ from `flex` property?
# When `flex` is set to a positive number, it is equivalent to setting `flexGrow` with the same positive number. `flex` property also implicitly sets `flexShrink` to 1 and `flexBasis` to 0.

# flex: <positive number>

# flexGrow: `<positive number>`, flexShrink: 1, flexbasis: 0

## Lec 38 - Relative and Absolute Layout (4:13)

# Two essential types of Layout ---> Relative and Absolute Layout 

# The layouts are based on the `position` property which defines how an element is positioned within its parent container. There are two possible values for position property :-
1). relative,
2). absolute

1). Relative Layout :- The default value for `position` property is `relative`. In this layout, an element is posiitoned according to the normal flow of the layout. It remains in its original position and can be offset from that posiiton using the `top`, `right`, `bottom` and `left` values. Importantly, this offset doesn't affect the posiitoning of any sibling or parent elements.

2). Absolute Layout - In this layout, an element doesn't participate in the normal flow of the layout. It is instead laid out independently of its sibling. The position of the element is determined by the top, right, bottom and left values which specify specific coordinates relative to its parent container. 

# Relative layout is recommended when responsiveness and adaptability are crucial for our application as it offers a more maintainable and flexible approach for handling different screen sizes and orientations.

# Absolute Layout is recommended when we need precise control over the position and size of UI components and for building custom animations with fixed coordinates.

## Lec 39 - Dynamic User Interfaces (2:03)

# Section 5 - Dynamic User Interfaces in React Native 

# Currently, all our larning has centered around iPhone 14 and Pixel 4 devices. Our app's users won't all be using identical devices. Device sizes may vary, ranging from more compact phones to larger devices like iPads or Android tablets.

# We must ensure that our app's user interface remains responsive to these different sizes while maintaining an optimal user experience. On the same device, a user might opt for portrait mode, while another prefers landscape orientation.

# Command to create new project - `npx create-expo-app@latest DynamicUI --template blank@sdk-49`

## Lec 40 - Dimensions API (5:41)

# To open the application on iPad , click `shift` + `I` key from terminal of VS Code

# In order to address responsive styles based on device's size we need to use Dimensions API.

# Step 1 - Import `Dimensions` API from `react-native` package

# `Dimensions.get()` :- This method accepts either `screen` or `window` object as an argument where `screen` refers to entire physical display of the device including areas that might be outside the visible viewport due to notches, status bar or system nav bars. On the other hand `window` refers to the visible area of the screen occupied by our App's UI. For the task involving UI elements within our application's visible area we will want to use `window` 

# Summary - `Dimensions` API provides access to the device size, by using the device's width or height we can create responsive styles for our UI elements.

## Lec 41 - Dimensions API Drawback (7:15)

# Although Dimensions API worked but we do have issues, device's dimensions can change when the screen orientation changes and unfortunately the dimensions API doesn't dynamically update with these changes.

# Drawback of Dimensions API - The values don't dynamically update when the window dimensions change either due to orientation changes or more complex scenarios such as foldable phones 

# Note - Change orientation from `portrait` to default in `app.json` file,

# Steps to fix above Dimensions API issue :-
1). Import `useState` & `useEffect` hook from React,
2). create state variable that will store device Dimensions when the screen loads,
3). add an effect that listens to changes in the device dimensions and update the dimensions state value,
4). extract the device's width and height from dimensions's state variable,
4). add inline styles that dynamically change based on the device dimensions 

## Lec 42 - useWindowDimensions (1:52)

# Simplify styling for Dynamic screens using `useWindowDimensions` hook

# Steps
1). Eliminate the unnecessary code, i.e removing the imports for `useState` & `useEffect`, import for Dimensions API and entire block of code related to `useState` and `useEffect`,
2). import `useWindowDimensions` from react-native,
3). find `windowWidth` & `windowHeight` using `useWindowDimensions` hook as below,
`
const windowWidth = useWindowDimensions().width
const windowHeight = useWindowDimensions().height
`

# `useWindowDimensions` hook is a recommended approach should be go to approach for responsive styles.

## Lec 43 - SafeAreaView (4:15)

# We can only only see text content on Android not on iPhone It is because the Text's content is hidden behind the notch. Android is completely fine but the iOS device has a problem, if we add padding from top in the container then we can able to see Text's content on the iPhone as well but this is not correct solution as we are getting nunecessary extra space on Android devices. So we need to figure out what will be the safe area for a given device and render our application only within that `View` and that is exactly what the safe area view component is for. So wrap entire JSX's content into `SafeAreaView` component.

# The purpose of `SafeAreaView` is to render content within the safe area boundaries of a device, it applies padding to reflect the physical limitations of the screen such as rounded corners or camera notches.

## Lec 44 - Platform Specific Code (8:39)

# When developing a cross-platform app, maximizing code reuse is a priority. There are situations where it becomes necessary to tailor our code to specific platforms. React Native offers two approaches for organising and separating platform-specific code and they are :-
a). Platform module,
b). Platform-specific file extensions,

a). Platform module :- One of the module ffrom `react-native` which detects the platform on which the app is running, we can use the detection logic to implement platofrm-specific code. Foe example - We can consider a text's content on iPhone it is appropriately positioned within `SafeAreaView` but on Android it is too close to the status bar (attached to top), if we apply `paddingTop` property, it will be apply to both Android and iPhone which not needed however using `Platform` module from `react-native` we can set a top padding only on Android using below code :-
==> `paddingTop: Platform.OS === 'android' ? 25 : 0`

# In similar way we can use above code in iOS devices

# While `Platform.OS` is suitable for small changes a better option for more comprehensive platform specific styles is to use `Platform.select`. Let us illustrate this with example where we completely change the text styles for iOS and Android

# The first approach `Platform module` is appropriate when only small parts of a component are platform specific. For more complex platform specific scenarios we should on second approach i.e, `Platform-specific file extensions`

2). Platform-specific file extensions :- In this approach, we split our code into separate files with `.ios` & `.android` extension before file's main extension. So `react-native` detects the extension and loads the relevant platform file when required by other components.

# `react-native` automatically selects the appropriate version of the component based on the executing platform.

# Summary - `react-native` makes it possible to run platform-specific code using the platform module and platform file extensions. We can use `Plateform.OS` or `Plateform.select` for minor style differences. However for more complex components that need distinct appearances or behaviours across the two platforms `.ios` & `.android` file extensions is recommended.

## Lec 45 - Build a Pokemon Card (1/6) (4:49)

## Section 6 - Pokemon Card Game

# Concepts so far :- Core Components, Custom Components, Styling, Layouts, Responsive styles

# Section 6  - In this section we will put all concepts knowledge into practice by building a list of Pokemon cards in our application.

# Create Pokemon Card Game - `npx create-expo-app@latest pokemonCardGame --template blank@sdk-49`

## Lec 46 - Build a Pokemon Card (2/6) (2:28)

# Pokemon card related styles

## Lec 47 - Build a Pokemon Card (3/6) (4:23) 

# Pokemon Card content design :- define the properties of the Pokemon that need to be rendered in the card component

# Added Pokemon Card's content like name, image, type, hp, moves & weaknesses in five blocks (each block is represented using `View` component)

## Lec 48 - Build a Pokemon Card (4/6) (3:03)

# pokemon card's content styling - it includes styling of block1 items name, hp, & styling of block2 image element

## Lec 49 - Build a Pokemon Card (5/6) (6:41)

# Styling of remaining pokemon card's content like type, hp, moves & weaknesses 

# Styling of third block `type`
# Styling of fouth block `moves`
# Styling of fifth block `weakness`

## Lec 50 - Build a Pokemon Card (6/6) (2:43)

# we will define Pokemon details for three other Pokemon and pass them in as `props` to the Pokemon Card Component

## Section 7 - Render Lists in React Native

## Lec 51 - Lists (6:09)

# Rendering list is an essential aspect of mobile application development. Whether it's a list of contacts, products, or any other collection of items, lists are a fundamental UI component.

# Create new Project for this section - `npx create-expo-app@latest RNList --template blank@sdk-49`

# We will create a mock data set that represents a list of Pokemon, each Pokemon will have a properties like ID, type, and name and we will create this in `data.json` file which contains list of 100 pokemons.

# Our main task is to render the list of Pokemon in the app component

# In React we used to render list items using `map` method and React native we can use the same `map` method to render the list items.

# Rendering lists using the ScrollView component and the `map` method is not the preferred way in react native.

## Lec 52 - FlatList (6:58)

# While rendering all list items might not be an issue for small lists but for larger data sets consisting of thousands of items, it can lead to performance problems .

# Inreact native the recommended approach to rendering lists is to use the `FlatList` component which renders only the items currently in view making it highly performant for long lists.

# Steps to use `FlatList`
1). comment out `ScrollView` component code,
2). import `FlatList` component from `react-native`,
3). replace the `map` method code with the `FlatList` component code,

# `FlatList` component required two mandatory props and they are :- 1). `data` - which is used to pass the array of items that we want to render in the list, it is source of information for `FlatList` , 2). `renderItem` - it is a function that returns the `JSX` for rendering each item in the list. This function receives an object as argument which contain the current item and we can define how each item should be rendered, this is same as what we return from the `map` method.

Q. On printing `item.id` we can still see 60 to 64 ids in the console but on viewport we can only see 6-7 list items. How exactly FlatList is working?
# `FlatList` component ensures it generates a few devices length of content in advance to ensure smooth scrolling but now that the initial number of cards have been rendered if we scroll down a bit we can see the additional ids being logged in the console as they are lazily loaded to ensure smooth scrolling.

# If we want to render the list horizontally we can add the `horizontal` prop to `FlatList` and set it to true.

# `keyExtractor` prop - this prop is a function that takes an item from data array and returns a unique key for that item. It is used to identify the unique items in the list similar to `key` prop when using the `map` method. By default it returns `item.key` and if that is not present it returns `item.id` and if this `item.id` is also not present then it uses the item index as the key where `index` will be available as second argument to the callback function where the first argument is `item` itself 

# Summary :- ScrollView component renders all its react child components at once and has a performance downside whereas `FlatList` renders items lazily when they are about to appear and removes items that scroll way off the screen to save memory and processing time.

## Lec 53 - Item Separator (1:52)

# We will see some additional `props` that are commonly used used with the `FlatList` component 

# `ItemSeparatorComponent` prop :- this props accepts a react component rendering it between each item in the list but excluding the top and the bottom, it is the perfect prop to replace the bottom margin that we have on the card component, while the existing 16px serves as a useful separator between the Cards it also introduces unnecessary spacing at the bottom of the list. By using `View` component along with style of height with this prop can help.

# Summary - The `ItemSeparatorComponent` prop renders a component between each item in the list excluding top and bottom we can assign any react component or even a function that returns a react component. The function can receive specific props allowing for more intricate styling of the component.

## Lec 54 - List Empty (1:19)

# `ListEmptyComponent` prop :- This prop accepts a react component and render it when the list is empty.

# If we assign an empty list to the `data` prop of `FlatList` and use `ListEmptyComponent` prop then its content will be shown on UI.

# `ListEmptyComponent` prop will be useful especially when we fetch data from an API and the data might be empty, so instead of handling the logic ourself we can use this prop to manage empty state efficiently.

## Lec 55 - List Header and Footer (2:28)

# `ListHeaderComponent` prop :- this allow us to add custom header component to the list items. This accepts react component and renders it at the top of the list. It is perfect for adding title, description or any other content that we want to display above the list items.

# `ListFooterComponent` prop :- this allow us to add custom footer component to the list items. This prop renders the component at the bottom of the list and this can be used for adding foot notes, pagination controls or simply a message indicating the end of the list.

## Lec 56 - SectionList (5:57)

# SectionList is a performant component designed for rendering sectioned lists.

# For our example we will render a list of Pokemon categorized by type. There will be section for fire type pokemon, water type and so on.

# Note - It is crucial to name one of property in `grouped-data.json` file as `data` as that is what the `SectionList` component expects. If our API data set for example doesn't have the data property then we have to transform our API's data and other properties can be named anything.

# Steps to use `SectionList` component :-
1). comment out existing `FlatList` component ,
2). import `SectionList` component from react-native and grouped json data from `grouped-data.json` file,
3). invoke the `SectionList` component with grouped data

# `SectionList` component has two mandatory props :- 1). `sections` which is a source of information for SectionList i.e `groupedPokemonList`, 2). `renderItem` :- this prop is a function that returns a JSX for rendering each item in the list. It receives an object containing the current item and we can define how each item should be rendered. `item` in renderItem prop's callback refers to each element in the data array and hence the property being called `data` is vital.

# `renderSectionHeader` prop :- this prop is a function that returns the JSX for rendering each section header in the list. It receives an object (`section`) containing the current section and we can define how each section header should be rendered. `section` refers to the entire object in the JSON array of data file.

# `SectionSeparatorComponent` prop - this prop is specific to `SectionList` component that is used to separate each section.

# The `SectionList` component accepts many of the same props as `FlatList` along with few additional ones. For example - `ItemSeparatorComponent` prop.

# Apart of above props, `SectionList` component accepts many more props.

## Section 8 - Inputs and Forms

## Lec 57 - Inputs and Forms (2:08)

# Input in RN vs Web

# When we developing UI for web applications we have lots of HTML elements at our disposal to capture user inputs. For example - input fields, text areas, dropdown menus, checkboxes, radio groups and many more. However when it comes to working with React Native our options are more limited. Currently core React Native library only provides two input components i.e, text inpt and switch. Apart from these Expo provides additional components like checkboxes and date pickers through the Expo SDK.

# Forms in RN 

# Reading forms in React native presents another challenge and here we typically focus on four key aspects :-
1). Managing Form State :- Controlling the dynamic data within our forms,
2). Handling Form Validation :- Ensuring the integrity and validity of the user's input,
3). Displaying Validation Messages :- Communicating the results of the validation to the user,
4). Submitting Form Data :- Sending the collected information where it needs to go.

Althought above steps can be streamlined with libraries like React Hook Form.

# Create new RN project name `RNForms` - `npx create-expo-app@latest RNForms --template blank@sdk-49` 

## Lec 58 - TextInput (5:09)

# `TextInput` component is a fundamental building block for user input in React Native. It allows users to enter text and other data into our app.

# When we render `TextInput` component directly (without any prop) we will not able to see it on UI but it does exist on the screen but the styling is such that we don't really see it. If we try to click some random text then we can able to see those random texts in input box on UI. So we have to add some styles to see it properly on the UI.

# In Android devices, when we click on input box we will able to see the keyboard but for iOS devices we need to press command `shift` + `K` then we can able to see the keyboard on iOS devices as well.

# The input field that we used to enter can be tracked using `useState` hook similar to that of React.

# Summary - `TextInput` component is a tool for inputting text into the react native app via a keyboard. We can import it from `react-native` library and invoke it with `value` and `onChnageText` props to manage its state.

## Lec 59 - TextInput Props (3:41)

# Important props of `TextInput` component that allows us to customize the behaviour and appearance of the forms in react native :-
1). `placeholder` prop :- It provides users with visual clues about the expected input ,

2). `secureTextEntry` prop :- It is a boolean prop that masks the input characters making them appear as asterisks or dots. This ensures that the user's input remains hidden, when dealing with sensitive information like passowrds the `secureTextEntry` prop is crucial,

3). `keyboardType` prop :- This prop allows us to specify the type of the keyboard that appears when the user interacts with the text input. Foe example :- if we have created a phone number field we can set `keyboardType` to `numeric`

# To prevent auto correcttion and auto capitalization of text input we can use `autoCorrect` to false and `autoCapitalize` to none

## Lec 60 - Multiline TextInput (2:10)

# Unlike the web which has an emnt element for single line input and a textarea eleemnt for multi-line input , in react native the same text input element can be used for both purposes, all we have to do is to include `multiline` prop. To make the multi-line input stand out we need to add some additional styles.

# Note - It is important to note that `multiline` prop aligns the text input to the top on iOS and centers it on Android devices. in order to address this we need to specify `textAlign` to `top`

## Lec 61 - Switch (3:59)

# The `Switch` component serves as a valuable tool for integrating toggles into our app's user interface. It's particularly well-suited for scenarios where we require users to make binary choices, such enabling or disabling specific app features.

# In order to toggle using Switch component we need to mange its state using `useState` and use setter function of `useState` hook with `onValueChange` prop.

# `trackColor` - we can use this prop to track color to set colors for the track in different states. It used to take an object as an argument. 

## Lec 62 - Login Form (5:01)

# We will build the User Interface for the Login Form

## Lec 63 - KeyboardAvoidingView (4:08)

# In iOS device, when we tap on Password field and press `shift + K` keys to bring up the keyboard, the keyboard completely overlays the input element that is practically invisible and this is not a great user experience. In order to solve this problem we should prefer using `KeyboardAvoidingView` component. Hence we will replace the  outer most `View` component with `KeyboardAvoidingView` component and on this component we will use `behavior` prop. This ensures that the component increases its padding at the bottom matching the keyboard's height.

Q. Does using `KeyboardAvoidingView` component fixed the Keyboard overlays issue?
# Not completely, if we increase the height of image , let say to 400 then we will face this issue again. So to fix this issue we will use `KeyboardVerticalOffset` prop with value of 100 will fix the issue but there is a tiny problem with Android now, clicking on passowrd field introduced a unnecessary space by the offset. So to fix this one we need to use `Plateform` specific offset. 

==> keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}

# The KeyboardAvoidingView component can be a tricky component in react native which can test our patience.

## Lec 64 - Form Validation (2:57)

# In order to do form validation , first things first, we need a way to display error message to our users 

## Lec 65 - Form Submission (2:12)

# In order to test form validattion, we need to do form submission.

## Section 9 - Networking in React Native

## Lec 66 - Networking (3:19)

- Fetching and submitting data to API,
- Loading states,
- Error handling,
- FlatList component to display our data,

# Create New React Native project - `npx create-expo-app@latest RNNetworking --template blank@sdk-49`

# API URL - https://jsonplaceholder.typicode.com/posts

## Lec 67 - GET Requests (7:00)

# We will fetch data from API and displays it in React Native component 

## Lec 68 - Loading State (2:47)

# We will implement `loading state` while the data is being fetched in background.

# We will conditionally render a loading spinner by using `ActivityIndicator` component

## Lec 69 - Pull to Refresh (3:04)

# we will implement pull to refresh functionality, this feature is particularly useful when we want to refresh the data displayed in our app without having to restart it.

# In order to implement pull to refresh functionality, we will use a useState to manage its state then we set the returned value of this state on `refreshing` prop of `FlatList` component. Apart from this we will also use `onRefresh` prop that which used to take a callback function, so we will pass one similar function, i.e, `onRefresh={handleRefresh}`

## Lec 70 - POST Request (7:22)

# We will make `post` request from our React Native app

# Steps to make `post` request :-
1). Begin by creating state variables to track the post title and post body

`const [postBody, setPostBody] = useState("");
const [isPosting, setIsPosting] = useState(false);`

1.1). we use a state variable to monitor the data submission process
`const [isPosting, setIsPosting] = useState(false);`

2). bind above state varibles to UI element,

3). define handler for button clicks 

# More Info - https://jsonplaceholder.typicode.com/guide/

## Lec 71 - Error Handling (6:32)

# Steps to do Error handling :-
1). define a state variable to track any errors that might occur 
==> `const [error, setError] = useState("");`

2). add try-catch blocks to fetchData() method and addPost() functions to handle any errors that might occur during the fetch or post operations,

# Note - localhost URLs do not work from the Android emulator sos we can make API requests to our local endpoints from iOS devices but for Android we need workarounds like using our computer's IP address instead of localhost,

## Debugging Tips for iPhone Simulator :-
- Pressing command D brings up the Developer's menu, if this shortcut doesn't work then we can open the device menu and choose `shake` option to access the same, here we will focus on two options :-
1). Show Element Inspector :- it allowed us to inspect elements similar to Browser's inspector,
2). Open JS Debugger :- it let us inspect Network requests.

# Note - Till above React Native Fundamentals covered

## Section 10 - Advance React Native concepts : Navigation into React Native

## Lec 72 - Navigation (3:08)

# The heart of any mobile application is Navigation

# The mechanism that allows users to move across different screens, access features, and generally use our app effectively. A go-to solution for handling navigation is the React Navigation library. 

# Expo has its own built-in routing feature exclusive to Expo projects

# React Navigation works both with and without Expo in React Native apps. We will focus on React navigation in this section.

# React Navigation :- It provides a variety of navigators like Stack, Drawer and Tab navigators.

# Stack Navigator provides a way for our app to transition between screens where each new screen is placed on top of a stack.

# Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures.

# A Tab navigator at the bottom of our screen lets us easily switch between different routes.

# Create New React Native project :- `npx create-expo-app@latest RNNavigation --template blank@sdk-49`

# In order to work with React Navigation we need to install its peer dependencies as below :-

==> `npm install react-native-screens react-native-safe-area-context`

# To work with react navigation we need a wrapping component for a whole app and that is a `NavigationContainer` component 

# All the navigation related logic will be written inside `NavigationContainer` component.

# React Navigation Documentation :- https://reactnavigation.org/docs/getting-started

## Lec 73 - Stack Navigation (6:36)

# Stack Navigation :- In this navigation, each new screen is stacked on top of the previous one like a deck of cards. When we navigate to a new screen, a new card is placed on top of the stack, and when we navigate back, the top card is removed, revealing the previous screen. 

# This Navigation pattern is common in many mobile apps that allows user to drill down into detailed views and then retrace their steps when done. It's particularly useful in scenarios where a linear flow of screens is required. For Example - List View to Details View to More Details view.

# React Navigation's library offers two Navigators for Stack navigation and they are 1). Stack Navigator and 2). Native Stack Navigator,

1). The Stack Navigator is a javaScript-based navigator which offers a high degree of customization, making it a great choice for apps that require a unique navigation experience. However, this comes at the cost of performance especially when compared to its counterpart, the Native Stack Navigator,

2). The Native Stack navigator leverages the native navigation constructs of iOS and Android, providing better performance and a more native feel to the transitions and gestures. The caveat here is, it might not offer the same level of customization as the Stack Navigator.

# We will mainly focus on the Native Stack Navigator as a high level of customization is not our focus right now. Better performance and a more native feel to the transitions and gestures is preferred.

# Steps to use Native Stack Navigation :-
1). install the native stack Navigator library in our project using below command 

==> `npm install @react-navigation/native-stack`

2). create `createNativeStackNavigator` instance and setup navigator within App.js, within `NavigationContainer` we will use `Stack.Navigator` component and within this we will use `Stack.Screen` component. The `Stack.Screen` component accepts `name` prop that will be name of screen and the `component` prop which refers to the react native component that will render a `View` 

# Note - Screen's header like `Home`, `About` have platform specific implementation that why we see `Home` at center of screen in iOS and left in Android. The library also takes care of rendering the content within a safe area view avoiding the notch at the top. Bydefault the topmost screen within the Navigator is the initial screen. We can change this by setting the `initialRouteName` prop on `Stack.Navigator` component 

# More Info on Native Stack Navigator :- https://reactnavigation.org/docs/native-stack-navigator

## Lec 74 - Navigation between Screens (4:19)

Q. How we can navigation between two screen?
# We have two primary ways to handle navigation between screens 1). using `navigation` prop, 2). using `useNavigation` hook,

1). Navigation using `navigation` prop :- Every screen component in our application is provided with the navigation prop automatically by React's Navigation. This prop has various methods to initiate navigation actions one of which is `navigate`

Q. When to use `navigation` prop and when to use `useNavigation` hook?
# The `navigation` prop is easy to use and doesn't require any additional import if we're within screen component however `useNavigation` hook can be used in any component not just screen components making it more flexible option when we have nested components or working with utility components that need to initiate navigation. So recommended approach is to use the `navigation` prop for all screen components and use `useNavigation` hook only when it is necessary.

# When we navigate from Home screen to About screen we can see that React's navigation keeps the Home screen in the stack and adds the About screen on the top of it. If we press the back button (above arrow option `<--`), it pops the above screen of the stack and navigates back to  home screen following LIFO priciple of stack. This stacking behavior ensures a natural navigation flow within our app allowing users to move forward to new screens or step back to previous screen easily.

## Lec 75 - Passing Data between Screens (4:20)

Q. How to pass data while navigating?
# In order to pass data we will pass a `name` parameter from `home` to `about` and render that `name` value in the `about` screen. The `navigation.navigate()` method accepts a second argument, that is a route parameters object. This object can contain the data we want to pass to the new screen. We can access the pass data `name` on other screen using the `route` prop. This prop is provided to all screen components. 

# It is also possible to set a default parameter value. It is also possible to update the parameters from the given screen using the `navigation` prop. We can also send data back to the previous screen in the same way.

# React Navigation's parameters handling provides a seamless way to pass and retrieve data between screens making our navigation structured and more dynamic and responsive to user interaction

## Lec 76 - Stack Navigation Options (5:02)

# Some of the options that the Stack Navigator supports

# We will specify a screen title, styling headers and setting content styles.

# Every screen in our stack can display a title in the header serving as the handy guide for users to understand their current location within the app. By default the `name` prop on the screen component is showcased as the screen title. For instance on our devices it displays `Home` & `About` however this can be customized by specifying a `title` option using `option` prop.

# It is often desriable to style the header to resonate with the application's theme, this includes setting the background color, text color and font-weight among other attributes 

# `headerRight` prop --> provide option to add element in right side of header,

# `headerLeft` prop --> provide option to add element in left side of header,

# React Native also provides an option to style the content of our screen using the `contentStyle` option 

# It is crucial to note that above options are for screen specific, on navigating to about screen the styles do not follow. For uniform style across all screen in the stack we need to lift these options to the Stack Navigator using `screenOptions` prop. After using this option we can see the same styling to the both screens.

## Lec 77 - Dynamic Stack Navigator Options (3:32)

# There are instances where we might want to dynamically set certain options, the `title` being a prime example. Let say instead of generic title like `About` we want to personalize it with the name of of the person passed in as a parameter.

# One way to dynamically set the header title is directly from `Stack.screen` component by passing a function to the options prop. In the context of our `About` screen component we would specify `options` to a function which returns an object and the function receives the `route` prop from the screen which we can destruture to access the desired parameters and use them as part of the title.

# We can also use a react hook to set a dynamic title using `useLayoutEffect` hook. If we replace `useLayoutEffect` hook with `useEffect` the title update might show a noticable delay which is not the smoothest user experience. Hence `useLayoutEffect` hook is the recommended option for tasks.

Q. When to use `Stack.Screen` and `useLayoutEffect` to dynamically set the header title?
# We should use `Stack.Screen` options when the title or navigation options are driven by route parameters are static. Opt for `useLayoutEffect` hook when the navigation options depend on the screen components internal logic state or props or when they need to be updated post render

# `useLayoutEffect` hook - https://chatgpt.com/share/67c31460-349c-8004-be18-ffc9f7e0575f

## Lec 78 - Drawer Navigation (7:25)

# Drawer Navigator introduces a hidden menu, sliding from either side of the screen. It is particularly beneficial in apps with multiple main sections that requires a neat and organized navigation structure.

# Steps to use :-
1). install Drawer Navigator package using below command
==> `npm install @react-navigation/drawer`

2). we need to install and configure the libraries that are required by drawer navigator and they are ` react-native-gesture-handler` and `react-native-reanimated`,

3). rename the `App.js` to `AppStack.js`

4). create new `App.js` file, where we need to import 'react-native-gesture-handler' at the top,

5). create Drawer Navigator instance using `createNativeStackNavigator()` method,

5). Add Reanimated's babel plugin into `babel.config.js` file

==> plugins: [
      'react-native-reanimated/plugin',
    ],

6). clear the cache using below command then run the app 
==> `npx expo start -c`

7). installation and configuration is completed, now we can create the main component ,

# We can see an icon to toggle the drawer from left. It is also possible to toggle the screen programmatically.

## Lec 79 - Drawer Navigation Options (2:00)

# Drawer navigation options to customize its appearance using `options` prop,

# the title specified in `options` prop will get rendered as the header title as well as the drawer label.

# `drawerLabel` prop :- this is used to assign the new label to drawer label 

## Lec 80 - Tab Navigation (4:06)

# Tab Navigation :- This offers a way to switch between different screens by tapping on a tab which is usually displayed at the bottom of the screen. It's a common and intuitive pattern found in many apps, providing a seamless, user-friendly experience.

# Steps to use Tab Navigation
1). install Bottom Tabs Navigation library using below command 
==> `npm install @react-navigation/bottom-tabs`

2). Rename `App.js` to `AppDrawer.js`

# Tab Navigator is used to display at the bottom of screen. The Tabs allowed for easy navigation to the respective screens.

# In each Tab, `name` prop on `Tab.Screen` is displayed as the label as well as the title in the header.
