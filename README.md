# Personal Portfolio Website

A modern, responsive portfolio website to showcase your CV and projects.

## ✨ Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✅ **Modern UI** - Beautiful gradient hero section and smooth animations  
✅ **All Sections Included** - Home, About, Skills, Projects, CV, Contact  
✅ **Easy Customization** - Simple to modify with your own content  
✅ **Fast Loading** - Lightweight HTML, CSS, and JavaScript  
✅ **Mobile Friendly** - Mobile menu included  

## 📁 File Structure

```
WEBSITE/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
├── assets/             # Folder for images and documents
│   ├── profile.jpg     # Your profile picture (300x300px)
│   ├── project1.jpg    # Project image 1
│   ├── project2.jpg    # Project image 2
│   ├── project3.jpg    # Project image 3
│   └── CV.pdf          # Your CV/Resume PDF
└── README.md           # This file
```

## 🚀 Quick Start

### Step 1: Open Website Locally
1. Open `index.html` in your web browser
2. You'll see the portfolio template with placeholders

### Step 2: Customize Your Information
Edit `index.html` and replace:
- `[Your Name]` → Your actual name
- `Full Stack Developer | Designer | Problem Solver` → Your headline
- Your bio, skills, projects, education, experience

### Step 3: Add Your Images
Create an `assets/` folder and add:
- `profile.jpg` - Your photo (300x300px, square)
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots
- `CV.pdf` - Your resume/CV file

### Step 4: Update Links
Replace placeholder links with:
- Email: `mailto:your.email@example.com`
- Phone: `tel:+1234567890`
- Social links: GitHub, LinkedIn, Twitter URLs

## 🎨 How to Customize

### Update Your Name & Title (index.html)
```html
<h1>Hi, I'm [Your Name]</h1>
<p class="subtitle">Your Profession | Your Title | Your Focus</p>
```

### Add Profile Picture
- Save a square photo as `profile.jpg` in `assets/` folder
- Photo should be at least 300x300px
- Website will display it automatically

### Update About Section
Find this section and replace with your real information:
```html
<p>I'm a passionate developer with [X] years of experience...</p>
<p>My journey started with [brief background]...</p>
<p>When I'm not coding, you can find me [hobbies]...</p>
```

### Update Statistics
Change numbers and labels:
```html
<div class="stat">
    <h3>10+</h3>          <!-- Change this number -->
    <p>Projects Completed</p>  <!-- Change this label -->
</div>
```

### Customize Skills
Update skill tags:
```html
<span class="tag">HTML/CSS</span>
<span class="tag">JavaScript</span>
<span class="tag">React</span>
```

### Add Your Projects
For each project card, update:
- Image file in `assets/`
- Project title and description
- Technologies used
- Links to live demo and source code

### Add Your CV
1. Save your resume as `CV.pdf`
2. Place in `assets/` folder
3. Download button will work automatically

### Update Education & Experience
Replace placeholder with your actual:
- School/University name and graduation year
- Company name and job titles
- Descriptions of achievements

### Update Contact Information
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

### Update Social Links
```html
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://twitter.com/yourhandle" target="_blank">
```

## 🎨 Colors & Styling

Main colors in `style.css`:
```css
--primary-color: #2563eb;      /* Blue */
--secondary-color: #1e40af;    /* Dark Blue */
--text-dark: #1f2937;          /* Dark Gray */
--text-light: #6b7280;         /* Light Gray */
--bg-light: #f9fafb;           /* Very Light Gray */
```

To change theme colors, edit these values in `style.css`.

## 📸 Image Recommendations

| Purpose | Size | Format | Notes |
|---------|------|--------|-------|
| Profile | 300x300px | JPG/PNG | Square, professional |
| Projects | 600x400px | JPG/PNG | Landscape orientation |
| File Size | <500KB each | JPG/PNG | Keep small for fast loading |

## 🌍 Deploy Online (Free Options)

### Option 1: GitHub Pages (Recommended)
1. Create GitHub account at https://github.com
2. Create new repository named `yourusername.github.io`
3. Upload your files to the repository
4. Visit `https://yourusername.github.io` - Done!

### Option 2: Netlify (Super Easy)
1. Go to https://netlify.com
2. Drag & drop your website folder
3. Get a free URL instantly
4. (Optional) Connect custom domain

### Option 3: Vercel (Also Easy)
1. Go to https://vercel.com
2. Import your project
3. Deploy with one click
4. Get instant URL

### Option 4: Custom Domain
1. Buy domain from Namecheap, GoDaddy, Google Domains (~$10/year)
2. Connect to GitHub Pages, Netlify, or Vercel
3. Follow platform's domain instructions

## 🔧 Troubleshooting

**Images not showing?**
- Verify files are in `assets/` folder
- Check filenames match exactly in HTML
- Ensure formats are JPG or PNG

**PDF download not working?**
- Check `CV.pdf` is in `assets/` folder
- Verify filename in HTML matches exactly

**Mobile menu not working?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check JavaScript is enabled

**Website looks broken?**
- Check all files are in correct location
- Try opening in different browser
- Make sure you're using the latest version

## 💡 Pro Tips

1. **Use professional photos** - Quality images make huge difference
2. **Keep updated** - Add new projects regularly
3. **Write descriptions** - Tell story of your work
4. **Link everything** - Connect all social profiles
5. **Test on mobile** - Always check on phones
6. **Get feedback** - Ask friends to review
7. **SEO** - Add your name to title and description
8. **Fast loading** - Compress images before uploading

## 📋 Checklist Before Sharing

- [ ] Profile photo added
- [ ] Your name and title updated
- [ ] About section filled in
- [ ] Skills list completed
- [ ] 3+ projects added with images
- [ ] Education and experience added
- [ ] CV/Resume PDF added
- [ ] Contact information updated
- [ ] All social links connected
- [ ] Tested on mobile
- [ ] Deployed online

## 🎓 Learning Resources

- **HTML Tutorial**: https://www.w3schools.com/html/
- **CSS Tutorial**: https://www.w3schools.com/css/
- **JavaScript**: https://www.w3schools.com/js/
- **Responsive Design**: https://www.w3schools.com/css/css_rwd_intro.asp

## 📞 Need Help?

- Check the comments in HTML for section markers
- Review this README for customization steps
- Test in browser after each change
- Use browser DevTools (F12) to debug

## 📄 License

Free to use and modify for personal purposes.

---

**Your professional portfolio is ready!** 🚀

Edit your information, add your images, and share your amazing work with the world!
