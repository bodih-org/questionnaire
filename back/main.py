"""Main module"""
import os
from flask import jsonify
import features.pdf as pdf

from flask import Flask
from flask_mail import Mail, Message
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
mail = Mail(app)

@app.route('/health-check')
def check():
    """Health-check endpoint"""
    return jsonify(
    status=200
)

@app.route('/mail')
def send_mail():
    """Send detailed result from form by mail endpoint"""
    msg = Message(subject='Questionnaire mouvement en entreprise', sender='elouandacostapeixoto@gmail.com', recipients=['elouan@bodih.fr'])
    msg.body = "Résultat détaillé du questionnaire mouvement en entreprise de Bodih."
    mail.send(msg)
    return "Message sent!"


if __name__ == '__main__':
    app.run(debug=True)
