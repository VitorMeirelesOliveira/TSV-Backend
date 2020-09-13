# Time24TechneeSafraBackend

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
