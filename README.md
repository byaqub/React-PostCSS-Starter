

## Simple React Starter with gulp and postcss

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).


## Getting started

It's assumed that you have installed npm to complete the installation, you can use any common alternatives if you are comfortable doing so. (http://npmjs.org)

Also, you should have the gulp-cli package installed globally on your machine:
`npm i gulp-cli -g`

1. Clone the repository or download the contents
2. In your favourite CLI navigate to the project root directory
3. run the command `npm install`

You can now run the project with the command `npm start`, a browser window will open automatically under the adress: http://localhost:3000


## Folder Structure

After creation, your project should look like this:

```
projectname/
  README.md
  node_modules/
  package.json
  public/
    index.html
    manifest.json
  src/
    App.js
    index.js
    styles.css
    styles/
      styles.css
      base/
        _global.css
        _variables.css
      modules/   
```
## Using PostCSS

You can edit and generate CSS files as you wish inside the styles folder of the project as long as you properly import them into the `styles/styles.css` file. To modify the `src/styles.css` file it's recommended to run the according gulp task from the CLI by typing in the command `gulp`. Otherwise all the changes made will be overwritten the next time gulp runs.

The project is set up in a way that gulp will start watching the whole `src/styles` folder for any changes and regenerate the `src/styles.css` file accordingly. 

###Make sure to have gulp running when modifying/generating CSS files

Once you save a CSS file you should see a related message of completion for the styles task.



## Credits

All the resources used in this project, on top of create-react-app can be seen in the `package.json` file.

