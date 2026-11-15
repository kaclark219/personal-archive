import { TAKEAWAYS } from "./takeaways";

/** Draft B — Accent bar callouts. */
function DraftB() {
  return (
    <section className="kt-section draft-b" aria-labelledby="draft-b-title">
      <header className="kt-section__header">
        <h2 id="draft-b-title" className="kt-section__title">
          Key Takeaways
        </h2>
        <div className="kt-section__rule" aria-hidden="true" />
      </header>
      <ul className="draft-b__list">
        {TAKEAWAYS.map((item) => (
          <li key={item.id} className="draft-b__item">
            <span className="draft-b__bar" aria-hidden="true" />
            <div className="draft-b__content">
              <span className="draft-b__label">{item.label}</span>
              <p className="draft-b__body">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DraftB;
