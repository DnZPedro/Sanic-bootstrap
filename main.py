from sanic import Sanic 
from sanic.response import json
from sanic.response import text
from sanic.response import html
from sanic import response

app = Sanic('Teste')

@app.route('/')
async def index(request):
    return await response.file_stream('index.html')

@app.route('/login')
async def index(request):
    return await response.file_stream('login.html')

@app.route("/formulário", methods=['POST'])
async def handle_request4(request):
    if request.method == 'POST':
        # TODO: Response header only 
        return await response.file_stream('formulario.html')

@app.route('/impressão')
async def imprime(request):
    return await response.file_stream('impressao.html')

@app.route('/recupere')
async def recupere(request):
    return await response.file_stream('recupere.html')

#Requests

@app.route('/js/scrolling-nav.js')
async def request7(request):
    return await response.file_stream('js/scrolling-nav.js')

@app.route('/css/scrolling-nav.css')
async def request6(request):
    return await response.file_stream('css/scrolling-nav.css')

@app.route('/vendor/bootstrap/css/bootstrap.min.css')
async def request5(request):
    return await response.file_stream('vendor/bootstrap/css/bootstrap.min.css')

@app.route('/vendor/bootstrap/css/bootstrap-grid.css')
async def request4(request):
    return await response.file_stream('vendor/bootstrap/css/bootstrap-grid.css')


@app.route('/vendor/jquery-easing/jquery.easing.min.js')
async def request3(request):
    return await response.file_stream('vendor/jquery-easing/jquery.easing.min.js')


@app.route('/vendor/jquery/jquery.min.js')
async def request1(request):
    return await response.file_stream('vendor/jquery/jquery.min.js')

@app.route('/vendor/bootstrap/js/bootstrap.bundle.min.js')
async def request2(request):
    return await response.file_stream('vendor/bootstrap/js/bootstrap.bundle.min.js')

@app.route('/Sanic.jpg')
async def Sanic(request):
    return await response.file_stream('Sanic.jpg')

if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=False)