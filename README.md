# The hydra game

This script compute the number of step to finish the hydra game, see [this Numberphile video](https://www.youtube.com/watch?v=prURA1i8Qj4)

This is for a "vertical" hydra of a given size (a hydra with a given number of heads stacked on top of each others).
At each step we cut the head on the most right (and the higher one if there is multiple head at the same position) and add a number of new heads below corresponding to the current step number.

To run this script install node.js, run `npm install` and then use `npm start` to find the number os steps for a hydra of size 4.
You can also use the first argument to try a higher height, ex: `npm start 5`.

Results :

Size | Steps
-----|------
  1  |
  2  |
  3  |
  4  |  
