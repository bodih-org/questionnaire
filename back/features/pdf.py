"""module for the pdf feature"""
import fillpdf
from fillpdf import fillpdfs

def generate_pdf(content):
    """generate the pdf from the result of the form"""
    form_path = './template/example.pdf'
    form_save_path = f'./saved_pdf/{content['entreprise']}.pdf'
    form_fields = list(fillpdfs.get_form_fields(form_path).keys())
    data_dict = {
        form_fields[0]: content['entreprise']
    }
    fillpdfs.write_fillable_pdf(form_path, form_save_path, data_dict, flatten=False)
    return "hello"
