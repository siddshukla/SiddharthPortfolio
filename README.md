# 🚀 Modern Portfolio Website - Siddharth Shukla

<div align="center">
  <br />
  <a href="https://siddharthshukla.tech/" target="_blank">
    <img src="https://github.com/siddshukla/SiddharthPortfolio/blob/main/2.jpg" alt="Siddharth Shukla Portfolio Banner" width="100%">
  </a>
  <br />
  <br />
  
  ![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Lucide Icons](https://img.shields.io/badge/-Lucide%20Icons-FD4D4D?style=for-the-badge&logo=lucide&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
  
  <h3 align="center">🎨 A stunning, responsive developer portfolio showcasing modern web development skills</h3>
  
  <p align="center">
    <a href="https://siddharthshukla.tech/" target="_blank"><strong>🌐 Live Demo</strong></a> ·
    <a href="#-features"><strong>✨ Features</strong></a> ·
    <a href="#-quick-start"><strong>🚀 Quick Start</strong></a> ·
    <a href="#-contact"><strong>📧 Contact</strong></a>
  </p>
  
  
</div>

---

## 🎯 About This Project

Welcome to my personal portfolio website! This project represents the culmination of modern web development practices, showcasing my skills as a **Full-Stack Developer** and **UI/UX Enthusiast**. Built with cutting-edge technologies, this portfolio demonstrates my ability to create visually stunning, performant, and accessible web applications.

### 🌟 Why This Portfolio Stands Out

- **🎨 Pixel-Perfect Design**: Every component is crafted with attention to detail
- **⚡ Lightning Fast**: Optimized for performance with lazy loading and code splitting
- **🌙 Dual Theme Support**: Seamless dark/light mode with system preference detection
- **📱 Mobile-First**: Responsive design that works beautifully on all devices
- **♿ Accessibility**: WCAG compliant with semantic HTML and proper ARIA labels
- **🔧 Developer Experience**: Clean code architecture with modern JavaScript and ESLint

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="100">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React 18
    </td>
    <td align="center" width="100">
      <img src="https://skillicons.dev/icons?i=js" width="48" height="48" alt="JavaScript" />
      <br>JavaScript ES6+
    </td>
    <td align="center" width="100">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      <br>Tailwind CSS
    </td>
    <td align="center" width="100">
      <img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
      <br>Vite
    </td>
    <td align="center" width="100">
      <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
      <br>Vercel
    </td>
  </tr>
</table>

### 📚 Additional Libraries & Tools

- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **React Hook Form** - Form validation and management
- **React Hot Toast** - Elegant notification system
- **Intersection Observer API** - Scroll-triggered animations
- **CSS Grid & Flexbox** - Modern layout techniques

---

## ✨ Features

### 🎭 **Interactive Hero Section**
- Animated typing effect with my professional titles
- Particle background with mouse interaction
- Call-to-action buttons with hover effects
- Social media integration

### 🧑‍💻 **About Me Section**
- Professional journey timeline
- Skills showcase with animated progress bars
- Downloadable resume functionality
- Personal interests and hobbies

### 💼 **Projects Showcase**
- Interactive project cards with hover animations
- Technology stack badges
- Live demo and GitHub repository links
- Detailed project descriptions
- Image galleries with lightbox functionality

### 🎨 **Skills & Expertise**
- Categorized skill sets (Frontend, Backend, Tools, etc.)
- Visual proficiency indicators
- Interactive filtering system
- Technology logos and descriptions

### 📞 **Contact Section**
- Working contact form with email integration
- Social media links
- Location and availability information
- Toast notifications for form submissions

### 🌙 **Advanced Features**
- **Theme Switching**: Persistent dark/light mode with smooth transitions
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Lazy loading, image optimization, and code splitting
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Accessibility**: Keyboard navigation, screen reader support, and WCAG compliance

---

## 📊 Project Structure

```
portfolio-website/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🏠 Hero/
│   │   ├── 👨‍💻 About/
│   │   ├── 💼 Projects/
│   │   ├── 🎯 Skills/
│   │   ├── 📞 Contact/
│   │   └── 🧩 UI/
│   ├── 📁 hooks/
│   ├── 📁 utils/
│   ├── 📁 styles/
│   ├── 📁 assets/
│   │   └── 🖼️ images/
│   └── 📄 App.jsx
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 vite.config.js
└── 📖 README.md
```

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/siddharthshukla/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your configuration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### 🏗️ Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed

### Alternative Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` branch
- **Firebase Hosting**: Use Firebase CLI

---

## 📸 Screenshots

<div align="center">
  <h3>🌅 Hero Section</h3>
  <img src="https://github.com/siddshukla/SiddharthPortfolio/blob/main/1.jpg" alt="Hero Section" width="80%">
  
  <h3>💼 Projects Showcase</h3>
  <img src="https://github.com/siddshukla/SiddharthPortfolio/blob/main/3.jpg" alt="Projects Section" width="80%">
  
  <h3>🌙 Dark Mode</h3>
  <img src="https://github.com/siddshukla/SiddharthPortfolio/blob/main/2.jpg" alt="Dark Mode" width="80%">
  
  <h3>📱 Mobile Responsive</h3>
  <img src="https://github.com/siddshukla/SiddharthPortfolio/blob/main/4.jpg" alt="Mobile View" width="40%">
</div>

---

## 🎨 Customization Guide

### 🎯 Personal Information

Update the following files with your information:
- `src/data/personal.js` - Personal details, social links
- `src/data/projects.js` - Your projects and achievements
- `src/data/skills.js` - Your technical skills
- `src/assets/resume.pdf` - Your latest resume

### 🎨 Styling

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Customize Framer Motion variants in component files

### 📧 Contact Form

1. Create an EmailJS account
2. Set up email templates
3. Update environment variables
4. Configure form validation rules

---

## 🤝 Contributing

I welcome contributions, issues, and feature requests! Feel free to check the [issues page](https://github.com/siddharthshukla/portfolio-website/issues).

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📈 Performance & Analytics

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Excellent ratings across all metrics
- **Bundle Size**: Optimized with code splitting and lazy loading
- **Analytics**: Integrated with Google Analytics (optional)

---

## 🐛 Known Issues & Solutions

<details>
<summary>Click to expand troubleshooting guide</summary>

### Issue: Animations not working
**Solution**: Ensure Framer Motion is properly installed and imported.

### Issue: Contact form not sending emails
**Solution**: Verify EmailJS configuration and environment variables.

### Issue: Images not loading in production
**Solution**: Check image paths and ensure they're properly imported in the src/assets directory.

</details>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- Design inspiration from [Dribbble](https://dribbble.com) and [Behance](https://behance.net)
- Icons provided by [Lucide Icons](https://lucide.dev)
- Animations powered by [Framer Motion](https://framer.com/motion)
- Hosting provided by [Vercel](https://vercel.com)

---

## 📞 Contact

<div align="center">
  
  **Siddharth Shukla**  
  Full-Stack Developer & UI/UX Enthusiast
  
  [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/siddharthshukla)
  [![Portfolio](https://img.shields.io/badge/-Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://siddharthshukla.tech/)
  [![Email](https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:siddharth.dev@gmail.com)
  [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/siddharthshukla)
  
  📍 **Location**: India  
  📧 **Email**: siddsanskshukla@gmail.com  
  🌐 **Website**: [siddharthshukla.tech](https://siddharthshukla.tech/)
  
</div>

---

<div align="center">
  <h3>⭐ If you found this project helpful, please give it a star!</h3>
  <p>Made with ❤️ by Siddharth Shukla</p>
  
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with Love">
  <img src="https://forthebadge.com/images/badges/powered-by-coffee.svg" alt="Powered by Coffee">
</div>
