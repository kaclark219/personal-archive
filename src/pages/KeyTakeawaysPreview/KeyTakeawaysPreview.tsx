import DraftA from "./DraftA";
import DraftB from "./DraftB";
import DraftC from "./DraftC";
import { TAKEAWAYS } from "./takeaways";

import "./KeyTakeawaysPreview.scss";

function KeyTakeawaysPreview() {
  return (
    <div className="kt-preview">
      <header className="kt-preview__intro">
        <span className="kt-preview__eyebrow">Poster design reference</span>
        <h1 className="kt-preview__heading">Key Takeaways — Three Drafts</h1>
        <p className="kt-preview__subhead">
          Same three points, three layout treatments sized to the poster&apos;s
          right-column footprint. Pick a draft and paste the structure into your
          poster tool.
        </p>
      </header>

      <section className="kt-preview__copy" aria-labelledby="shared-copy-title">
        <h2 id="shared-copy-title" className="kt-preview__copy-title">
          Shared copy
        </h2>
        <ol className="kt-preview__copy-list">
          {TAKEAWAYS.map((item) => (
            <li key={item.id} className="kt-preview__copy-item">
              <strong>{item.leadIn}</strong> {item.body}
            </li>
          ))}
        </ol>
      </section>

      <div className="kt-preview__grid">
        <article className="kt-preview__card">
          <div className="kt-preview__card-meta">
            <span className="kt-preview__card-label">Draft A — Numbered stack</span>
            <p className="kt-preview__card-note">
              Closest to current poster rhythm; max copy space, minimal chrome.
            </p>
          </div>
          <DraftA />
        </article>

        <article className="kt-preview__card">
          <div className="kt-preview__card-meta">
            <span className="kt-preview__card-label">Draft B — Accent bars</span>
            <p className="kt-preview__card-note">
              Sage vertical bars + short labels for faster scanning at a distance.
            </p>
          </div>
          <DraftB />
        </article>

        <article className="kt-preview__card">
          <div className="kt-preview__card-meta">
            <span className="kt-preview__card-label">Draft C — Stat hybrid</span>
            <p className="kt-preview__card-note">
              Centers 94.4% on the evaluation takeaway to echo Style Adherence above.
            </p>
          </div>
          <DraftC />
        </article>
      </div>
    </div>
  );
}

export default KeyTakeawaysPreview;
