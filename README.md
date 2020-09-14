# Projeto Backend Time 24 - Technee Safra 2020

O objetivo da solução aqui apresentada é desenvolver uma aplicação que facilite a captura e conversão de pessoas em clientes safra já com a aquisição de um produto ou serviço.

A abordagem que utilizamos é a de estar onde o cliente está, para isso, nossa aplicação se integra a plataformas já existentes como e-commerces, sites imobiliários, sites de veículos, dentre outros, e por meio desses parceiros, oferecemos uma solução que disponibiliza produtos bancários para seus clientes de forma personalizada de acordo com o segmento de cada canal, como uma fiança no caso de um site imobiliário, um credito para compra de veículos em um site de automóveis ou mesmo uma antecipação de recebíveis para quem vende dentro de um marketplace.

Ao utilizar os dados dos usuários provenientes de cada canal, conseguimos ter uma maior acuracidade no desenvolvimento de modelos e oferta de produtos assim como também conseguimos com base em dados, antecipar até mesmo suas necessidades e oferecer diferentes produtos por outros canais. Como exemplo, se um usuário simula uma operação de fiança na plataforma imobiliária X, poderíamos ofertar um crédito imobiliário e seu e-mail de acordo com seu perfil caso este não venha aceitar o empréstimo fiança.

Esta api desenvolvidada em NodeJS serve para integrar frontends com bases Safra. A segurança entre as entidades será feita por meio de Token, onde será
disponibilizado uma chave para cada parceiro para a geração desse Token e assim conseguir consumir a API. Neste exemplo simulamos uma concessionária de veículos.

Com base nas informações enviadas pela concessionária podemos antecipar o processamento de simulação de crédito e assim o cliente já tem uma visão do que ele pode financiar. Ao clicar em Saiba mais mostraremos três opções de parcelamento, o cliente escolheria uma e também se deseja receber as ofertas do Safra, sendo cadastrado na lista de Opt-in disponibilizado pela API. Na próxima tela, mostramos os termos de adesão, incluindo o cadastro de uma conta, se necessário. A última tela serve para confirmação e divulgação das redes socias do Safra.

## Time 24

- Anthony Luz
- Letícia Baptista​
- Lucas Calzavara​
- Vitor Meireles
- Wesley de Abreu​


---

## About

SafraHere is a project is an api used to mediate negotiations between customers and companies.

## Technologies

This project was created using:
 - [Node.js](https://nodejs.org/en/) version 12.18.3.
 - [npm](https://www.npmjs.com/) version 6.14.6.
 - [Express](https://expressjs.com/pt-br/) version 4.17.
 - [MongoDB](https://www.mongodb.com/) version 3.6.2.
 - [Mongoose](https://mongoosejs.com/) version 5.10.5


## Running

```bash
git clone https://github.com/VitorMeirelesOliveira/TSV-Backend
cd /TSV-Backend
node myApp.js
http://localhost:3000/
```

## Usage

### Endpoints
To test the endpoints use [Postman](https://www.postman.com/) or [Insomnia](https://support.insomnia.rest/), or consume from [Frontend](https://github.com/lucascalzavara/time24-technee-safra-frontend)

#### POST
```bash
http://localhost:3000/safratsv/opc
```
##### Body
```json
{
    "cpf": "123456789",
    "required_value": "100000"
}
```

#### POST
```bash
http://localhost:3000/safratsv/terms
```
##### Body
```json
{
    "cpf": "123456789",
    "total_value": "10000",
    "optin": "true"
}
```

#### POST
```bash
http://localhost:3000/safratsv/acp
```

##### Body
```json
{
    "cpf": "123456789",
    "acp_pix": "true",
    "acp_terms": "true"
}
```
