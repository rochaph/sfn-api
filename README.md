# sfn-api

Space Flight News Articles Information

#### 1. Instalando o sistema:

```bash
 $ git clone git@lab.coodesh.com:pdhro99/sfn-api.git
 # ou
 $ git clone https://lab.coodesh.com/pdhro99/sfn-api.git
```

> Estrutura:

```
sfn-api
+   dist                              # Build sistema
|_____  src                           # Pasta raiz do projeto
  |________   application             
      |________   modulo              # Modulos do projeto
          |________   domain          # Domínios do modulo
          |________   ports           # Interfaces para infra implementar
          |________   usecases        # Casos de usos do modulo
  |________   infrastructure
      |________   cron                # Cron jobs
      |________   databases           # Bancos de dados
      |________   repositores         # Implementações do repositório
      |________   scripts             # Scritps do sistema
      |________   webserver           # Implementação do webserver
    |________   index.ts              # Arquivo de inicialização do sistema
```
  
#### 2. Ambiente de produção:  

##### 2.1. Altere o .env de acordo com .env.example  

##### 2.2. Rode o docker  

```bash
docker-compose up -d --build
```
