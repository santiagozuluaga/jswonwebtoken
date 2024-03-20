# HOW TO RUN EXAMPLE

## INSTALL NPM DEPENDENCIES
```
npm install
```

## GENERATE ASYMMETRIC KEYS

1. GENERATE PRVATE KEY:
```
openssl genpkey -algorithm RSA -out private_key.pem
```

2. EXTRACT PUBLIC KEY FROM THE PRIVATE KEY
```
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

## RUN CODE:
```
node index.js
```