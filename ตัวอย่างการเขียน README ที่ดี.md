# GAME'S - Slotify.pro

## Before you start contributing project
1. Recap ReactJS
   - Component 
   - Function
   - Hook
   - State
   - Redux
2. Learn Typescript (https://www.typescriptlang.org/) \
   --> Variable Type Declaration
    ```
    src/games/SlotMachine/types/index.ts
    ```
    ```
    export interface SlotConfig {
      row: number
      column: number
      width: number
      height: number
      offsetX: number
      offsetY: number
      startX: number
      startY: number
    }
    ```
   --> Default value for type declaration
    ```
    SlotMachine/configs.ts
    ```
    ```
    export const slotConf: SlotConfig = {
      row: 3,
      column: 5,
      width: 144,
      height: 144,
      offsetX: 0,
      offsetY: 0,
      startX: 80,
      startY: 35
    }
    ```
3. Learn SCSS (https://sass-lang.com/guide)
    This project does not use any CSS Framework, Please understand fundamental of CSS.
   --> main.scss --> Import All components from each SCSS Files.
   --> core/_UTIL_NAME.scss --> Global SCSS Default values and functions to let you set it up and use it on each scss files
   --> _variable.scss --> A way to store information that you want to reuse throughout your stylesheet.
   --> _mixin.scss --> A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.
   --> components/COMPONENT_NAME.scss --> SCSS Content for each components
   --> pages/PAGE_NAME/index.scss --> SCSS Content for each pages
   --> games/slot-machine.scss --> SCSS Content for Slot Machine Component
4. Learn how to Debug by reading error message from log and Google it. If you need an assistant please ask.
5. Learn how to export all graphic assets from Adobe Photoshop, Adobe Illustrator, Figma into JPG, PNG, SVG with optimized file size and Good Quality image.
6. Try to change images on Background, Button, Icon, SlotItem
7. If you understand how to style UI, we will move to let you know how to move function from one component to another component.

## The Most important thing

If you need to <strong>CHANGE/DELETE/RENAME</strong> any functions, variables, code, \
please <strong>command+C</strong> functions, variables, code to find all in codebase first. \
To make sure that your change <strong>DOES NOT</strong> effect on another parts another project. \ 
Then you can change after you check our codebase. (To prevent any issues in the future) \ 
If you don't sure please ask for assistant.


## Directory structure

```
src               # App entry point.
└─ assets         # Uncompiled all style and media.
└─ components     # Global custom components.
└─ contracts      # Smart Contracts abi and types.
└─ games          # Games resource.
└─ hooks          # Customs React hooks.
└─ libs           # Instance Modules configuration.
└─ pages          # Application router view.
└─ services       # APIs, ABIs service resources.
└─ store          # Redux state management.
└─ types          # Typescript decorators.
└─ utils          # Utility functions.
```

## Install dependencies

```sh
npm install
```

## 🚀 Compiles and hot-reloads for development

```sh
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:8086](http://localhost:8086) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## 📦 Compiles and minifies for production

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
