const fs = require('fs');
let code = fs.readFileSync('const/soutations.ts', 'utf8');

// Replace icon for 'Cerulea Private Chain'
code = code.replace(/(\{.*?label:\s*"Cerulea Private Chain".*?icon:\s*)([a-zA-Z0-9_]+)(.*?\})/g, '$1Server$3');

// Replace icon for 'Cerulea Public L1'
code = code.replace(/(\{.*?label:\s*"Cerulea Public L1".*?icon:\s*)([a-zA-Z0-9_]+)(.*?\})/g, '$1Cpu$3');

fs.writeFileSync('const/soutations.ts', code);
console.log('Icons updated successfully');
