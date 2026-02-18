const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SITE_URL = 'https://yss007895-code.github.io/stylemedaily-web';

function getNewPosts() {
  try {
    // git diff로 새로 추가된 slug 찾기
    const diff = execSync('git diff HEAD~1 HEAD -- src/lib/guides-data.ts', { encoding: 'utf8' });
    const addedSlugs = [];
    const lines = diff.split('\n');
    for (const line of lines) {
      if (line.startsWith('+') && !line.startsWith('+++')) {
        const match = line.match(/slug:\s*['"]([^'"]+)['"]/);
        if (match) addedSlugs.push(match[1]);
      }
    }
    return addedSlugs;
  } catch (e) {
    console.log('No previous commit or error:', e.message);
    return [];
  }
}

const newPosts = getNewPosts();
console.log('New posts found:', newPosts);

if (newPosts.length > 0) {
  const urls = newPosts.map(slug => `${SITE_URL}/blog/${slug}`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `has_new_posts=true\n`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `new_posts=${JSON.stringify(urls)}\n`);
} else {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `has_new_posts=false\n`);
}
