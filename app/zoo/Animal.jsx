export default function Animal({ type, health, feedAnimal }) {
  return (
    <div>
      <h2>{type}</h2>
      <p>Health: {health.toFixed(2)}%</p>
      <button onClick={feedAnimal}>Feed</button>
      {/* Additional UI elements */}
    </div>
  );
}
