import './styles.css';

export default function NavButton({ text, isActive, onClick }) {
  return (
    <button
      className={`nav-button ${isActive ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
}
