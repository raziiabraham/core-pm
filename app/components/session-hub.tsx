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
  const lessonHref=(unitNumber:string)=>number===1?`${prefix}/reading#${({"01":"attention","02":"view","03":"problem"} as Record<string,string>)[unitNumber]}`:`${prefix}/reading#unit-${unitNumber}`;
  return <main className="session-hub">
    <header className="session-hub-nav"><Link href="/" className="session-hub-mark">CORE / PM</Link><div><Link href="/">Curriculum</Link><Link href="/noted">Meet Noted</Link></div></header>
    <section className="session-hub-hero">
      <div className="session-hub-number">{String(number).padStart(2,"0")}</div>
      <div className="session-hub-copy"><p>PHASE {number} · {arc}</p><h1>{title}</h1><span>{description}</span></div>
    </section>
    <section className="session-hub-body">
      <div className="session-hub-units">
        <header><p>PHASE LOGIC</p><h2>Three lessons. One artifact to keep.</h2></header>
        <div>{units.map((unit)=><Link href={lessonHref(unit.number)} key={unit.number}><article><span>{unit.number}</span><h3>{unit.title}</h3><p>{unit.description}</p><small>Open lesson →</small></article></Link>)}</div>
      </div>
      <aside className="session-hub-materials">
        <p>PHASE MATERIAL</p>
        <h2>Work at your pace.</h2>
        <div className="session-material-note">{hasReading ? "Read the concept, make the call, apply it to Noted or your own product, and keep the output in one cumulative Product Decision Case." : "This phase is being prepared for independent study."}</div>
        <nav className="session-material-actions">
          {hasReading&&<Link href={`${prefix}/reading`} className="material-cta reading-cta"><span><em>3-LESSON READING</em><small>Read · decide · apply · keep</small></span><b>Begin phase <i>›</i></b></Link>}
        </nav>
        {!hasReading&&<small>Course material coming soon.</small>}
      </aside>
    </section>
    <section className="session-hub-checkpoint"><div><p>PHASE {number} ARTIFACT</p><h2>{checkpoint}</h2><span>{handoff}</span></div>{nextSession&&<Link className="session-hub-next" href={`/session-${nextSession}`}><small>NEXT IN THE COURSE</small><b>Continue to phase {nextSession}</b><i aria-hidden="true">›</i></Link>}</section>
    <footer className="session-hub-footer"><Link href="/">← Course home</Link><span>CORE / PM · Re-owning Product Management</span></footer>
  </main>;
}
