from flask import jsonify
import features.pdf as pdf

from flask import Flask

def create_app():
    """main function"""
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    @app.route('/hello')
    def hello():
        return pdf.generate_pdf()


    @app.route('/health-check')
    def check():
        return jsonify(
        status=200
    )
    return app
