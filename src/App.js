// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenue sur ma HomePage React 👋</h1>
        <p>Un exemple simple de page d’accueil codée en React.</p>
      </header>

      <main>
        <section>
          <h2>À propos</h2>
          <p>
            Cette page est un exemple de composant React fonctionnel, avec un peu de style et de contenu.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Vous pouvez me joindre à <a href="mailto:contact@example.com">contact@example.com</a>.</p>
        </section>
      </main>

      <footer>
        <small>© 2025 - Mon site React</small>
      </footer>
    </div>
  );
}

export default App;
