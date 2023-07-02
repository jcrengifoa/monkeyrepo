# MonkeyRepo 🐒 &middot; [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Node.js](https://img.shields.io/badge/Node.js-%5E18.16.0-green)](https://nodejs.org/)

### Initialization

Run `npm i && npm run packages:build` to install all the dependencies you need to run the monorepo and build the packages for the first time.

### After Initialization

#### Create a new package

Keep it simple, just duplicate the "base-package" folder which is intended to serve as a "template" for creating new packages and which is ignored by the publishing process (private: true in its package.json). Below, a checklist just to make sure you do it right:

- [ ] Duplicate the "base-package" folder
- [ ] Rename the files under src following the naming convention
- [ ] Change the README.md to match the package information.
- [ ] Edit the package.json
  - [ ] Remove the "private" property
  - [ ] Change the "name"
  - [ ] Change the "description"

#### Showcase your packages with Storybook

Run `npm run storybook:develop` to run storybook and see your packages

#### Publish your packages

1. Change the necessary files
2. Commit your changes
3. Make sure you are targeting the correct registry in the file lerna.json > command > publish > registry
4. Run `npm run packages:publish`
5. Select the correct version upgrade (More info about Semantic Versioning -> https://semver.org/lang/es/)

#### Publish failed 🙈

Probably, you forgot to authenticate to your repository, therefore, pushing the tag failed. If this happens, you just have to revert the newly created commit and tag manually by following the next steps:

1. Run `git tag` to double check what your tag was (the version upgrade you selected in the publish step)
2. Run `git tag -d v1.1.0` to delete tag from HEAD. IMPORTANT: replace v1.1.0 with the correct version you want to delete
3. Run `git push --delete origin v1.0.0` to delete remote tag from origin. IMPORTANT: replace v1.1.0 with the correct version you want to delete
4. Run `git reset HEAD~1 --hard` to undo the latest commit in your HEAD
5. Run `git push -f` to undo the latest commit in your ORIGIN (remote)
6. Authenticate and run again `npm run packages:publish`, hopefully this time it will work

#### Tests

##### Unit and Integration Testing with Jest and Testing Library

Run `npm run packages:test` to run your packages tests suites

##### Visual Testing with Chromatic

Visual testing is key to make sure your packages are in perfect condition before each release. This MonkeyRepo has chromatic already integrated with github actions. All you need to do to make it work is following the next steps:

1. Create an account in https://www.chromatic.com/
2. Add a project and ideally choose it from GitHub
3. Get your project's chromatic token
4. Go to your repository "settings" -> "Secrets and variables" -> "Actions"
5. Create a new repository secret with the name "CHROMATIC_PROJECT_TOKEN" and insert your chromatic token as its value

Now everytime you create a PR a new storybook build will be uploaded to Chromatic and you will be able to review it as part of your merge checks.

Also, there's a "chromatic" script available just in case you want to create a build manually, in which case you have to export an environment variable called CHROMATIC_PROJECT_TOKEN with your chromatic token as its value for the script to work.

For more information, visit [Chromatic's documentation](https://www.chromatic.com/docs/)

NOTE: If you are working with packages from another private monorepo in the chromatic.yml you have an example of how you could create your own .npmrc with your private repository credentials so your packages get correctly installed.

#### React Application

A react application is included in this repository just in case you want to develop your actual app directly here.
