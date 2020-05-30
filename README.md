# maze_generator

This is all very much work-in-progress, however feedback is welcome.
Almost everything is subject to change so this is all very unstable.

## Example usage

```javascript
import {Maze} from "./MazeClasses.js"

let mazeSettings = {
  width: 15,
  height: 15,
  algorithm: "recursive backtracker"
}

//initialize the maze
let m = Maze.create(mazeSettings);

//generate it
m.generate();


console.log(JSON.stringify(m));

```

## Maze Settings (JSON)

### width (or xSize)

#### Default Value

`30`

#### Description

The width of the maze.

#### Valid values

An integer value greater than 1.
Values above 100 default to 100.

### height (or ySize)

#### Default Value

`30`

#### Description

The height of the maze.

#### Valid values

An integer value greater than 1.
Values above 100 default to 100.

### algorithm

#### Default Value

`"recursive backtracker"`

#### Description

The algorithm used to generate the maze.

#### Valid Values
* `"recursive backtracker"`
* `"ellers"`
* `"kruskals"`
* `"sidewinder"`