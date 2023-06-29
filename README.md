# MonkeyRepo 🐒

## Initialization

Run `npm i && npm run packages:build` to install all the dependencies you need to run the monorepo and build the packages for the first time.

## After Initialization

### Create new component

Keep it simple, just duplicate the "component" folder which is intended to serve as a "template" for creating new components and which is ignored by the publishing process. Below, a checklist just to make sure you do it right:

- [ ] Duplicate the "component" folder
- [ ] Rename the files under src following the naming convention
- [ ] Change the README.md to match the component information.
- [ ] Edit the package.json
  - [ ] Remove the "private" property
  - [ ] Change the "name"
  - [ ] Change the "description"

### Storybook

Run `npm run storybook:develop` to run storybook and see your components

### Tests

Run `npm run packages:test` to run your components tests suites

### Publish

1. Change the necessary files
2. Commit your changes
3. Make sure you are targeting the correct registry in the file lerna.json > command > publish > registry
4. Run `npm run packages:publish`
5. Select the correct version upgrade (More info about Semantic Versioning -> https://semver.org/lang/es/)

#### Publish fail 🙈

##### Probably, you forgot to authenticate to your repository, therefore, pushing the tag failed. If this happens, you just have to revert the newly created commit and tag manually by following the next steps:

- Run `git tag` to double check what your tag was (the version upgrade you selected in the publish step)
- Run `git tag -d v1.1.0` to delete tag from HEAD. IMPORTANT: replace v1.1.0 with the correct version you want to delete
- Run `git push --delete origin v1.0.0` to delete remote tag from origin. IMPORTANT: replace v1.1.0 with the correct version you want to delete
- Run `git reset HEAD~1 --hard` to undo the latest commit in your HEAD
- Run `git push -f` to undo the latest commit in your ORIGIN (remote)
- Authenticate and run again `npm run packages:publish`, hopefully this time it will work
