'use strict'
// 该文件是检察node和npm版本的。

// 引入chalk插件，作用是在控制台中输入不同颜色的字。
const chalk = require('chalk')
// semver插件，是用来对特的版本号来做判断的，例如
// semver.gt('1.2.3','9.8.7')false 1.2.3版本比9.8.7版本低。
// semver.satisfies('1.2.3',"1.x || >=2.5.0 || 5.00 - 7.2.3') true 1.2.3符合后面的规则。
const semver = require('semver')
// 导入package.json文件，要使用里面的engines选项，注意require是直接可以导入json文件的，并且require返回的就是json对象。
const packageConfig = require('../package.json')
// 这个插件是shelljs，作用是用来执行Unix系统命令。
const shell = require('shelljs')
// 下面设计了很多Unix命令，然而，我不太懂。。。
function exec (cmd) {
  // 脚本可以通过child_process模块新建子进程，从而执行Unix系统命令。
  // 下面这段代码实际上就是把cmd这个参数的传递转化为前后没有空格的字符串，也就是版本号。
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node', // node版本的信息。
    currentVersion: semver.clean(process.version), // 使用semver插件把版本信息转化为规定的格式，也就是 '=v1.2.3' -> '1.2.3'这种功能。
    versionRequirement: packageConfig.engines.node// 这是规定的package.json中engines选项的版本信息，"node":">=4.00"
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'), // 自动调用npm --version命令，并把参数返回给exec函数，从而获得纯净的版本号。
    versionRequirement: packageConfig.engines.npm// 这是规定的package.json中engines选项的node版本信息 "npm":">=3.0.0"
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      // 上面这个就是如果当前的版本号不符合package.json文件中指定的版本号，就会执行以下代码。
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
      // 意思是 当前的版本号用红色字体标出，符合要求的版本号用绿色字体标出，给用户提示。
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
    // 提示用户更新版本。
  }
}
