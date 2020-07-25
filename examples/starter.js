import { Maze } from "https://x.nest.land/maze_generator@0.1.1/mod.js";

// 12x12 maze using Eller's algorithm
let mazeSettings = {
  width: 12,
  height: 12,
  algorithm: "simplified prims",
};

//initialize the maze
let m = Maze.create(mazeSettings);

//generate it
m.generate();

//print it to the console
m.printString();
