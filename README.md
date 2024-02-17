# Suprema challenge

Esse foi o desafio proposto pela Suprema. O teste de desenvolvedor front-end React + Next.js consiste na construção de uma galeria de Pokémon utilizando a API pokeapi.co. O projeto deve ser desenvolvido com Next.js para o front-end, React para a construção dos componentes, Styled Components para a estilização, e o método fetch do Next.js para as chamadas de API.

Você pode conferir o desafio deployado na Vercel

- [Link em Produção](https://challenge-suprema.vercel.app/)

## O projeto foi desenvolvido com as seguintes stacks

- Next.js v.14 
- React JS (utilizou o TS-SWC como compilador) 
- Typescript (para tipagem em tempo de desenvolvimento, visando boas práticas de código em legibilidade e manuntenibilidade).
- Styled Components (CSS-in-js para estilização)
- React Hook Form
- Zod (para validação de formulário e tipagem integrada com Typescript)
- Husky (para utilização de hooks, automatizando o linter fix e leitura de testes unitários).
- Eslint.
- Prettier.
- Vercel (para deploy da aplicação e hospedagem).

## Design de Software (arquitetura frontend)

```
/public
/src
  └── /app
        └── /api
               └── /contact
        └── /contato
        └── /pokemon
               └── /[pokemonId]
  └── /@types
  └── /config
  └── /components
  └── /contexts
  └── /hooks
  └── /styles
  └── /utils
  └── /lib
```

## Para rodar localmente o repositório: 

- certifique-se que você tem instalado Node v.18.17 em sua máquina.
- clone o repositório em sua máquina `https://github.com/MichelangeloCali/suprema-challenge.git`
- entre na pasta do projeto e rode `npm install`
- rode o comando `npm run dev`


## Boas práticas:

- O código foi a todo momento desenvolvido para que pudesse ser o máximo componentizado, tornando reutilizável e menos repetitido possível.
- O código Javascript está tipado, evitando erros de tipos em tempo de desenvolvimento, facilitando o debug.
- Foi integrado um sistema de validação de inputs para que os dados possam ser tratados antes de salvos ou enviados no backend
- Na estilizacão, foi utilizado boas práticas com Styled Component, para melhorar a manutenção e a escalabilidade do código CSS.
- O projeto foi deployado na Vercel.
- Foi configurando triggers com Husky, através de scripts pre-commit, onde é feito o fix do código, e pre-push, onde é rodado os testes unitários, evitando que todo e qualquer componente criado ou alterado suba para produção quebrado ou com algum bug. 

## Observações:

- Ao realizar o cadastro na Pagina de Contato, os dados do Usuário são tratados, validados e em seguida, enviados para API do Next.js, podendo ser utilizado para ou enviar para um Service que se comunica um alguma API de Mail (Sendgrid, Mailersend...) ou então serem salvos em algum Banco de Dados.


### Contato do desenvolvedor:

- [LinkedIn](https://www.linkedin.com/in/michelangelocali/)
- Email: michelangelocali@hotmail.com

