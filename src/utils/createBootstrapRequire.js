import path from 'path';

/**
 * Creates Node require string for Bootstrap module
 *
 * @param {string} module
 * @param {number} bootstrapVersion
 * @param {string} bootstrapPath
 * @returns {string}
 */
export default function(module, bootstrapVersion, bootstrapPath) {
  var scriptsPath
  switch(bootstrapVersion) {
    case "4.0.0-alpha.5":
      scriptsPath = ['js', 'dist']
      break;
    case "4":
      scriptsPath = ['dist', 'js', 'umd']
      break;
    case "3":
      scriptsPath = ['assets', 'javascripts', 'bootstrap']
      break;
  }
  const bootstrapModule = path.join(bootstrapPath, ...scriptsPath, module);
  return `require (${JSON.stringify(bootstrapModule)});`;
}
