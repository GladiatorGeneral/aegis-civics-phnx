module.exports = {
  defaults: {
    timeout: 30000,
    threshold: 0,
    hideElements: '',
    ignore: [
      'notice',  // Ignore WCAG 2.1 AA notices
      'warning'  // Ignore warnings
    ],
    runners: [
      'axe',      // Primary runner
      'htmlcs'    // Additional checks
    ],
    chromeLaunchConfig: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  },
  urls: [
    'http://localhost:3000/',
    'http://localhost:3000/leadership',
    'http://localhost:3000/goals'
  ],
  standards: {
    wcag2a: true,
    wcag2aa: true,
    wcag2aaa: false,
    section508: true
  }
};
