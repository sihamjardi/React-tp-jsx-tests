# Comprendre JSX, la composition avancée et les tests React

## Objectifs
- Comprendre la syntaxe JSX et sa transformation en JavaScript.
- Utiliser les Higher-Order Components (HOC) pour ajouter des comportements réutilisables.
- Utiliser le pattern Render Props pour rendre un composant flexible.
- Écrire des tests unitaires et d'intégration avec Jest et React Testing Library.

---

## Structure du projet
```
src/
  App.js
  JSXDemo.js
  Button.js
  ButtonWithLogging.js
  withLogging.js
  DataLoader.js
  withTimestamp.js
  Message.js
  FilteredList.js
  Form.js
  Form.test.js
```
<img width="208" height="441" alt="Capture d&#39;écran 2025-11-08 013834" src="https://github.com/user-attachments/assets/d6a6958b-0160-4d19-bad3-2a1e0612142c" />
<img width="211" height="441" alt="Capture d&#39;écran 2025-11-08 013827" src="https://github.com/user-attachments/assets/3d20540b-7ede-414e-97df-0243ec8496ca" />

---

## Installation
```
npm install
npm start
```

---

## Lancer les tests
```
npm test
```
---

## Fonctionnalités principales

### 1. JSXDemo
Montre la différence entre un élément JSX et l'équivalent en JavaScript pur.

### 2. HOC `withLogging`
Affiche les props d'un composant dans la console avant de le rendre.

### 3. Render Props `DataLoader`
Charge des données et délègue l'affichage au parent via une fonction `render`.

### 4. HOC `withTimestamp`
Ajoute automatiquement l'heure actuelle au rendu d'un composant.

### 5. `FilteredList`
Utilise Render Props pour filtrer une liste avant affichage.

### 6. Tests
`Form.test.js` vérifie qu'une erreur est affichée si le champ du formulaire est soumis vide.

---

## Aperçu

<img width="669" height="321" alt="Capture d&#39;écran 2025-11-08 012206" src="https://github.com/user-attachments/assets/ea22ef9b-b8fa-4c81-9761-0516e86a76a0" />


<img width="305" height="164" alt="Capture d&#39;écran 2025-11-08 012649" src="https://github.com/user-attachments/assets/c30ef887-2405-4b31-a2d2-b0bb90ef698f" />


<img width="307" height="201" alt="Capture d&#39;écran 2025-11-08 012811" src="https://github.com/user-attachments/assets/e5ea34c7-f89e-4971-96f7-e774bf65fd91" />


<img width="335" height="329" alt="Capture d&#39;écran 2025-11-08 013748" src="https://github.com/user-attachments/assets/4c887d2a-c988-48a0-bd34-41d356461922" />


<img width="319" height="224" alt="Capture d&#39;écran 2025-11-08 012349" src="https://github.com/user-attachments/assets/558f3ad5-d3e4-4afa-9e48-c32b7152c8d4" />


---

## Auteur
Travail réalisé dans le cadre d'un exercice pédagogique React.
