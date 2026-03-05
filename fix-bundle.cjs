const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

console.log('Original content length:', content.length);

// 1. Remove type="module" and crossorigin
content = content.replace(/type="module"/g, '');
content = content.replace(/crossorigin/g, '');

// 2. Remove the modulepreload polyfill IIFE
// The polyfill starts with (function(){const t=document.createElement("link").relList;
// and ends with fetch(l.href,o)}})();
const polyfillRegex = /\(function\(\)\{const t=document\.createElement\("link"\)\.relList;[\s\S]*?fetch\(l\.href,o\)\}\}\)\(\);/g;
const hasPolyfill = polyfillRegex.test(content);
if (hasPolyfill) {
    console.log('Found modulepreload polyfill. Removing it...');
    content = content.replace(polyfillRegex, '');
} else {
    console.log('Modulepreload polyfill not found or already removed.');
}

// 3. Remove any remaining modulepreload links
content = content.replace(/<link rel="modulepreload"[\s\S]*?>/g, '');

// 4. Ensure there are no absolute paths starting with /
// Except for data: URLs and https:// URLs.
// We look for src="/... or href="/... but NOT src="data: or src="https:
// Content inside the dashboard is expected to be relative or inlined.
// However, since it's single-file, there shouldn't be any external file references.
// Let's just do a sanity check on common attributes.
content = content.replace(/src="\//g, 'src="./');
content = content.replace(/href="\//g, 'href="./');

console.log('New content length:', content.length);

fs.writeFileSync(indexPath, content);
console.log('Successfully patched dist/index.html for local file support.');
