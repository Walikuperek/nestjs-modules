# Article

## Introduction

We are going to build `auth-module` for our NestJS application.

Full source code can be found [here](#).

## What is auth-module?

`auth-module` is a module that provides authentication and authorization functionality for our application.

## Steps

### 1. Create a new NestJS application

```bash
$ nest new auth-module
```

### 2. Create `auth` boilerplate

```bash
$ nest g module auth
$ nest g controller auth
$ nest g service auth
```

### 3. Create `users` module

Create `users` module and service boilerplate.

```bash
$ nest g module users
$ nest g service users
```

### 4. Add Bcrypt and JWT

```bash
$ npm install @nestjs/jwt
$ npm install bcrypt
$ npm install @types/bcrypt --save-dev
$ npm i dotenv
```

```typescript copy showLineNumbers filename="users.service.ts"

```
