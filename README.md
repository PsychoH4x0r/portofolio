# Portfolio Website Modern

Website portfolio modern dengan animasi dan efek visual yang keren. Website ini dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa framework.

## Fitur

- Desain modern dan responsif
- Animasi scroll yang smooth
- Efek parallax
- Efek glitch pada teks
- Animasi hover yang interaktif
- Particle effect di background
- Dark mode
- Mendukung multiple bahasa (EN/ID)
- Optimized untuk performa

## Cara Menggunakan

1. Clone repository ini
2. Buka file `index.html` di browser
3. Untuk mengedit konten:
   - Edit teks di `index.html`
   - Modifikasi style di `css/style.css`
   - Sesuaikan animasi di `js/main.js`

## Struktur Folder

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── (tempat untuk gambar-gambar)
```

## Kustomisasi

### Mengubah Warna
Untuk mengubah skema warna, edit variabel CSS di bagian atas file `style.css`:

```css
:root {
    --bg-color: #0a0a0a;
    --text-color: #ffffff;
    --accent-color: #ff00ff;
    --secondary-color: #2d2d2d;
}
```

### Menambah Proyek
Tambahkan proyek baru dengan mengcopy template project card di `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/project.jpg" alt="Project">
    </div>
    <div class="project-info">
        <h3>Nama Proyek</h3>
        <p>Deskripsi proyek</p>
        <div class="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn">Live Demo</a>
            <a href="#" class="btn">GitHub</a>
        </div>
    </div>
</div>
```

## Performance Tips

- Kompres gambar sebelum diupload
- Minify file CSS dan JavaScript untuk production
- Gunakan lazy loading untuk gambar
- Optimalkan font loading dengan `font-display: swap`

## Browser Support

- Chrome (terakhir)
- Firefox (terakhir)
- Safari (terakhir)
- Edge (terakhir)

## License

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan 
