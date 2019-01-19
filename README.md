# Memory Match - Version 0.1 (v0.1)

#### Overview

> This version is used to reinforce HTML, CSS & layout concepts to put your own flare into a classic game of 
concentration. The scope for this version asks the student to choose a theme for the game including: 

> - 9 card faces
> - 1 card back
> - Creating an about page describing about the game and the skills that went into creating it.

> In future versions the students will be building out the functionality with their own flare and features. The students will pull the knowledge from what 
they have learned from the resources they have consumed and the prototypes they have completed and pull it into one 
cohesive version of this project. 

> **Related Videos**

> - CSS Animation - <a href="https://www.youtube.com/watch?t=3&v=fjqT5mwbOCo" target="_blank">Video</a> | <a href="https://docs.google.com/presentation/d/1D--Uon9dUBR4i19i9NHIt6LpBcbVVHx5JSoT6oywjXE/pub?start=false&loop=false&delayms=3000&slide=id.p" 
target="_blank">Slides</a>
> - BootStrap Intro - <a href="https://www.youtube.com/watch?t=544&v=i7cnwkFbuko" target="_blank">Video</a> | <a 
href="https://docs.google.com/presentation/d/1AzAVKt40iIkd84kNQ3fCbpYJZsY3FC8dZuOPMOvbUbU/pub?start=false&loop=false&delayms=3000&slide=id.p" target="_blank">Slides</a>
> - Bootstrap Redux - <a href="https://www.youtube.com/watch?v=HFhIYttrvWM" target="_blank">Video</a> | <a 
href="https://docs.google.com/presentation/d/1AwwKy3duuJyfh_nYIoJ8w743oL7U6n4mChHNsMBcZdU/pub?start=false&loop=false&delayms=3000&slide=id.p" target="_blank">Slides</a>
> - Positioning & Floating - <a href="https://www.youtube.com/watch?v=cOAHWiAxgoI" target="_blank">Video</a> | <a href="https://docs.google.com/presentation/d/1FtwdmaSl5icYHzBxY6uCZUHM7K_smRfS7eF0q-P46GY/pub?start=false&loop=false&delayms=3000&slide=id.p" target="_blank">Slides</a>
> - Box Model, Margin & Dimensions - <a href="https://www.youtube.com/watch?v=9xixJDx7pWo" target="_blank">Video</a> | <a href="https://docs.google.com/presentation/d/1_NISU3X3ZkWUbbu6DcE3HPL3MZ8TNYsRyXnNRM2snuA/pub?start=false&loop=false&delayms=3000&slide=id.p" target="_blank">Slides</a>
> - CSS Selectors, Cascading & Specificity - <a href="https://www.youtube.com/watch?v=456PdCCQX3c" target="_blank">Video</a> | <a href="https://docs.google.com/presentation/d/1fRgUZaRLOH-tTLGazsBfqWMwv90dcLZMTEl0FjZpWMk/pub?start=false&loop=false&delayms=3000&slide=id.p" 
target="_blank">Slides</a> 

#### Getting Started

> - Fork this repo by clicking on the **Fork** button located at the top right of this page
> - Clone the newly created repo to your local machine
    - `git clone https://github.com/[your_user_name]/memory_match.git`
    - **Change [your_user_name] to your user name**
> - Create a feature branch
    - `git checkout -b v0.1`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/memory_match/tree/assets#v0.1">Below</a>
#### After coding: Save your work to gitHub
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "Memory Match v0.1 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v0.1`
> - Create pull request
    - Pull request should be made from version0.1 to **your repository's** master branch
    - Merge Pull request through Github UI
> - **Once merge happens through Github UI**
    - Switch to master branch locally
        - `git checkout master`
    - Pull latest merged code
        - `git pull origin master`

#### Scope

> ##### Choose / design a theme
>  - Here are a couple examples of past designs
>      - *Example 1 - Howard (C5) *
            <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/Howard-MM.png?raw=true" width="400">
        
>      - *Example 2 - Trevor (C5) *
            <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/Trevor-MM.png?raw=true" width="400">

> ##### Layout Components
>  - **General Layout concept**
        <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/mm_wireframing.png?raw=true" width="400">
>  - **Header Container**
>    - Game Logo
>      - Game Title
>      - Settings Link (links to no where yet)
>      - About Link  (links to a page with a description of the game and what you did in it)
>  - **Stats Container**
>    - Games Played
>      - element that has a class of **“games-played”**, inside this container:
>          - element with class **"label"** with the text **“Games Played”**
>          - element with class **"value"** with no text
>    - Attempts (number of times the user has clicked on cards)
>      - element that has a class of **“attempts”**, inside this container:
>          - element with class **"label"** with the text **“attempts”**
>          - element with class **"value"** with no text
>    - Accuracy (how many times they got it right / number of total clicks for the current game)
>      - element that has a class of **“accuracy”**, inside this container:
>          - element with class **"label"** with the text **“Accuracy”**
>          - element with class **"value"** with no text
>    - Button Element with:
>          - class of **“reset”**
>          - Text of **“Reset Game”**
>  - **Game Area**
>      - Element with:
>          - **id** of **“game-area”**
>          - 9 matching card elements (18 total) inside with each element having:
>              - class of **“card”**
>              - Inside:
>                  - Card front element with:
>                      - class **“front”**
>                      - img element inside with a valid source
>                  - Card back element with:
>                      - class **“back”**
>                      - img element inside with a valid source

> ##### Add Functionality:
>  - Inside of the head tag link the following javascript files in order
>      - https://code.jquery.com/jquery-3.1.0.js


> ##### Files to add to the repo:
>    - index.html - the main file
>        - Provided HTML general layout
>    - style.css - the main css file, referenced from index.html
>        - link this in the index file
>    - about.html - the about page for the game.
>        - include a picture of you as the designer
>        - include a link to your portfolio website. If you don't have this yet, put a dummy link to "#" as the href
>        - include a description of what the game is about
>        - include a list of skills you needed to make it. This list will grow.
