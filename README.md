# Memory Match

### Overview


# Memory Match - Version 0.5 (v0.5)


# Memory Match

### Overview

> Version 2.0 is a technology refactoring.  A refactoring is when code is overhauled to encorporate a new concept or to make up for "technical debt".

> ##### Related Reading

> - <a href="https://docs.google.com/presentation/d/1eAlPqkPUIN4rfDcVZefz3GBiRszlBF89qj2lSnkxzfc/pub?start=false&loop=false&delayms=3000&slide=id.g75dce0c75_1_5">READING - OOP Basics</a>
- <a href="https://docs.google.com/presentation/d/17hxhHxdsEFo42iClxdLfHeMJRnxSu7Y9lt7Tv_J9fIc/pub?start=false&loop=false&delayms=3000">READING - JS Functions</a>

> ##### Related Videos
 
> - <a href="https://www.youtube.com/watch?v=cXeHN5uydmY&feature=youtu.be" target="_blank">Video - Event Handling</a>
- <a href="https://www.youtube.com/watch?v=OzbKGDrjGW0&feature=youtu.be">Video - JS Functions</a>


> ##### Related Prototypes


> For this version we will be breaking down the programmatic flow and explaining the decisions that the program has to make to fully understand how the user is interacting. As we move further into the program we will be showing less and less of the flow and expect a certain level of understanding of logical flow. The diagram below should help you follow along with the bullet points.

> **Related Reading**
> - <a href="https://drive.google.com/open?id=0B7eOl4joefDuR2FKZTVvN0lQQ00">READING - JS Comparisons & Conditionals</a>
> - <a href="https://drive.google.com/open?id=0B7eOl4joefDuRHNPU0xXNUNIRGs">READING - JS Functions</a>

> **Related Videos**
> - <a href="https://plus.google.com/u/0/events/cn2ca07j9v8nt5kdd1olqe3ljrc?authkey=CNK97_OZ4ee8ag">Video - JS Functions</a>
> - <a href="https://plus.google.com/u/0/hangouts/onair/watch?hid=hoaevent%2Fc4a35jk6e468buf0fpua0em74dc&ytl=...">Video - JS Comparisons and Conditionals</a>


#### Getting Started

> - If you haven't already started the v0.1 start there - <a href="https://github.com/Learning-Fuze/memory_match/tree/version0.1#getting-started">View Details Here</a>
> - Are you on your master branch?
    - **Yes** - continue to "Pull Latest Changes"
    - **I dont know** Run the command below
        - `git branch` - this will highlight the branch you are currently on
    - **No** - Make sure you `git add .` and `git commit` to your current branch before you switch to your master branch
> - Pull Latest Changes    
        - `git checkout master`
        - `git pull origin master` - **Now continue with the next steps**
> - Create a feature branch
    - `git checkout -b v0.5`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/memory_match/tree/version0.5#scope">Below</a>
> - Save your work to gitHub
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "Memory Match v0.5 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v0.5`
> - Create pull request
    - Pull request should be made from v0.5 to **your repository's** master branch
    - Receive Peer review on your pull request (Wait for Instruction)
        - Reviewer should merge pull request through Github UI once all comments have been resolved
> - **Once Peer Review is complete & auto merge happens through Github UI**
    - Switch to master branch locally
        - `git checkout master`
    - Pull latest merged code
        - `git pull origin master`

> - Proto - JS OOP
- Proto - JS Functions

#### Getting Started

> - This assumes you have completed the 1.0 memory match - <a href="https://github.com/Learning-Fuze/memory_match/tree/v1.0#getting-started">View Details Here</a>.  Make sure you are starting from your 1.0 code before making a version2.0 branch.




> - Create 4 card static layout by removing 7 of the nine matching cards
> - Add a click handler to each card by 1 of these 2 methods
>   - jQuery - Intermediate
>       - Add click method to a jQuery Selector with the parameter equal to a function called card_clicked
>   - onclick attribute - Fundamentals
>       - the value of the attribute on each element should be set to card_clicked with a parameter of the keyword this
> - Declare and assign 3 global (see scope presentation) variables
>   - **first_card_clicked** assigned to null
>   - **second_card_clicked** assigned to null
>   - **total_possible_matches** assign to number of total possible matches (in this case 2)
>   - **match_counter** assigned to 0
> - Declare card_clicked function in the script.js file with the following functionality in it
>   - Show the card face
>   - Check if variable first_card_clicked is null
>       - **true** - assign first_card_clicked equal to the html DOM Element that was clicked
>           - click handler functionality is complete, return
>       - **false** - assign second_card_clicked to the html DOM Element that was clicked
>           - check if first_card_clicked is equivalent to the second_card_clicked
>               - **true**
>                   - increment match_counter by 1
>                   - reset both variables defined above to null again and then wait for next card click
>                   - check if match_counter is equivalent to total_possible_matches
>                       - **true**
>                           - Display a message to the user they have won
>                       - **false**
>                           - click handler functionality is complete, return
>               - **false**
>                   - Wait 2 seconds then
>                       - Be wary of waiting programmatically but not being able to control the user from clicking on cards while the program waits execute the reset of the code
>                       - Show card back on both elements that are flipped over
>                       - reset both card_clicked
>                       - variables to null
>                       - click handler functionality is complete, return
> <img src="https://docs.google.com/drawings/d/1JT0nsiTg3HXG2L3QFPnfAmPoQDWUCRNKDvl2qr1r9xo/pub?w=960&h=720" width="750"/>

### Scope

>- Refactor your code into the following objects:
    - **Game**
      - properties: 
        - cards - property that holds the cards in your game
        - first_card_clicked - property that holds the card that was firstly clicked this round
        - second_card_clicked - property that holds the card that was secondarily clicked this round
        - matches_remaining - the number of matches remaining
        - game_running - a boolean that shows whether the game is currently active or not
        - game_board_display - the dom element on the page that will contain the cards
        - stats_display - the dom element ont he page that will contain the stats
      - methods: 
        - *initialize*
          - purpose: does all house keeping for the game on startup, including initializing of button click handlers not including cards
          - params: none
          - returns: the game object
        - *create_cards*
          - purpose: creates all card objects from the card constructor / object
          - params: data pertaining to creating the cards, such as images or other information
          - returns: the game object
        - *handle_card_click*
          - purpose: 
           - checks whether it is the first or second card that has been clicked
           - checks if a match has occured
             - takes actions depending on if match occurred
        - *reset*
          - purpose: resets the game back to a fresh state
          - params: none
          - returns: the game object
        - *start*
          - purpose: changes the game state to started and initiates any other functions needed by game
          - params: none
          - returns: the game object
        - *stop_game*
          - purpose: change the game state to stopped and deactivates any needed items, such as click handlers
          - params: none
          - returns: the game object
        - *win_game*
          - purpose: checks to see if user won the game, and indicate to the user that the game is won if necessary
          - params: none
          - returns: whether the game is won or not
     - **Card**
       - *dom_element - property that stores the dom element that represents the card
       - *create_element*
         - purpose: 
           - does everything necessary to make the dom element.  
           - attaches the click handler, which calls the card's click handler
         - params: none or may pass in necessary data to make this element, such as image
         - returns: the dom element created, for use with the game object to put in the display element
       - *flip*
         - purpose: flips the dom element or otherwise reveals the card
         - params: none
         - returns: none
       - *hide*
         - purpose: hides the card so that the back is visible again
         - params: none
         - returns: none
       - *handleClick*
         - purpose: handles the click on the card, flipping the card as necessary and informing the game that the click has happened
         - params: none
         - returns: none
    - **Stats_view**
      - *dom_element* - the element on the page that stores the stats.  potentially has references to other dom elements that represent other stats
      - *create_element*
        - purpose: 
          - creates or attaches to a stats object on the page  
        - params: none
        - returns: none
      - *display*
        - purpose: updates dom with the current stat information
        - params: none
        - returns: none
      - *update_info*
        - purpose: stores information internally in stats view, such as accuracy or attempts
        - params: multiple
        - returns: none
      - *reset*
        - purpose: resets all stats back to baseline, as necessary
        - params: multiple
        - returns: none
      

Memory match is a game with 18 cards face down and the player has to try and match all 10 pairs of matching cards by 
remembering the position of the cards. Once the player has matched 2 cards they will be displayed face up until all 
pairs have been matched. 

<a href="https://docs.google.com/presentation/d/1zlSHYatpaPsrq4LuOtyuE-RRIom4vRo-lXovQ0zPV0U/pub?start=false&loop=false&delayms=3000&slide=id.p" target="_blank">Design Overview</a>

## Versions

### Version 0.1 (v0.1)

# Memory Match - Version 0.1 (v0.1)


#### Overview


> Version 1.0 continues where version 0.5 stopped by adding in the statistics of the memory match game. When a user clicks on a card the application will start tracking how many matches versus how many attempts. In combination with the stats there is also a tracker for how many times the game is played. Games played is tracked by resetting / restarting the game.


> ##### Related Reading

> - <a href="https://docs.google.com/presentation/d/1FhpJTYGzq6vlHaRcTbOGirVJH6GQSYbaav77uzUOgw4/pub?start=false&loop=false&delayms=3000">READING - JS Event Handling</a>
> - <a href="https://docs.google.com/presentation/d/17hxhHxdsEFo42iClxdLfHeMJRnxSu7Y9lt7Tv_J9fIc/pub?start=false&loop=false&delayms=3000">READING - JS Functions</a>

> - 9 card faces

- 1 card back
- Creating an about page describing about the game and the skills that went into creating it.

> This version will integrate with instructor built JavaScript to give the layout built by the student's functionality 
and show the ability of design & layout to be independent of functionality but strict requirements are needed 
(specific classes and id’s). In future versions the students will be building out the same functionality that is 
provided with each student providing their own flare and features. The students will pull the knowledge from what 
they have learned from the resources they have consumed and the prototypes they have completed and pull it into one 
cohesive version of this project. 

#### Related Videos

> - CSS Animation - <a href="https://www.youtube.com/watch?t=3&v=fjqT5mwbOCo" target="_blank">Video</a> | <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDub1BUOUtQMWdtbnc/view" 
target="_blank">Slides</a>
> - BootStrap Intro - <a href="https://www.youtube.com/watch?t=544&v=i7cnwkFbuko" target="_blank">Video</a> | <a 
href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuS1l1THpsanlsWkU/view" target="_blank">Slides</a>
> - Bootstrap Redux - <a href="https://www.youtube.com/watch?v=HFhIYttrvWM" target="_blank">Video</a> | <a 
href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuTWJrVk9YTXR5M2c/view" target="_blank">Slides</a>
> - Positioning & Floating - <a href="" target="_blank">Video</a> | <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuOGVTZXpHOWtrNGM/view" target="_blank">Slides</a>
> - Box Model, Margin & Dimensions - <a href="" target="_blank">Video</a> | <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDueXdic3dWekhXdWc/view" target="_blank">Slides</a>
> - CSS Selectors, Cascading & Specificity - <a href="" target="_blank">Video</a> | <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDub3N1NWE3VmFxakE/view" 
target="_blank">Slides</a> 

#### Related Prototypes

> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_design_layout_1#prototype---css-design--layout-1-box-model-margin-padding-border-and-dimensions" target="_blank">CSS Design Layout 1</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_design_layout_2#prototype---css-design--layout-2--css-positioning-and-css-floating" target="_blank">CSS Design Layout 2</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_selectors#prototype---css-selectors" target="_blank">CSS Selectors</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_bootstrap_redux#bootstrap-redux" target="_blank">CSS Bootstrap Redux</a>


> ##### Related Videos
 
> - <a href="https://www.youtube.com/watch?v=cXeHN5uydmY&feature=youtu.be" target="_blank">Video - Event Handling</a>
> - <a href="https://www.youtube.com/watch?v=OzbKGDrjGW0&feature=youtu.be">Video - JS Functions</a>

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

> - If you haven't already started the v0.1 start there - <a href="https://github.com/Learning-Fuze/memory_match/tree/version0.1#getting-started">View Details Here</a>
> - Are you on your master branch?
    - **Yes** - continue to "Pull Latest Changes"
    - **I dont know** Run the command below
        - `git branch` - this will highlight the branch you are currently on
    - **No** - Make sure you `git add .` and `git commit` to your current branch before you switch to your master branch
> - Pull Latest Changes    
        - `git checkout master`
        - `git pull origin master` - **Now continue with the next steps**
> - Create a feature branch

    - `git checkout -b v1.0`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/memory_match/tree/version1.0#scope">Below</a>


    - `git checkout -b v1`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/memory_match/tree/assets#v0.1">Below</a>

> - Save your work to gitHub
> - Add files to git
    - `git add .`
> - Commit files (Group files together)

    - `git commit -m "Memory Match v1.0 - Your Name"`

    - `git commit -m "Memory Match v1 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v1`
    
---

### Version 0.5 (v0.5)
 
> #### Coming Soon
 
---

## Scopes

### v0.1

> ##### Choose / design a theme
>>  - Here are a couple examples of past designs
>>      - *Example 1 - Howard (C5) *
            <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/Howard-MM.png?raw=true" width="400">
        
>>      - *Example 2 - Trevor (C5) *
            <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/Trevor-MM.png?raw=true" width="400">

> ##### Layout Components
>>  - *General Layout concept*
        <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/mm_wireframing.png?raw=true" width="400">
    
>>  - *Header Container*
>>    - Game Logo 
>>      - Game Title
>>      - Settings Link (links to no where yet)
>>      - About Link  (links to a page with a description of the game and what you did in it)

>>  - *Stats Container*
>>    - Games Played
>>      - element that has a class of **“games-played”**, inside this container:
>>        - element with class **"label"** with the text **“Games Played”**
>>        - element with class **"value"** with no text
>>      - Attempts (number of times the user has clicked on cards)
>>        - element that has a class of **“attempts”**, inside this container:
>>          - element with class **"label"** with the text **“attempts”**
>>          - element with class **"value"** with no text
>>      - Accuracy (how many times they got it right / number of total clicks for the current game)
>>        - element that has a class of **“accuracy”**, inside this container:
>>          - element with class **"label"** with the text **“Accuracy”**
>>          - element with class **"value"** with no text
>>      - Button Element with:
>>        - class of **“reset”**
>>        - Text of **“Reset Game”**

>>  - *Game Area*
>>      - Element with:
>>          - class of *“game-area”*
>>              - 9 matching card elements (18 total) inside with each element having:
>>                  - class of **“card”**
>>                  - Inside:
>>                      - Card front element with:
>>                      - class **“front”**
>>                        - img element inside with a valid source
>>                    - Card back element with:
>>                        - class **“back”**
>>                        - img element inside with a valid

> ##### Add Functionality:**
>>  - Inside of the head tag link the following javascript files in order
>>      - https://code.jquery.com/jquery-2.1.4.min.js
>>      - http://learning-fuze.github.io/memory_match/v0.1/script.js


> ##### Files in repo:
>>    - index.html - the main file
>>        - Provided HTML general layout
>>    - style.css - the main css file, referenced from index.html
>>        - link this in the index file
>>    - about.html - the about page for the game.
>>        - include a picture of you as the designer
>>        - include a link to your portfolio website. If you don't have this yet, put a dummy link to "#" as the href
>>        - include a description of what the game is about
>>        - include a list of skills you needed to make it. This list will grow.

    - `git checkout -b v0.1`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/memory_match/tree/assets#v0.1">Below</a>
#### After coding: Save your work to gitHub
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "Memory Match v0.1 - Your Name"`

    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v1.0`
> - Create pull request

    - Pull request should be made from v1.0 to **your repository's** master branch
    - Receive Peer review on your pull request (Wait for Instruction)
        - Reviewer should merge pull request through Github UI once all comments have been resolved
> - **Once Peer Review is complete & auto merge happens through Github UI**

    - Pull request should be made from version0.1 to **your repository's** master branch
    - Merge Pull request through Github UI
> - **Once merge happens through Github UI**

    - Switch to master branch locally
        - `git checkout master`
    - Pull latest merged code
        - `git pull origin master`


### Scope

- Adding Stats
  - Declare a global variable, `matches`, and set it to 0
    - Every time the application finds a match this variable should be incremented by 1
  - Declare a global variable, `attempts`, and set it to 0
    - Every time a user attempts a match (clicks the 2nd card) the attempts should be incremented by 1
  - Declare a global variable, `accuracy`, and set it to 0
    - Accuracy is defined as a percentage of matches / attempts
  - Declare a global variable, `games_played` and set it to 0
    - When the page is loaded a new global variable should be defined called games_played. When the game is reset by clicking the reset button the games_played should be incremented by 1.
  - Declare a function, `display_stats`, that has the following functionality
     - Inserts the **games_played** value into the element that would be selected like this “.games-played .value”
     - Insert **attempts** value into the element that would be selected using this selector “.attempts .value”
     - Formats **accuracy** to be a percentage number with the **%** sign
     - Takes formatted **accuracy** and inserts the value of the variable into the element that has the selector of “.accuracy .value”
  - Declare a function, `reset_stats`, that has the following functionality
     - Resets variable **accuracy** to 0
     - Resets variable **matches** to 0
     - Resets variable **attempts** to 0
     - Calls **display_stats** function
  - On **Reset button** click, the function handler for the click event should have the following functionality
     - increment games_played by 1
     - call reset_stats
     - call display_stats
     - Reset all cards to have the back face showing

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

# Memory Match

> - Maintained by: `codingcodymiller`


## Project Setup

Before starting on this project, you will need to **fork** and then **clone** this repository into your `lfz` folder on your current development environment.

1. Fork this repository from LearningFuze
    - Click on the <kbd>**Fork**</kbd> button at the top right of the page.
    - Select your Github user name to complete the fork

2. Clone this repository to your development environment
    - In your terminal, navigate to the location of your `lfz` folder
    - `cd ~/lfz` or `cd ~/Desktop/lfz`
    - `git clone https://github.com/[Your User Name]/memory_match.git`

3. Navigate into the `memory_match` directory
    - `cd memory_match`
    - You are now ready to get started!
    - If you are not in the proper directory, navigate to the `lfz` folder, if you're not sure how, contact an instructor.



## Functionality Overview
1. Memory match is a matching game in which a player attempts to match the images contained on "playing cards".
2. There are a total of 18 cards:
    - Each card contains 1 of 9 images
    - There are two of each image allowing for 9 total matches
3. The following stats are tracked:
    - Total number of games played
    - Total number of matches for the current game
    - The accuracy of the players attempts to match the cards in relation to the current game (as a percentage)
4. The cards are displayed face down and "flip" over when they are clicked.
5. Two cards can be flipped each round.
6. If the images of the two cards which are flipped over match:
    - The cards remain flipped over and the player gets 1 point for the match
    - 1 point is added to the total number of attempted matches.
    - The player's accuracy is updated
7. If the two flipped over cards do not match:
    - The cards are flipped back over
    - 1 is added to the total number of attempts
    - The players accuracy is updated
    - The player must choose two cards again to continue searching for a match.
8. After each turn, stats are displayed, including:
    - The total number of matches made
    - The accuracy calculated from the total number of matches and total number of attempts
9. Once all 9 cards have been matched:
    - A modal is shown to the player telling them they have won.
    - A button is provided which can reset the game by clicking on it.
10. Resetting the game performs the following actions:
    - All cards are flipped back over
    - The number of games played is increased
    - The total number of matches are reset
    - The accuracy percentage is reset to 0%



## Features
1. Below is the breakdown of feature sets you need to complete in order to finish the MVP (Minimal Viable Product).

- User Can View Game - [Instructions](guides/features/skeleton.md)
- User Can Flip Cards - [Instructions](guides/features/flip-one-card.md)
- User can Match Two Cards - [Instructions](guides/features/match-two-cards.md)
- User Can Win Game - [Instructions](guides/features/win-condition.md)
- User Can View Stats - [Instructions](guides/features/tracking-stats.md)
- User Can Reset Game and Play Again - [Instructions](guides/features/resetting-game.md)

### Bonus Feature / Challenge
- Shuffling cards
- Dynamically creating cards



