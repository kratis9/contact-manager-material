npm uninstall -g @angular/cli
npm uninstall -g angular-cli
npm cache clean -f

npm install -g @angular/cli

To download yard you need to download the binaries for https://yarnpkg.com/en/docs/install and then install the package


Install Angular Material and Angular CDK
Install Animation supports
Import the component module

yarn add @angular/material @angular/cdk
yarn add @angular/animations

ng g m shared/material --dry-run --flat
<!--  -->
#To include the css style for the components we need to add the default themes in the application from material library.
#styles.css--> @import '~@angular/material/prebuilt-themes/indigo-pink.css'

#Add Gesture support 
  yarn add  hammerjs and import it globally in main.ts
  import  'hammerjs';

