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

# redirecionamento de página

#@get('/')
#@route('/login')
#def wrong():
#   redirect("https://franciscocpierna.github.io/projeto-social-/")

@get('/')
@route('/login')
def wrong():
   redirect("/login")




@get('/login')  # or @route('/login')
def login():
    return template('login')

@error(404)
def error404(error):
    return 'Essa pagina Não existe camarada'



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
              raise Exception("Campo username não informado")

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

        return template("index", usuario_autenticado) if message is None else template("erro", message=message)


#run(host='localhost', port=8080, debug=True)
run(reloader=True)

'''
Por padrão, o servidor web atende as páginas no localhost e na porta 8080. Além disso, importamos o route, que é a função
from bottle import response
@route('/iso')
def get_iso():
    response.charset = 'ISO-8859-15'
    return u'This will be sent with ISO-8859-15 encoding.'

@route('/latin9')
def get_latin():
    response.content_type = 'text/html; charset=latin9'
    return u'ISO-8859-15 is also known as latin9.'

    
    Em alguns casos raros, os nomes de codificação Python diferem dos nomes suportados pela especificação HTTP. Em seguida, você deve fazer as duas coisas: primeiro definir o Response.content_type cabeçalho (que é enviado ao cliente inalterado) e, em seguida, definir o Response.charset atributo (que é usado para codificar unicode).'''