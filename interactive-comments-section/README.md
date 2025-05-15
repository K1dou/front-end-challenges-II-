# 💬 Interactive Comments App (Front-end)

Este repositório representa o **front-end** do projeto **Interactive Comments**, uma aplicação fullstack que permite autenticação de usuários, postagem de comentários, respostas, likes, sistema de paginação e muito mais.

> ✨ **Acesse a aplicação online:**
> [https://interactive-comments-theta-seven.vercel.app/login](https://interactive-comments-theta-seven.vercel.app/login)

> 🔗 **Repositório do Back-end:**
> [https://github.com/K1dou/Fullstack-project-comments](https://github.com/K1dou/Fullstack-project-comments)

---

## 🚀 Tecnologias Utilizadas

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router DOM](https://reactrouter.com/)
* [React Query](https://tanstack.com/query/latest)
* [Axios](https://axios-http.com/)
* [Vite](https://vitejs.dev/)

---

## 🚀 Funcionalidades

* Autenticação com e-mail/senha (JWT)

* Login com Google via OAuth2

* Cadastro de usuário com upload de avatar

* Comentários e respostas com contador de likes

* Botão "Carregar mais" com paginação

* Navbar com botão de logout

* UI responsiva (mobile-first)

* Tema escuro com foco em acessibilidade

* Tratamento de token expirado com refresh token automático

---

## 🔧 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/K1dou/interactive-comments-front.git
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` e configure a URL da API:

```env
VITE_API_URL=http://localhost:8080
```

4. Rode a aplicação:

```bash
npm run dev
```

---

## 💬 Considerações

Este projeto foi desenvolvido com foco em boas práticas de UX, acessibilidade e separação clara entre front e back-end. A integração JWT + refresh token garante segurança e persistência de sessão.

Sinta-se à vontade para contribuir ou sugerir melhorias!

---

## 🎓 Licença

Este projeto é open-source e está licenciado sob a Licença MIT.
