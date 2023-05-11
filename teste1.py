usuarios_autorizados = [
    {"nome": "Maria", "username": "mariauser", "password": "teste123"},
    {"nome": "João", "username": "João", "password": "teste123"},
    {"nome": "Antonio", "username": "antoniouser", "password": "teste123"}
]

for x in usuarios_autorizados:
   #print(x)
   #print(x.values())
   #nome, username = x.values()
   #print(x.get("password"))
   print(x["username"])
   print(x['nome'])
   print(x['password'])
   