# HAND-IT
      
    
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

This gesture recognition component lets you easily add hand gesture functionality to your React.js application. Using the power of Tensorflow.js and ML5, this component will recognize your hand gestures and allow you to assign actions to them.


​![HAND-IT](./handit2.gif)



## Table of Contents

* [Installation](#installation)
* [Custom Hand Gestures](#custom-hand-gestures)
* [Optional Parameters](#optional-parameters)
* [License](#license)
* [Questions](#questions)




## Installation

To install, run the following command:

``` npm i hand-it```

Import HandGest and the optional poseParameters into the component you would like to use it in:

``` import {HandGest, poseParameters} from 'hand-it'```

Now download the model data [HERE](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/jacoblovins/HAND-IT/tree/master/data). Unzip and place the data folder with it's contents inside your public folder in your React.js application.

You can now use the ```<HandGest />``` component.

## Custom Hand Gestures

The current pre-trained hand gestures that come with HAND-IT are:
1. Point Up
2. Point Down
3. OK
4. Fist

If you want to use your own custom hand gestures, our [TRAIN-IT](https://jacoblovins.github.io/TRAIN-IT/) site makes it easy.

Just follow the directions, download the files and drop them into your data directory. Add your custom gesture names to the pose parameters and you're ready to go!

## Optional parameters:

If you are using custom gestures from [TRAIN-IT](https://jacoblovins.github.io/TRAIN-IT/)
``` 
poseParameters.pose1 = "<your custom gesture name>";
poseParameters.pose2 = "<your custom gesture name> ";
poseParameters.pose3 = "<your custom gesture name> ";
poseParameters.pose4 = "<your custom gesture name>";
```
NOTE: Make sure ```"<your custom gesture name>"``` matches exactly what you entered when training the model or your actions will not work.

Change the rate at which HAND-IT classifies your hand gestures in milliseconds:
```
poseParameters.classifySpeed: 300,
```

Change the video displays width and height:
```
poseParameters.webcamWidth: 640,
poseParameters.webcamHeight: 480,
```

Add any action to trigger when HAND-IT recognizes your gesture:
```
poseParameters.pose1Action = () => {
    <!-- gesture 1 action code here -->
    console.log("Point UP is Working!")
}

poseParameters.pose2Action = () => {
    <!-- gesture 2 action code here -->
  console.log("Point Down is Working!")
}

poseParameters.pose3Action = () => {
    <!-- gesture 3 action code here -->
  console.log("Point Left is Working!")
}

poseParameters.pose4Action = () => {
    <!-- gesture 4 action code here -->
  console.log("Point Right is Working!")
} 
```



## License

Copyright (c) 2020 Jacob Lovins

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.




## Questions

If you have any further questions, you can reach me directly here: lovins.jacob@yahoo.com

You can find more of my work at [https://github.com/jacoblovins/](https://github.com/jacoblovins/).
