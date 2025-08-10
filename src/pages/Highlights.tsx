import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./Highlights.scss";

const md = `<!-- The "Hello there" greeting -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=130&color=gradient&text=Hey%20😁&reversal=false&fontAlignY=34"/>
</p>

<!-- LinkedIn badge that redirects to my official LinkedIn profile -->
<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/bmmasi1/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white&style=for-the-badge" alt="LinkedIn Badge"/>
  </a>
</div>

<!-- The profile views button -->
<div id="badges" align="center">
  <img src="https://komarev.com/ghpvc/?username=branley1&style=flat-square&color=blue" alt=""/>
</div>

<h2 align="center">
  <a><i>
    <img src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false)](https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true)" align="center">
    </img>
  </i>
  </a>
</h2>

### Hi, I'm Branley Mmasi!

- 🔭 Currently building a full-stack chat application powered by fine-tuned local LLMs. It’s my hands-on way of exploring deep learning and AI infrastructure.
- 🌱 I recently explored OCaml in my Compilers course, and dabbled with JUCE for crafting audio plugins.
- 👯 I enjoy collaborating on open source—especially projects that focus on interactivity, usability, or cool UIs across web, iOS, and beyond.
- 📫 Reach out: [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/bmmasi1/)
- 🖥️ Portfolio: [<img src="https://github.com/branley1/portfolio-react/blob/main/public/portfolio-logo.png" title="portfolio-logo" alt="Portfolio logo" width="20" height="20"/>&nbsp; Bmmasi portal](https://bmmasi.com)

---

### 🛠️ Languages and Tools:

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original-wordmark.svg" title="Python3" alt="Python3" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/c/c-original.svg" title="C" **alt="C" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/jupyter/jupyter-original-wordmark.svg" title="Jupyter Notebook" alt="Jupyter" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/java/java-original-wordmark.svg" title="Java" alt="Java" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/ocaml/ocaml-original-wordmark.svg" title="OCaml" alt="Ocaml" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/unity/unity-original-wordmark.svg" title="Unity" alt="Unity" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB" **alt="MongoDB" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" **alt="TypeScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/kaggle/kaggle-original-wordmark.svg" title="Kaggle" **alt="Kaggle" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/matplotlib/matplotlib-original-wordmark.svg" title="Matplotlib" **alt="Matplotlib" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/googlecloud/googlecloud-original-wordmark.svg" title="Google Cloud" **alt="Google Cloud" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/xcode/xcode-original.svg" title="Xcode" **alt="Xcode" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL" **alt="MySQL" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original-wordmark.svg" title="PostgreSQL" **alt="PostgreSQL" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/blender/blender-original.svg" title="Blender" **alt="Blender" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/vercel/vercel-original-wordmark.svg" title="Vercel" **alt="Vercel" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/netlify/netlify-original-wordmark.svg" title="Netlify" **alt="Netlify" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original-wordmark.svg" title="Next.js" **alt="Next.js" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/vitejs/vitejs-original.svg" title="Vite.js" **alt="Vite.js" width="40" height="40"/>&nbsp;
</div>

---

### My Stats:

<table>
  <tr">
    <td>
    <!-- GitHub streak stats -->
      <a href="https://git.io/streak-stats">
        <img src="https://streak-stats.demolab.com?user=branley1&theme=highcontrast&hide_border=true&date_format=M%20j%5B%2C%20Y%5D" alt="GitHub Streak">
      </a>
    </td>
    <td>
    <!-- GitHub top language stats -->
      <a href="https://github.com/anuraghazra/github-readme-stats">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=branley1&theme=github_dark&hide_border=true&layout=compact" alt="Top Languages">
      </a>
    </td>
  </tr>
</table>

![](http://github-profile-summary-cards.vercel.app/api/cards/stats?username=branley1&theme=github_dark)
![](http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=branley1&theme=github_dark&utcOffset=8)
![](http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=branley1&theme=github_dark)
![](http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=branley1&theme=github_dark)
![](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=branley1&theme=github_dark)

<!-- Spotify current listen -->
<h2 align="center">
  🎧
  
  <a><i style="font-size: 10px" class="bx bx-tada-hover">
  <img src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false)](https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true)" align="middle"></img>
  </i>
  </a>
</h2>`;

const Highlights: React.FC = () => {
  return (
    <div className="highlights-page">
      <Navbar />
      <main className="highlights-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{md}</ReactMarkdown>
      </main>
      <Footer />
    </div>
  );
};

export default Highlights;
