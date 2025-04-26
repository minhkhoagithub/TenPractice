function ThemeToggle({ theme, toggleTheme }) {
    return (
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    );
  }
  
  export default ThemeToggle;
  