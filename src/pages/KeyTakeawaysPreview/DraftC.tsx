import { ADHERENCE_STAT, TAKEAWAYS } from "./takeaways";

/** Draft C — Stat + narrative hybrid with 94.4% emphasis on the evaluation takeaway. */
function DraftC() {
  const [styleSpace, validated, foundation] = TAKEAWAYS;

  return (
    <section className="kt-section draft-c" aria-labelledby="draft-c-title">
      <header className="kt-section__header">
        <h2 id="draft-c-title" className="kt-section__title">
          Key Takeaways
        </h2>
        <div className="kt-section__rule" aria-hidden="true" />
      </header>
      <ul className="draft-c__list">
        <li className="draft-c__item">
          <p className="draft-c__text">
            <strong className="draft-c__lead">{styleSpace.leadIn}</strong>{" "}
            {styleSpace.body}
          </p>
        </li>
        <li className="draft-c__item draft-c__item--stat">
          <div
            className="draft-c__stat"
            aria-label={`${ADHERENCE_STAT.percent} ${ADHERENCE_STAT.detail}`}
          >
            <span className="draft-c__percent">{ADHERENCE_STAT.percent}</span>
            <span className="draft-c__stat-detail">{ADHERENCE_STAT.detail}</span>
          </div>
          <p className="draft-c__text draft-c__text--supporting">
            <strong className="draft-c__lead">{validated.leadIn}</strong>{" "}
            {validated.body}
          </p>
        </li>
        <li className="draft-c__item">
          <p className="draft-c__text">
            <strong className="draft-c__lead">{foundation.leadIn}</strong>{" "}
            {foundation.body}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default DraftC;
