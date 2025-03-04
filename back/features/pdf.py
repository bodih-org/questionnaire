"""module for the pdf feature"""
import fillpdf
from fillpdf import fillpdfs

def generate_pdf():
    """generate the pdf from the result of the form"""
    form_path = './template/example.pdf'
    form_save_path = "./saved_pdf/test.pdf"
    form_fields = list(fillpdfs.get_form_fields(form_path).keys())
    print(form_fields)
    data_dict = {
        form_fields[0]: "testing fill form"
    }
    fillpdfs.write_fillable_pdf(form_path, form_save_path, data_dict, flatten=False)
    return "hello"
