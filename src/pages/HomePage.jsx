import HomeImage from '../images/HomeImage.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '/index.css';

const TICKETS = [
  {
    id: 'item-1',
    title: 'Client-facing application delivery',
    body: 'Develop internal applications, working directly with stakeholders and business analysts to translate client needs into working deliverables.',
  },
  {
    id: 'item-2',
    title: 'Candidate search flow consolidation',
    body: 'Merged fragmented candidate search tools into a single application, standardizing the process end to end.',
    impact: '↑ 45% faster turnaround',
  },
  {
    id: 'item-3',
    title: 'Scrum Master, sprint execution',
    body: 'Facilitate Agile ceremonies and led sprint execution across several concurrent project teams.',
    impact: '✓ 100% on-time delivery',
  },
  {
    id: 'item-4',
    title: 'Product demos & documentation',
    body: 'Demonstrate product functionality and author user documentation to speed up onboarding for internal tools.',
    impact: '↑ faster tool adoption',
  },
]

const STACK = [
  {
    label: 'Languages & Frameworks',
    items: ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Java', 'Python', 'Flutter / Dart'],
  },
  {
    label: 'Design & UX',
    items: ['Figma', 'Miro', 'Prototyping', 'Wireframing', 'Design Thinking', 'User-Centered Design'],
  },
  {
    label: 'Process & Tooling',
    items: ['Agile / Scrum', 'JUnit', 'GitHub', 'Git', 'Jira', 'Azure DevOps', 'MySQL'],
  },

]

const ROLES = ['Software Developer', 'Frontend Developer', 'UI/UX Designer', 'Business Analyst', 'Scrum Master'];

export default function Home() {
  return (
    <>
    <Header/>
      <header className="hero wrap">
          <img
            src={HomeImage}
            alt="Olivia Cheung"
            //image resolution is width 1527 px and height 2280 px
            //height is about 1.5x width  
            style={{ width: '25%', height: '33%', float: 'right', position:'relative' }}
          />
        <div className="eyebrow">Nice to meet you! I'm... </div>
        <h1>Olivia Cheung</h1>
        <div className="role">
          <h1>Software Developer</h1>
        </div>
        <p className="tagline">
          I create wireframes and build frontend applications that turn stakeholder requirements into shipped,
          usable tools!
        </p>
        
        <div className="hero-links">
          <a href="mailto:olivia.mai.cheung@gmail.com">✉ Email</a>
          <a href="https://linkedin.com/in/o-cheung/" target="_blank" rel="noopener noreferrer">
            in/ LinkedIn
          </a>
        </div>
      </header>

      <section className="block wrap">
        <div className="section-head">
          <h2>Software Developer <span>@ DXC Technology</span></h2>
          <span className="meta">MAY 2024 — PRESENT</span>
        </div>
        <div className="board">
          {TICKETS.map((ticket) => (
            <div className="ticket" key={ticket.id}>
              <div className="ticket-top">
              </div>
              <h3>{ticket.title}</h3>
              <p>{ticket.body}</p>
              {ticket.impact && <div className="impact">{ticket.impact}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="block wrap">
        <div className="section-head">
          <h2>Tools that I work with...</h2>
        </div>
        {STACK.map((group) => (
          <div className="stack-group" key={group.label}>
            <div className="stack-label">{group.label}</div>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section class="block wrap" id="history">
    <div class="section-head">
      <h2>Earlier Experience</h2>
    </div>
    <div class="timeline-item">
      <div class="timeline-date">JUN 2023 — MAY 2024</div>
      <div>
        <div class="timeline-role">Technical Intern - DXC Technology</div>
        <div class="timeline-company">Led UI/UX design and user research (3 users) for generative AI and omnichannel IT ticketing tools; delivered bi-weekly demos to gather usability feedback.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-date">AUG 2021 — MAR 2023</div>
      <div>
        <div class="timeline-role">Technical Support Agent - LSU Information Technology Services</div>
        <div class="timeline-company">Supported 1,000+ users, resolving 97% of tickets within 24 hours.</div>
      </div>
    </div>
  </section>
      <Footer></Footer>
    </>
  )
}
