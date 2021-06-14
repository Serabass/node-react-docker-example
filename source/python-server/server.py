from flask import Flask
from flask import request
import json

app = Flask(__name__)

def post_actions(data):
        return {
            'Action1': func1,
            'Action2': func2,
            'Action3': func3,
            }.get(data['Action'])(data['Data'])

@app.route("/test", methods=['GET'])
def indx():
    if request.method == 'GET':
        return 'Hello from Python!'

if __name__ == "__main__":
    app.run(port='8000')
