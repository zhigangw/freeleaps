from flask import Flask
from flask import jsonify
# from .mongodb.db import db

app = Flask(__name__)

# db.init_app(app)

@app.route('/api/hello')
def hello():
    return jsonify(text='Hello, World!')

if __name__ == "__main__":
    app.run(host='0.0.0.0')