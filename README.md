1- node
2- yarn : npm install -g yarn
3- yarn global add live-server
    - go to terminal: $live-server public 
4-.babeljs.io --> Compiler
    - yarn global add babel-cli@6.24.1
    - inside directory> yarn init
    - yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 
        - To recreate the dependencies > yarn install
    - To link babel>  babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

5- JSX> Templating 
    - Dynamic templates
    - ++ install editor extension Babel ES6/ES7
    - Root can only have one element> the main div to wrap everything

6- React DOM elements: Good to know the html elements ported to react.
7-. React events SyntheticEvents: Supported events section
8- React diferenciates between html tag and react component because is uppeercase