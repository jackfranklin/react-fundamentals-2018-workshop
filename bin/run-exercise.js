const Bundler = require('parcel-bundler')
const path = require('path')
const chalk = require('chalk')

const { argv } = require('yargs')

const exerciseNumber = argv._[0]

if (!exerciseNumber) {
  console.log(chalk.red('No exercise number found!'))
  process.exit(1)
}

const exercisePath = path.join(
  'exercises',
  String(exerciseNumber),
  'index.html'
)

const file = path.join(process.cwd(), exercisePath)

console.log('Running on', chalk.blue(exercisePath))

const bundler = new Bundler(file)

bundler.serve(1234)
