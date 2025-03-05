"""Main module"""
import os
from flask import jsonify, request
import features.pdf as pdf
import features.mail as mailing

from flask import Flask
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv

load_dotenv()

# create and configure the app
app = Flask(__name__, instance_relative_config=True)
app.config['MAIL_SERVER']= os.environ.get('MAIL_SERVER')
app.config['MAIL_PORT'] = os.environ.get('MAIL_PORT')
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PWD')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})


@app.route('/health-check')
def check():
    """Health-check endpoint"""
    return jsonify(
        status=200
    )

@app.route('/mail', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def mail():
    """Send detailed result from form by mail endpoint"""
    content = request.json
    pdf.generate_pdf(content)
    mailing.send_mail(app, content)
    return "Message sent"

if __name__ == '__main__':
    app.run(debug=True)
