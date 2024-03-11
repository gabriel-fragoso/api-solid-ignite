# App

GymPass style app

## RFs (Requisitos funcionais)

- o que é possivel o usuário fazer na aplicação

## RNs (Regras de negócios)

- condições apliacadas a cada regra de negócio
- uma regra de negócio sempre vai está associoada a um requisito funcional

## RNFs (Requisitos não funcionais)

- Não depende do cliente
- mais técnicos do que funcionalidades
- qual banco de dados, como fazer cache, qual estratégia de paginação, etc

# Requisitos e Regras de negócio

## Requisitos funcionais

- [x] Deve ser possível se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuário logado
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [x] Deve ser possível o usuário obter seu histórico de check-ins
- [ ] Deve ser possível o usuário buscar academias próximas (até 10km)
- [x] Deve ser possível o usuário buscar academias pelo nome
- [x] Deve ser possível o usuário realizar check-in em um academia
- [ ] Deve ser possível validar o check-in de um usuário
- [x] Deve ser possível cadastrar uma academia

## Regras de negócio

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [x] O usuário não pode fazer 2 check-ins no mesmo dia
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O chek-in só pode ser validado até 20 minutos após criado
- [ ] O check-in só pode ser validade por administradores
- [ ] A academia só pode ser cadastrada por administradores

## Requisitos não funcionais

- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco postgresql
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página
- [ ] O usuário deve ser identificado por um JWT (JSON WEB TOKEN)
