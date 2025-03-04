from flask_mail import Mail, Message

def send_mail(app):
    mail = Mail(app)
    msg = Message(subject='Questionnaire mouvement en entreprise', sender='elouandacostapeixoto@gmail.com', recipients=['elouan@bodih.fr'])
    msg.body = "Résultat détaillé du questionnaire mouvement en entreprise de Bodih."
    # msg.attach
    mail.send(msg)
