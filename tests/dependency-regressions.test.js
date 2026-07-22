const fs = require('fs')
const path = require('path')
const test = require('node:test')
const assert = require('node:assert/strict')

const root = path.resolve(__dirname, '..')

test('the repository uses Yarn as its only package manager', () => {
  const packageJson = require(path.join(root, 'package.json'))

  assert.equal(packageJson.packageManager, 'yarn@1.22.22')
  assert.equal(fs.existsSync(path.join(root, 'yarn.lock')), true)
  assert.equal(fs.existsSync(path.join(root, 'package-lock.json')), false)
})

test('the legacy VuePress toolchain uses Node 16 LTS', () => {
  const packageJson = require(path.join(root, 'package.json'))
  const nvmrcPath = path.join(root, '.nvmrc')

  assert.deepEqual(packageJson.engines, { node: '16.x' })
  assert.equal(fs.existsSync(nvmrcPath), true)
  const nvmrc = fs.readFileSync(nvmrcPath, 'utf8').trim()
  assert.equal(nvmrc, '16.20.2')
})

test('the Yarn lockfile does not use retired registry hosts', () => {
  const lockfile = fs.readFileSync(path.join(root, 'yarn.lock'), 'utf8')

  assert.doesNotMatch(lockfile, /registry\.(?:npm\.taobao\.org|nlark\.com)/)
})

test('the reco sub-sidebar does not scroll the document to its active link', () => {
  const packageJson = require(path.join(root, 'package.json'))
  const subSidebarPath = path.join(
    root,
    'node_modules',
    'vuepress-theme-reco',
    'components',
    'SubSidebar.vue'
  )

  assert.equal(packageJson.dependencies['vuepress-theme-reco'], '1.6.17')
  assert.equal(fs.existsSync(subSidebarPath), true)
  assert.doesNotMatch(fs.readFileSync(subSidebarPath, 'utf8'), /scrollIntoView\s*\(/)
})

test('the reco smooth-scroll plugin is disabled to avoid anchor races', () => {
  const config = require(path.join(root, 'docs', '.vuepress', 'config.js'))
  const smoothScroll = config.plugins.find(([name]) => (
    name === 'vuepress-plugin-smooth-scroll'
  ))

  assert.deepEqual(smoothScroll, ['vuepress-plugin-smooth-scroll', false])
})

test('custom anchor scrolling replaces the disabled smooth-scroll plugin', () => {
  const config = require(path.join(root, 'docs', '.vuepress', 'config.js'))
  const pluginNames = config.plugins
    .filter(plugin => plugin && typeof plugin === 'object' && plugin.name)
    .map(plugin => plugin.name)

  assert.ok(pluginNames.includes('project-smooth-scroll'))
  assert.ok(pluginNames.includes('project-active-header-links'))

  const smoothScrollClient = fs.readFileSync(
    path.join(root, 'docs', '.vuepress', 'plugins', 'smooth-scroll-client.js'),
    'utf8'
  )
  assert.match(smoothScrollClient, /decodeURIComponent\(to\.hash\)/)
  assert.match(smoothScrollClient, /behavior:\s*['"]smooth['"]/) 
})
