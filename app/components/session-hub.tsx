import Link from "next/link";
import "./session-hub.css";

type SessionHubProps = {
  number: number;
  arc: string;
  title: string;
  description: string;
  units: Array<{ number:string; title:string; description:string }>;
  checkpoint: string;
  handoff: string;
  hasReading?: boolean;
};

export default function SessionHub({number,arc,title,description,units,checkpoint,handoff,hasReading=false}:SessionHubProps){
  const prefix=`/session-${number}`;
  const nextSession=number<4?number+1:null;
  return <main className="session-hub">
    <header className="session-hub-nav"><Link href="/" className="session-hub-mark">CORE / PM</Link><div><Link href="/">All sessions</Link><Link href="/noted">Meet Noted</Link></div></header>
    <section className="session-hub-hero">
      <div className="session-hub-number">{String(number).padStart(2,"0")}</div>
      <div className="session-hub-copy"><p>SESSION {number} · {arc}</p><h1>{title}</h1><span>{description}</span></div>
    </section>
    <section className="session-hub-body">
      <div className="session-hub-units">
        <header><p>SESSION LOGIC</p><h2>Three decisions. One cumulative checkpoint.</h2></header>
        <div>{units.map((unit)=><article key={unit.number}><span>{unit.number}</span><h3>{unit.title}</h3><p>{unit.description}</p></article>)}</div>
      </div>
      <aside className="session-hub-materials">
        <p>SESSION MATERIALS</p>
        <h2>Start here.</h2>
        <div className="session-material-note">{hasReading ? "The reading establishes the concepts before class. The deck applies them through live decisions without repeating the pre-read." : "The pre-reading for this session is not released in the current build. The live deck is available for content review, not as a substitute for the pre-read."}</div>
        <nav className="session-material-actions">
          {hasReading&&<Link href={`${prefix}/reading`} className="material-cta reading-cta"><span><em>PRE-READING</em><small>Core concepts before the live session</small></span><b>Open reading <i>›</i></b></Link>}
          <Link href={`${prefix}/deck`} className="material-cta deck-cta"><span><em>LIVE DECK</em><small>19 pages · course password required</small></span><b>Open deck <i>›</i></b></Link>
        </nav>
        {!hasReading&&<small>Pre-reading coming in a later production gate.</small>}
      </aside>
    </section>
    <section className="session-hub-checkpoint"><div><p>SESSION {number} CHECKPOINT</p><h2>{checkpoint}</h2><span>{handoff}</span></div>{nextSession&&<Link className="session-hub-next" href={`/session-${nextSession}`}><small>NEXT IN THE COURSE</small><b>Continue to Session {nextSession}</b><i aria-hidden="true">›</i></Link>}</section>
    <footer className="session-hub-footer"><Link href="/">← Course home</Link><span>CORE / PM · Re-owning Product Management</span></footer>
  </main>;
}
