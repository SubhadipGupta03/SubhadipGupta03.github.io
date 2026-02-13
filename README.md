# Personal Portfolio Website

A modern, responsive portfolio website to showcase your CV and projects.

## Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✅ **Modern UI** - Beautiful gradient hero section and smooth animations  
✅ **All Sections Included** - Home, About, Skills, Projects, CV, Contact  
✅ **Easy Customization** - Simple to modify with your own content  
✅ **Fast Loading** - Lightweight HTML, CSS, and JavaScript  
✅ **Mobile Friendly** - Mobile menu included  

## File Structure

```
WEBSITE/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
├── assets/             # Folder for images and documents
│   ├── profile.jpg     # Your profile picture (150x150px)
│   ├── project1.jpg    # Project image 1
│   ├── project2.jpg    # Project image 2
│   ├── project3.jpg    # Project image 3
│   └── CV.pdf          # Your CV/Resume PDF
└── README.md           # This file
```

## How to Customize

### 1. **Update Your Name & Title**
Open `index.html` and find:
```html
<h1>Hi, I'm [Your Name]</h1>
<p class="subtitle">Full Stack Developer | Designer | Problem Solver</p>
```
Replace `[Your Name]` and the subtitle with your information.

### 2. **Add Your Profile Picture**
- Add a photo (square, 300x300px recommended) to the `assets/` folder
- Name it `profile.jpg`
- The code will automatically display it

### 3. **Update About Section**
Replace the placeholder text with your real background and experience.

### 4. **Update Statistics**
Change the numbers and labels in the stats section:
```html
<div class="stat">
    <h3>10+</h3>
    <p>Projects Completed</p>
</div>
```

### 5. **Customize Skills**
Update the skill tags:
```html
<span class="tag">Your Skill Here</span>
```

### 6. **Add Your Projects**
For each project card, update:
- `project1.jpg` → your project screenshot
- Project title, description
- Technologies used
- Links to live demo and source code

### 7. **Add Your CV**
- Save your CV/Resume as PDF
- Name it `CV.pdf`
- Place it in the `assets/` folder
- The download button will work automatically

### 8. **Update Education & Experience**
Replace with your actual education and work history.

### 9. **Update Contact Information**
Replace with your actual:
- Email address
- Phone number
- Location
- Social media links (GitHub, LinkedIn, etc.)

### 10. **Update Social Links**
Find and update these links with your profiles:
```html
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://twitter.com/yourhandle" target="_blank">
```

## How to Use

### Option 1: View Locally
1. Double-click `index.html` to open in your browser
2. OR right-click and select "Open with" → Your favorite browser

### Option 2: Deploy Free Online

#### GitHub Pages (Recommended - Free)
1. Go to https://github.com/new
2. Create a new repository named `yourusername.github.io`
3. Upload your files to this repository
4. Your site will be live at `https://yourusername.github.io`

#### Netlify (Also Free)
1. Go to https://netlify.com
2. Drag and drop your folder
3. Get a free URL instantly

#### Vercel (Free)
1. Go to https://vercel.com
2. Import your project
3. Deploy with one click

### Option 3: Buy Custom Domain
1. Buy a domain from Namecheap, GoDaddy, or Google Domains
2. Connect it to your GitHub Pages, Netlify, or Vercel site

## Colors & Styling

Main colors used:
- **Primary Blue**: `#2563eb`
- **Dark Gray**: `#1f2937`
- **Light Gray**: `#f9fafb`

To change colors, edit the `:root` variables in `style.css`:
```css
:root {
    --primary-color: #2563eb;  /* Change this */
    --secondary-color: #1e40af;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f9fafb;
}
```

## Fonts

The website uses Google's default fonts (Segoe UI). To change:
1. Go to https://fonts.google.com
2. Find a font you like
3. Copy the import code
4. Paste it at the top of `style.css`
5. Update the `font-family` in CSS

## Image Sizes

Recommended image sizes:
- **Profile Picture**: 300x300px (square)
- **Project Images**: 600x400px (landscape)
- **File Size**: Keep under 500KB per image for fast loading

## Troubleshooting

**Images not showing?**
- Make sure images are in the `assets/` folder
- Check the filename matches exactly in HTML
- Ensure image format is JPG or PNG

**PDF not downloading?**
- Make sure `CV.pdf` is in the `assets/` folder
- Check the filename in the download link

**Mobile menu not working?**
- Clear browser cache (Ctrl+Shift+Delete)
- Open in a different browser
- Check JavaScript is enabled

## Tips for Success

1. **Use high-quality images** - Professional photos make a big difference
2. **Keep it up to date** - Update your projects regularly
3. **Add descriptions** - Tell the story of your work
4. **Link everything** - Connect your social profiles
5. **Test on mobile** - Always check on phones/tablets
6. **Get feedback** - Ask friends to review before sharing

## Need Help?

- Check image paths and filenames
- Inspect the HTML for placeholder text `[...]`
- Make sure all files are in correct folders
- Clear browser cache and refresh

## License

Free to use and modify for personal purposes.

---

**Happy building! Your portfolio is ready to impress!** 🚀
