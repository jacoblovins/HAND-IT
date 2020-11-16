# HAND-IT
      
    
![License](https://img.shields.io/badge/License-APACHE%202.0-blue.svg)

## Description

This gesture recognition package lets you easily add hand gesture functionality to your React.js application.


​![HAND-IT](images/googleBooksSearch.png)



## Table of Contents

* [Installation](#installation)
* [Optional Parameters](#optional-parameters)
* [License](#license)
* [Questions](#questions)




## Installation

To install, run the following command:

``` npm i hand-it```

Import HandGest and the optional poseParameters into the component you would like to use it in:

``` import {HandGest, poseParameters} from 'hand-it'```

Now download the data directory [HERE](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/jacoblovins/HAND-IT/tree/master/data) and place it inside your public folder in your React.js application.

You can now use the ```<HandGest />``` component.

## Optional parameters:

If you are using custom gestures from [TRAIN-IT](https://jacoblovins.github.io/TRAIN-IT/)
``` 
poseParameters.pose1 = "<your custom gesture name>";
poseParameters.pose2 = "<your custom gesture name> ";
poseParameters.pose3 = "<your custom gesture name> ";
poseParameters.pose4 = "<your custom gesture name>";
```
NOTE: Make sure ```poseParameters.pose1 = "<your custom gesture name>";``` etc... matches exactly what you entered when training the model or your actions will not work.

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

This project is licensed under the BSD 3--Clause license.




## Questions

If you have any further questions, you can reach me directly here: lovins.jacob@yahoo.com

You can find more of my work at [https://github.com/jacoblovins/](https://github.com/jacoblovins/).
