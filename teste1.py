usuarios_autorizados = [
    {"nome": "Maria", "username": "mariauser", "password": "teste123"},
    {"nome": "João", "username": "João", "password": "teste123"},
    {"nome": "Antonio", "username": "antoniouser", "password": "teste123"}
]

for x in usuarios_autorizados:
   print(x)
   #print(x.values())
   #nome, username = x.values()
   #print(x.get("password"))
   print(x["username"])
   print(x['nome'])
   print(x['password'])
   


computador = {'CPU': 'Intel', 'RAM': '8gb', 'SSD': '250bg'}

for chave in computador.keys():
   print(f'Chave = {chave} e Valor = {computador[chave]}')

for valor in computador.values():
   print(f'Valor: {valor}')
for chave, valor in computador.items():
   print(f'valor = {valor} e chave = {chave}')   