Catálogo de Livros - React SPA

Projeto desenvolvido como atividade avaliativa da 2ª Unidade, implementando um catálogo digital de livros como uma Single Page Application (SPA) completa utilizando React e React Router.

Integrantes do Trabalho:
Pedro Henrique Carneiro - 01720880
Miguel Othon Arujo Barbosa - 01710961
Miguel Andrade Franca do Santos - 01718512
Emilly Ialy Nunes Mineo - 01710864

Como Rodar o Projeto

Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

Instalação

Clone ou baixe o projeto
Instale as dependências:

npm install

Execute o projeto em modo de desenvolvimento:

npm run dev


Acesse no navegador: `http://localhost:5173`

Tecnologias Usadas

React 19.2.0 - Biblioteca principal
React Router DOM 7.9.6 - Gerenciamento de rotas
Vite 7.2.2 - Build tool e dev server
CSS3 - Estilização

Estrutura do Projeto


catalogolivros/
├── public/
│   └── books.json          # Dados iniciais dos livros
├── src/
│   ├── assets/             # Recursos estáticos
│   ├── components/         # Componentes reutilizáveis
│   │   ├── BookForm.jsx
│   │   ├── BookList.jsx
│   │   ├── Counters.jsx
│   │   ├── Header.jsx
│   │   └── SearchBar.jsx
│   ├── context/            # Context API
│   │   └── ThemeContext.jsx
│   ├── hooks/              # Hooks customizados
│   │   └── useLocalStorage.js
│   ├── layouts/            # Layouts reutilizáveis
│   │   └── MainLayout.jsx
│   ├── pages/              # Páginas da aplicação
│   │   ├── catalogo.jsx
│   │   ├── home.jsx
│   │   └── livroDetalhe.jsx
│   ├── App.css             # Configuração de rotas
│   ├── App.css             # Estilos do App
│   ├── index.jsx           # Estilos globais
│   └── main.jsx            # Ponto de entrada
├── package.json
└── README.md


Funcionalidades Implementadas

React Router

Configuração de Rotas(`App.jsx`)
jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="catalogo" element={<Catalogo />} />
    <Route path="catalogo/:id" element={<LivroDetalhe />} />
  </Route>
</Routes>


Navegação Declarativa(`MainLayout.jsx`)
Utilização de `<NavLink>` no menu de navegação
Links ativos com classe CSS dinâmica
jsx
      <nav className="menu">
        <NavLink to="/" className={({isActive}) => isActive ? 'menu-link active' : 'menu-link'}>Home</NavLink>
        <NavLink to="/catalogo" className={({isActive}) => isActive ? 'menu-link active' : 'menu-link'}>Catálogo</NavLink>
      </nav>


Navegação Programática(`home.jsx`)
Implementado com `useNavigate()` no botão "Entrar no Catálogo"
jsx
const navigate = useNavigate();
<button onClick={() => navigate("/catalogo")}>Entrar no Catálogo</button>


URLs Dinâmicas(`livroDetalhe.jsx`)
Rota dinâmica: `/catalogo/:id`
Utilização de `useParams()` para capturar o ID da URL
jsx
const { id } = useParams();


Layout Reutilizável (`MainLayout.jsx`)
Componente com `<Outlet />` para renderizar páginas filhas
Header e navegação compartilhados entre todas as páginas

Hooks Customizados

useLocalStorage(`hooks/useLocalStorage.js`)
Hook customizado para persistência de dados no localStorage:
Sincroniza estado do React com localStorage
Utilizado para salvar: livros, busca, tema e estado de loading
Implementação com `useState` e `useEffect`

Onde foi usado:
Persistência da lista de livros
Salvamento do termo de busca
Tema claro/escuro
Estado de carregamento

Context API

ThemeContext(`context/ThemeContext.jsx`)
Gerenciamento global de tema (claro/escuro)
Utiliza o hook customizado `useLocalStorage` para persistência
Fornece função `toggleTheme()` para alternar temas

Páginas

Home(`/`)
Página inicial com apresentação
Botão com navegação programática para o catálogo

Catálogo(`/catalogo`)
Listagem completa de livros
Busca com foco automático (useRef)
Filtro em tempo real por título/autor
Contadores: Total e Filtrados
Formulário para adicionar novos livros
Botão "Ver Detalhes" com Link para rota dinâmica
Carregamento de dados via `useEffect` e fetch

Detalhes do Livro(`/catalogo/:id`)
Exibição de informações completas do livro
Busca o livro por ID usando `useParams()`
Botão "Voltar" com `navigate(-1)`
Tratamento de livro não encontrado

Funcionalidades Adicionais

Busca em tempo real - Filtra por título e autor
Contadores dinâmicos - Total de livros e livros filtrados
Foco automático - Campo de busca recebe foco ao carregar
Persistência de dados - localStorage mantém dados entre sessões
Estados de loading - Feedback visual durante carregamento
Tratamento de erros - Fallback para dados iniciais caso fetch falhe
Tema claro/escuro - Alternância de temas com persistência

Páginas do Sistema

Página Inicial (Home)
Apresentação do catálogo
Botão de entrada com navegação programática

Página do Catálogo
Barra de busca com filtro em tempo real
Formulário de adição de livros
Lista de livros com botão "Ver Detalhes"
Contadores de total e filtrados

Página de Detalhes
- Informações completas do livro selecionado
- Botão voltar com navegação programática
- Tratamento de livro não encontrado

Conceitos React Aplicados

Hooks Utilizados:
`useState` - Gerenciamento de estado local
`useEffect` - Efeitos colaterais (fetch, localStorage)
`useRef` - Foco automático no campo de busca
`useParams` - Leitura de parâmetros da URL
`useNavigate` - Navegação programática
`useContext` - Consumo de Context API
`useLocalStorage` - Hook customizado para persistência

React Router DOM:
`BrowserRouter` - Configuração do roteador
`Routes` / `Route` - Definição de rotas
`Link` / `NavLink` - Navegação declarativa
`Outlet` - Layout reutilizável
Rotas aninhadas
Rotas dinâmicas com parâmetros

Componentização:
Componentes reutilizáveis e isolados
Separação de responsabilidades
Props para comunicação entre componentes

Observações

Os dados são carregados inicialmente do arquivo `public/books.json`
Caso o fetch falhe, dados de fallback são utilizados
Todos os dados são persistidos no localStorage
A aplicação mantém o estado mesmo após recarregar a página
Navegação sem reload de página (SPA real)



Projeto desenvolvido como atividade avaliativa da disciplina de Front-end Frameworks com React.


Data de entrega:Dezembro/2025
