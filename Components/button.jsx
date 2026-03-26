export default function Button({ text, onClick }) {
    return (
      <button onClick={onClick} style={{ padding: 8, backgroundColor: "#4CAF50", color: "red", border: "none", borderRadius: 4, cursor: "pointer", marginRight: 8 }}>
        {text}
      </button>
    );
  }