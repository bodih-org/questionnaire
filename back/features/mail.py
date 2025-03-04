import os.path
from flask import jsonify
from flask_mail import Mail, Message

def send_mail(app, content):
    pdf_file = f'./saved_pdf/{content['entreprise']}.pdf'
    is_file_exist = os.path.isfile(pdf_file)
    if not is_file_exist:
        print("file not found")
        return jsonify (
            status=400
        )
    mail = Mail(app)
    msg = Message(subject='Questionnaire mouvement en entreprise', sender='elouandacostapeixoto@gmail.com', recipients=['elouan@bodih.fr'])
    msg.body = "Résultat détaillé du questionnaire mouvement en entreprise de Bodih."
    with open(pdf_file, 'rb') as fp:
        msg.attach(pdf_file, "application/pdf", fp.read())
    mail.send(msg)
