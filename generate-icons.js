const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'frontend', 'public', 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 1x1 transparent PNG base64
const transparentPngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const buffer = Buffer.from(transparentPngBase64, 'base64');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
  const fileName = `icon-${size}x${size}.png`;
  const filePath = path.join(iconsDir, fileName);
  fs.writeFileSync(filePath, buffer);
  console.log(`Generated ${fileName}`);
});
