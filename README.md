# POKEDEX

An example of React Native application with Redux state manager

## Screenshots

![ScreenShot](/screenshot/pokedex.jpg)

## PokeApi

Thanks to public API's of pokeApi you can get all the pokemon data you want

https://pokeapi.co/

## Running project

After starting your virtual device in you local :

```
$ react-native run-android
```

Above comment will also start Metro-Bundler which loads dependency graph of the project
If you want to restart it :

```
$ npm start react-native
```


## Starting a new React Native Project

If you want to built your own app from ground you can follow the below steps :

```
// starters
$ brew install node
$ brew install watchman
$ npm install -g react-native-cli

// brew install is no longer working for adroid-sdk therefore, tap cask via homebrew
brew cask install android-sdk

```
For the web developers who wants quick virtual device setup Genymotion is life saver
In order to get quick emulator :

```
download and install Genymotion.
open Genymotion. It might ask you to install VirtualBox unless you already have it.
create a new emulator and start it.
to bring up the developer menu press ⌘+M
```
```
//  install redux
$ npm install --save react-redux
$ npm install --save redux-logger	
```

## Adding Google fonts for android app
Download .tff and put it into your React-Native project directory

```
./assets/fonts/
```

Add the following line in your package.json

```
"rnpm": {
  "assets": ["./assets/fonts"]
}
```
Run in the terminal from your project directory

```
$ react-native link
```

In order to use it declare this way in your styles

```
fontFamily: 'your-font-name'
```
Dont forget to run react-native run-android command and package your app again to reflect changes !

## TO-DO

* Below style and color guide will be implemented 
https://codepen.io/Sercan/pen/aVGGzq

