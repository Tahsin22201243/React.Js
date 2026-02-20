import styles from "./InliineComponents.module.css";
const headerStyle = { color: "blue", fontSize: "140px" };
export default function InlineComponents({ todo, toggleTodo }) {
  return (
    <div>
      <h1 className={styles.header}>Inline CSS</h1>
    </div>
  );
}
