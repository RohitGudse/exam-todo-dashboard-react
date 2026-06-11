// src/components/QuoteWidget.jsx
const quotes = [
  "Success comes from consistency.",
  "Study today, lead tomorrow.",
  "Small progress is still progress."
];

export default function QuoteWidget() {
  const quote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="card">
      <h3>Motivation</h3>
      <p>{quote}</p>
    </div>
  );
}