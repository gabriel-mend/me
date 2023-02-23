const { readdirSync } = require('fs')
const path = require('path')

const getDirectories = (source, onlyDirectories = false) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => onlyDirectories ? dirent.isDirectory() : dirent)
    .map(dirent => dirent.name)

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'componentDivision',
        message: 'What is the component split?',
        choices: getDirectories(path.resolve(__dirname, '../src/components'), true),
        default: 'shared'
      },
      {
        type: 'list',
        name: 'pageComponent',
        message: 'What is the page?',
        choices: getDirectories(path.resolve(__dirname, '../src/components/screens')),
        when: (answer) => {
          return answer.componentDivision === 'screens'
        }
      },
      {
        type: 'list',
        name: 'sharedComponent',
        message: 'What is the shared?',
        choices: getDirectories(path.resolve(__dirname, '../src/components/shared'), true),
        default: 'layout',
        when: (answer) => {
          return answer.componentDivision === 'shared'
        }
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
    ],
    actions: (answers) => {
      const getActionsByComponentPathname = (componentPathname) => [
        {
          type: 'add',
          path: `../src/components/${componentPathname}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'templates/components/component.tsx.hbs'
        },
        {
          type: 'add',
          path: `../src/components/${componentPathname}/{{pascalCase name}}/{{pascalCase name}}.styles.ts`,
          templateFile: 'templates/components/component.styles.ts.hbs'
        },
        {
          type: 'add',
          path: `../src/components/${componentPathname}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx`,
          templateFile: 'templates/components/component.spec.tsx.hbs'
        }
      ]

      const actions = answers.componentDivision === 'screens' 
        ? getActionsByComponentPathname(`screens/{{pageComponent}}`) 
        : getActionsByComponentPathname(`shared/{{sharedComponent}}`)


      return actions
    }
  })
}
