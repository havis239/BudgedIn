const fs = require('fs');
const path = require('path');

const hapusDirs = ['budgets', 'dashboard', 'goals', 'profile', 'reports', 'transactions'];
const basePath = path.join(__dirname, 'frontend', 'src', 'app');

console.log("Memulai penghapusan folder duplikat...");

hapusDirs.forEach(dir => {
  const fullPath = path.join(basePath, dir);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`✅ Berhasil menghapus: frontend/src/app/${dir}`);
  } else {
    console.log(`ℹ️ Folder tidak ditemukan (sudah terhapus): frontend/src/app/${dir}`);
  }
});

console.log("\nSelesai! Silakan restart server Next.js Anda.");
