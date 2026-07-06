import { ArrowRight, Play, Sparkles, Film, Target, MousePointer2 } from "lucide-react";

const services = [
  { icon: Film, title: "Reels & Videos", text: "Short-form content, YouTube videos, gaming edits, wedding films, and brand promos." },
  { icon: Sparkles, title: "Thumbnails & Design", text: "Premium visuals, thumbnails, motion graphics, hooks, captions, and scroll-stopping design." },
  { icon: Target, title: "Brand Growth", text: "Creative ideas and content strategy that help businesses get attention and customers." },
];

const work = ["Football/Tiktok style Edits", "Podcast Edits", "Gaming Edit", "Clothing Brand Promo Edits (Coming Soon)"];

export default function Page() {
  return (
    <main>
      <div className="noise" />

      <nav className="nav">
        <div className="logo">EverFrame</div>
        <div className="links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact" className="pill">Start Project</a>
        </div>
      </nav>

      <section className="hero">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <p className="badge">Creative Growth Agency</p>
        <h1>We create content people remember.</h1>
        <p className="lead">
          EverFrame helps creators and businesses grow through premium editing,
          thumbnails, and content strategy.
        </p>
        <div className="heroBtns">
          <a href="#contact" className="btn white">Start a project <ArrowRight size={18}/></a>
          <a href="#work" className="btn glass"><Play size={18}/> View work</a>
        </div>
      </section>

      <section className="marquee">
        <span>REELS</span><span>YOUTUBE</span><span>THUMBNAILS</span><span>WEDDINGS</span><span>BRAND CONTENT</span>
      </section>

      <section id="services" className="section">
        <p className="badge">Services</p>
        <h2>We don't just edit. We build attention.</h2>
        <div className="serviceGrid">
          {services.map(({icon: Icon, title, text}) => (
            <div className="card" key={title}>
              <Icon className="icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <p className="badge">Portfolio</p>
        <h2>Demo work, ready to replace with your samples.</h2>
        <div className="workGrid">
          {work.map((item, i) => (
            <div className="workCard" key={item}>
              <div className="num">0{i+1}</div>
              <h3>{item}</h3>
              <p>Concept sample by EverFrame</p>
            </div>
          ))}
        </div>
      </section>
<section id="pricing" className="section">
  <p className="badge">Pricing</p>
  <h2>Simple packages to start growing.</h2>

  <div className="serviceGrid">
    <div className="card">
      <h3>Starter</h3>
      <p>₹799+</p>
      <p>1 short reel/edit, Smooth clean text, clean cuts, and delivery ready export.</p>
    </div>

    <div className="card">
      <h3>Growth</h3>
      <p>₹1,999+</p>
      <p>Premium reel/edit with better pacing, Motion graphics, captions, and creative direction.</p>
    </div>

    <div className="card">
      <h3>Custom</h3>
      <p>Contact Us</p>
      <p>For YouTube videos, wedding films, brand ads, thumbnails, and monthly content plans.</p>
    </div>
  </div>
</section>
      <section className="statement">
        <MousePointer2 />
        <h2>People don't buy editing. They buy results.</h2>
        <p>We help brands look premium, get remembered, and turn attention into growth.</p>
      </section>

      <section id="contact" className="section contact">
        <p className="badge">Contact</p>
        <h2>Let's create something people remember.</h2>
        <p className="lead">DM us for a free sample or project discussion.</p>
        <div className="contactBox">
          <p><b>Instagram:</b> @everframe</p>
          <p><b>Email:</b> everframe@example.com</p>
          <p><b>Services:</b> Reels · Videos · Thumbnails · Wedding Films · Brand Content</p>
        </div>
      </section>
    </main>
  );
}
