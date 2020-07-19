# DEV.md

The file serves as a reminder to me as to what I need to do when releasing a new version of maze_generator.

## Before a release

### Replace all version numbers with the new version number

Usually just a "replace all" will suffice for this.

Files which include the module version number:

* `package.json`
* `egg.json`
* Example code in the `examples` folder
* `createWidget.js`

### Make sure any new folders and files are included in `egg.json`

E.g:

```json
"files": [
  "README.md",
  "./mod.js",
  "./folder-name/*",
  "./another-folder/**/*",
  ],
```

### Update whether the new release is stable or not in `egg.json`

E.g:  

```json
"stable": false,
```

## On release

### 1. Make sure that you are on the right branch and all changes are committed

### 2. Create a new tag for the release

This should be in the following format:

```shell
git tag -a v0.1.0-aplha.0 -m "Version 0.1.0 alpha 0"
```

(Note the `v` before the version number)

### 3. Push the release to the Github repository

E.g. for release 0.1.0-alpha.0 you would do:

```shell
git push origin v0.1.0-alpha.0
```

### 4. Publish to nest.land

Use `eggs publish`

### 5. Publish to npm

Use `npm publish`

### 6. Create a Github release and document all the changes since the last release

### 7. Merge the working branch into master and delete the old branch