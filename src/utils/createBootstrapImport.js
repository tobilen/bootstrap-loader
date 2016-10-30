import path from 'path';
import semver from 'semver';

/**
 * Creates SASS @import string for bootstrap module
 *
 * @param {string} module
 * @param {number} bootstrapVersion
 * @param {string} bootstrapPath
 * @returns {string}
 */
export default function(module, bootstrapVersion, bootstrapPath) {
  const stylesPath = (
    semver.major(bootstrapVersion) === 3 ?
    ['assets', 'stylesheets', 'bootstrap'] :
    ['scss']
  );
  const bootstrapModule = path.join(bootstrapPath, ...stylesPath, `_${module}`);
  return `@import "${bootstrapModule}";`;
}
