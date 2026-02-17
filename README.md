# Gerador de Conselhos (Advice Generator)

![Imagem do Projeto](./src/images/imagem02.png)

## 📝 Descrição

Este projeto é um **Gerador de Conselhos** desenvolvido como parte de um desafio do [Frontend Mentor](https://www.frontendmentor.io/). A aplicação consome a [Advice Slip API](https://api.adviceslip.com/) para buscar e exibir conselhos aleatórios de forma dinâmica e visualmente atraente.

O objetivo do desafio era criar uma interface de usuário responsiva e interativa que permita aos usuários obter conselhos inspiradores com apenas um clique. A aplicação apresenta um design moderno com tema escuro (dark mode) e animações sutis.

## ✨ Funcionalidades

- **Geração de Conselhos Aleatórios**: Ao clicar no botão de dados (dice), a aplicação busca um novo conselho da API
- **Exibição de ID do Conselho**: Cada conselho possui um identificador único que é exibido
- **Design Responsivo**: Interface totalmente adaptável para desktop, tablet e dispositivos móveis
- **Estados Visuais**: 
  - Estado inicial com mensagem de boas-vindas
  - Estado de carregamento (loading) enquanto busca novos conselhos
  - Efeitos hover no botão de geração
- **Tratamento de Erros**: Gerenciamento adequado de erros na comunicação com a API

## 🏗️ Estrutura do Projeto

```
advice-generator-FrontEndMentor/
├── public/
│   └── favicon-32x32.png       # Ícone do site
├── src/
│   ├── images/                 # Recursos visuais
│   │   ├── icon-dice.svg       # Ícone do botão de geração
│   │   ├── pattern-divider-desktop.svg
│   │   ├── pattern-divider-mobile.svg
│   │   ├── imagem01.png        # Screenshots do projeto
│   │   └── imagem02.png
│   ├── App.tsx                 # Componente principal da aplicação
│   ├── main.tsx                # Ponto de entrada do React
│   ├── index.css               # Estilos globais
│   └── vite-env.d.ts           # Definições de tipos TypeScript
├── index.html                  # HTML principal
├── package.json                # Dependências e scripts
├── tailwind.config.js          # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração do TypeScript
├── vite.config.ts              # Configuração do Vite
└── eslint.config.js            # Configuração do ESLint
```

## 🎨 Como Funciona

### Componente Principal (App.tsx)

O componente `App` é o coração da aplicação e implementa:

1. **Estado**: Utiliza React Hooks (`useState`) para gerenciar:
   - `advice`: Armazena o conselho atual com seu ID
   - `loading`: Controla o estado de carregamento

2. **Requisição à API**: A função `handleClick` utiliza Axios para fazer requisições HTTP:
   ```typescript
   const URL_ADVICE = "https://api.adviceslip.com/advice";
   ```

3. **Interface Responsiva**: 
   - Exibe diferentes divisores (pattern-divider) para mobile e desktop
   - Layout adaptável usando Flexbox e classes do Tailwind CSS

4. **Interatividade**: 
   - Botão flutuante com efeito hover
   - Desabilitado durante o carregamento para evitar múltiplas requisições

### API Utilizada

- **Endpoint**: `https://api.adviceslip.com/advice`
- **Método**: GET
- **Resposta**: Objeto JSON contendo o conselho e seu ID
  ```json
  {
    "slip": {
      "id": 117,
      "advice": "It is easy to sit up and take notice, what's difficult is getting up and taking action."
    }
  }
  ```

## 🚀 Tecnologias e Dependências

### Principais Tecnologias

- **[React](https://react.dev/)** (v19.1.0): Biblioteca JavaScript para construção de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** (v5.8.3): Superset do JavaScript com tipagem estática
- **[Vite](https://vite.dev/)** (v7.0.4): Build tool e servidor de desenvolvimento extremamente rápido
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.11): Framework CSS utility-first para estilização
- **[Axios](https://axios-http.com/)** (v1.11.0): Cliente HTTP para fazer requisições à API

### Ferramentas de Desenvolvimento

- **[ESLint](https://eslint.org/)**: Linter para identificar e corrigir problemas no código JavaScript/TypeScript
- **[Jest](https://jestjs.io/)**: Framework de testes (configurado mas sem testes implementados ainda)
- **Node.js**: Ambiente de execução JavaScript
- **NPM**: Gerenciador de pacotes

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **NPM** (geralmente vem com Node.js)
- **Editor de código** (recomendado: VSCode)

## 🔧 Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**:
```bash
git clone https://github.com/kevenklynsman/advice-generator-FrontEndMentor.git
```

2. **Navegue até o diretório do projeto**:
```bash
cd advice-generator-FrontEndMentor
```

3. **Instale as dependências**:
```bash
npm install
```

4. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173/` (ou outra porta indicada no terminal).

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot-reload
- `npm run build` - Compila o TypeScript e cria a build de produção
- `npm run lint` - Executa o ESLint para verificar problemas no código
- `npm run preview` - Visualiza a build de produção localmente

## 🌐 Build e Deploy

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Isso irá:
1. Compilar o TypeScript
2. Otimizar os assets
3. Gerar os arquivos estáticos na pasta `dist/`

A pasta `dist/` pode ser deployada em qualquer serviço de hospedagem estática como:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🎨 Design e Responsividade

O projeto implementa um design moderno com as seguintes características:

- **Tema Escuro**: Paleta de cores com tons de cinza escuro e verde-água (teal)
- **Cores Customizadas** (definidas no `tailwind.config.js`):
  - Primary: Tons de verde-água para elementos de destaque
  - Neutral: Tons de cinza para fundos e textos
- **Responsividade**: Layout adapta-se perfeitamente a diferentes tamanhos de tela
- **Animações**: Transições suaves nos botões e elementos interativos
- **Tipografia**: Uso adequado de tamanhos de fonte e espaçamento

## 🖼️ Screenshots

### Desktop
![Desktop View](./src/images/imagem01.png)

### Mobile
![Mobile View](./src/images/imagem02.png)

## 🤝 Contato 

Desenvolvido por **Keven Klynsman**

- GitHub: [@kevenklynsman](https://github.com/kevenklynsman)
- LinkedIn: [kevenklynsman](https://www.linkedin.com/in/kevenklynsman/)
- E-mail: [kevenklynsman2003@gmail.com](mailto:kevenklynsman2003@gmail.com)

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do desafio do Frontend Mentor.

---

⭐ Se você gostou deste projeto, não esqueça de dar uma estrela no repositório!
