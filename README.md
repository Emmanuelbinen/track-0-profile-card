# track-0-profile-card
This project implements a responsive and accessible profile card component using only HTML, CSS, and JavaScript. 



## ✨ Features

- 🎨 Red & white color scheme with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Keyboard accessible with screen reader support
- 🖼️ Click avatar to upload custom photo
- ⏱️ Live-updating timestamp
- 🧪 Test-ready with data-testid attributes


## 🚀 Quick Start

### What You Need
- A web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- That's it! No installations required.

### Running Locally

1. **Download/Create the files**
   - Create a folder called `profile-card`
   - Add these three files: `index.html`, `styles.css`, `script.js`

2. **Open in browser**
   - Double-click `index.html`, OR
   - Drag `index.html` into your browser, OR
   - Right-click `index.html` → Open With → Your Browser

3. **Done!** 🎉 You should see the profile card.

---

## 📁 File Structure

```
profile-card/
├── index.html    (Structure)
├── styles.css    (Styling)
└── script.js     (Functionality)
```

**Important:** All three files must be in the same folder!

---

## 🎨 Quick Customization

### Change Profile Info
Edit `index.html`:
```html
<h2 class="user-name">Your Name</h2>
<p class="user-bio">Your bio here</p>
```

### Change Colors
Edit `styles.css` (top of file):
```css
:root {
    --primary-red: #dc2626;    /* Your main color */
    --primary-white: #ffffff;  /* Your accent color */
}
```

**Try these colors:**
- Blue: `#2563eb`
- Green: `#16a34a`
- Purple: `#9333ea`

### Update Social Links
Edit `index.html`:
```html
<a href="https://twitter.com/YOUR_USERNAME" ...>
```

---

## 🎮 Interactive Features

- **Avatar Upload:** Click the profile picture to upload your own
- **Live Time:** Updates every second automatically
- **Social Links:** Hover for animations, click to visit profiles

---

## 📱 Test Responsiveness

1. Press `F12` in browser (or `Cmd+Option+I` on Mac)
2. Click device icon (phone/tablet symbol)
3. Select different screen sizes

---

## 🐛 Troubleshooting

| Problem                   |                     Solution                      |
|---------------------------|---------------------------------------------------|
| Page is blank             | Check all files are in the same folder            |
| No styling                | File must be named `styles.css` (lowercase)       |
| Timestamp not updating    | File must be named `script.js` (lowercase)        |
| Avatar upload not working | Normal when opening locally; works on web servers |

### Quick Fix Steps:
1. All files in same folder? ✓
2. Files named correctly? ✓
3. Saved all changes? ✓
4. Refreshed browser? ✓

---

## 💡 Beginner Tips

- **Start simple:** Get it running first, then customize
- **Experiment:** Change colors and text to see what happens
- **Use F12:** Opens developer tools to inspect elements
- **Google errors:** Copy error messages and search them

---

## 📚 Learn More

- [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

---

## 🎯 Next Steps

Once comfortable, try adding:
- Contact button
- More social networks
- Skills section
- Dark mode toggle
- Additional sections

---

## ❓ FAQ

**Q: Do I need to install anything?**  
A: No! Runs directly in your browser.

**Q: Can I use this for my portfolio?**  
A: Yes! Customize and make it yours.

**Q: How do I put this online?**  
A: Use GitHub Pages, Netlify, or Vercel (all free).

**Q: Why is the timestamp so long?**  
A: It shows milliseconds (intentional per requirements).

---

## 📄 License

Free to use for learning and personal projects.

---

**Happy coding! 🚀**

Need help? Check the files are in the same folder and named correctly!