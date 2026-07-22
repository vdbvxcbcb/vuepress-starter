const path = require('path')

module.exports = {
  name: 'project-active-header-links',
  define: {
    AHL_SIDEBAR_LINK_SELECTOR: '.sidebar-link',
    AHL_HEADER_ANCHOR_SELECTOR: '.header-anchor'
  },
  clientRootMixin: path.resolve(__dirname, 'active-header-links-client.js')
}
