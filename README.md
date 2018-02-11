# Pasos

1. meteor create apollo --bare
1. Creamos carpetas en root: imports, client, server
> En imports: carpetas api, startup, ui

1. npm install --save react react-dom

1. crear archivo init.js en root\client

1. npm install --save apollo-client graphql-server-express express graphql graphql-tools body-parser

1. Crear index.js en imports/server para dar inicio a apollo en el serverside

1. Crear Primer GraphQL Schema
En este paso se esta creando un ejemplo, la idea es poder realizar los querys desde la base de datos

> Se crea la const typeDefs para definir el tipo de elemento que esta esperando (String, fucntion, object, ...)
> Se crea la const resolvers para definir la funcion que hara el query
> Se crea la const schema y se adiciona a createApolloServer

1. Conectar React to Apollo & Apollo Dev-tools
npm install --save apollo-client-preset react-apollo graphql-tag