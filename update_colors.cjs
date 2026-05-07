const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

const replacements = [
  { search: /#f8fafc/g, replace: 'var(--input-bg)' },
  { search: /#e2e8f0/g, replace: 'var(--input-border)' },
  { search: /#f1f5f9/g, replace: 'var(--border-color)' },
  { search: /var\(--navy-800\)/g, replace: 'var(--text-main)' },
  { search: /#334155/g, replace: 'var(--text-main)' },
  { search: /#64748b/g, replace: 'var(--text-muted)' },
  { search: /#94a3b8/g, replace: 'var(--text-muted)' },
  { search: /var\(--navy-900\)/g, replace: 'var(--text-main)' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      replacements.forEach(r => {
        content = content.replace(r.search, r.replace);
      });
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  });
}

dirs.forEach(processDir);
console.log('Done.');
