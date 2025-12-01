Aplicação React construída com Vite.

Integrantes do Trabalho:
Pedro Henrique Carneiro - 01720880
Miguel Othon Arujo Barbosa - 01710961
Miguel Andrade Franca do Santos - 01718512
Emilly Ialy Nunes Mineo - 01710864

Para rodar o servidor de desenvolvimento:

npm run dev

Isso iniciará a aplicação em modo de desenvolvimento. O terminal mostrará um endereço parecido com:

http://localhost:5173/


Decisões do Projeto:

Componentização baseada em responsabilidade (App, Header, SearchBar, BookList, Counters, BookForm, Counters, ThemeContext, useLocalStorage).,
Uso de useState para estados locais.,
Uso de useEffect para sincronização com o localStorage.,
Criação de hook customizado useLocalStorage para persistir dados como tema dark ou light.
useRef para controle de IDs incrementais sem re-renderização e foco no input de busca.

Estrutura Simplificada:
public/
└─ books.json
src/
├─ components/
│ ├─ Header.jsx
│ ├─ SearchBar.jsx
│ ├─ Counters.jsx
│ ├─ BookList.jsx
│ └─ BookForm.jsx
├─ context/
│ └─ ThemeContext.jsx
├─ hooks/
│ └─ useLocalStorage.js
├─ pages/
│ ├─ App.jsx
│ └─ App.css
├─ index.css
└─ main.jsx