import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Le champ est requis');
    } else {
      setError('');
      alert(`Bonjour, ${name}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom :</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Envoyer</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}

export default Form;
