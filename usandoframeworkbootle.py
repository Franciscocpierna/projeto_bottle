from bottle import route, run, template, static_file,get, post, request, redirect, response, error
import bottle 
# usuariosautorizados={"Maria":"mariauser", "João":"joaouser","Antonio":"Antoniouser" }

usuarios_autorizados = [
    {"nome": "Maria", "username": "mariauser", "password": "teste123"},
    {"nome": "João", "username": "João", "password": "teste123"},
    {"nome": "Antonio", "username": "antoniouser", "password": "teste123"}
]

#rota  para arquivos estáticos
@route('/static/<filename>')
def server_static(filename):
    return static_file(filename, root='./views/static')


@get('/')
@route('/login')
def wrong():
   redirect("/login")

situacao=''


@get('/login')  # or @route('/login')
def login():
    return template('login')
message=None
@error(404)
def error404(error):
    situacao=response.status
    return template("erro", message=message, situacao=situacao)

# limpar cache

bottle.TEMPLATES.clear()

@post('/login', method='POST')
def do_login():
       
    message = None

    
   

    try:
        ip = request.environ.get('REMOTE_ADDR')
        print(f'o ip = >>>>>>>>>>>>>{ip}')
        print(f'o status = {response.status} é esse')
        print(response.get_header('Set-Cookie', 'name= pt-br'))
        username = request.forms.getunicode('username', None)
        password = request.forms.get('password', None)
       
        print (username)
        print(password)
                 
       
        if username=="":
          if response.status=='200 OK':  
            situacao = '200 OK'
            raise Exception("Campo username não informado status= 200")

    except Exception as ex:
       message = ex
      

    else:

        usuario_autenticado = {}

        for usuario in usuarios_autorizados:

            if usuario.get("username") == username and usuario.get("password") == password:

                usuario_autenticado["username"] = usuario["username"]
                usuario_autenticado["nome"] = usuario["nome"]

                break

        if usuario_autenticado == {}:
            message = "Login Falhou"

    finally:

        return template("index", usuario_autenticado) if message is None else template("erro", message=message, situacao=situacao)


#run(host='localhost', port=8080, debug=True)
run(reloader=True, debug=True)

