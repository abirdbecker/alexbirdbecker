import { useEffect } from 'react';
import ContactForm from '../components/ContactForm.jsx';

const css = `
  .work-with-me-intro {
    max-width: 560px;
    margin-bottom: 3.5rem;
  }

  .work-with-me-intro p {
    font-size: var(--text-lg);
    font-style: italic;
    line-height: 1.65;
  }

  .collab-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    border: 1px solid var(--navy-light);
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: 4rem;
  }

  .collab-card {
    background: var(--navy-mid);
    padding: 1.75rem;
  }

  .collab-card h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .collab-card p {
    font-size: var(--text-sm);
    line-height: 1.6;
  }

  .work-form-section h2 {
    font-size: var(--text-xl);
    margin-bottom: 0.5rem;
  }

  .work-form-section > p {
    font-size: var(--text-sm);
    margin-bottom: 2rem;
  }

  @media (max-width: 860px) {
    .collab-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 540px) {
    .collab-grid { grid-template-columns: 1fr; }
  }
`;

const ways = [
  {
    title: 'Co-host a gathering',
    desc: 'Collaborate on a screen-free event, community gathering, or offline social experience — for parents, families, or any group that wants to disconnect together.',
  },
  {
    title: 'Speaking',
    desc: 'I speak on digital wellbeing, phone-free schools, advocacy strategy, and building grassroots coalitions. Schools, conferences, parent nights, podcasts.',
  },
  {
    title: 'Build a tool',
    desc: 'Need a bill tracker, action guide, survey dashboard, or coalition site? I build the digital infrastructure that turns organizing into action.',
  },
  {
    title: 'Coaching on screens',
    desc: 'One-on-one or small group coaching for adults or kids navigating their relationship with technology — practical, research-informed, non-judgmental.',
  },
  {
    title: 'Family tech agreements',
    desc: 'Help families develop their own norms and agreements around devices — not rules handed down, but something everyone actually buys into.',
  },
  {
    title: 'Something else',
    desc: "If you're working on anything in this space and think there might be a fit, reach out. I'm open to conversations I haven't had yet.",
  },
];

export default function Speaking() {
  useEffect(() => {
    document.title = 'Work With Me — Alex Bird Becker';
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <main>
      <div className="page-header container">
        <span className="section-label">Work With Me</span>
        <h1>Let's work together.</h1>
      </div>

      <hr className="divider" />

      <section className="section">
        <div className="container">
          <div className="work-with-me-intro">
            <p>
              There are a lot of ways we could collaborate. A few examples below —
              but if something else comes to mind, I'd still love to hear from you.
            </p>
          </div>

          <div className="collab-grid">
            {ways.map(w => (
              <div className="collab-card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="work-form-section">
            <h2>Get in touch.</h2>
            <p>Tell me what you're working on or what you have in mind.</p>
            <ContactForm defaultType="" />
          </div>
        </div>
      </section>
    </main>
  );
}
