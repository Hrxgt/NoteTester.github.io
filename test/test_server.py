from http.server import BaseHTTPRequestHandler, HTTPServer
from os import path

hostName = "localhost"
hostPort = 8080

class RequestHandler(BaseHTTPRequestHandler):
    file_path = path.abspath(path.dirname(__file__))
    content_type = 'text/html'

    def _set_headers(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', self.content_type)
        self.send_header('Content-Length', path.getsize(self.getPath()))
        self.end_headers()
        

    def do_GET(self):
        self._set_headers()
        self.wfile.write(self.getContent(self.getPath()))


    def getPath(self):
        if self.path == '/':
            content_path = path.join(self.file_path, 'secrets.txt')
        else:
            content_path = path.join(self.file_path, str(self.path))
        return content_path

    def getContent(self, content_path):
        with open(content_path, mode='r', encoding='utf-8') as f:
            content = f.read()
        return bytes(content, 'utf-8')

myServer = HTTPServer((hostName, hostPort), RequestHandler)
myServer.serve_forever()
