import { TAKEAWAYS } from "./takeaways";

/** Draft A — Numbered stack (closest to current poster). */
function DraftA() {
  return (
    <section className="kt-section draft-a" aria-labelledby="draft-a-title">
      <header className="kt-section__header">
        <h2 id="draft-a-title" className="kt-section__title">
          Key Takeaways
        </h2>
        <div className="kt-section__rule" aria-hidden="true" />
      </header>
      <ol className="draft-a__list">
        {TAKEAWAYS.map((item, index) => (
          <li key={item.id} className="draft-a__item">
            <span className="draft-a__number" aria-hidden="true">
              {item.number}
            </span>
            <p className="draft-a__text">
              <strong className="draft-a__lead">{item.leadIn}</strong>{" "}
              {item.body}
            </p>
            {index < TAKEAWAYS.length - 1 ? (
              <div className="draft-a__divider" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default DraftA;
