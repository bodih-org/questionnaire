"""module for the pdf feature"""
import fillpdf
from fillpdf import fillpdfs

def generate_pdf():
    """generate the pdf from the result of the form"""
    data_dict = {'[Recipient Name]': "testing"}
    fillpdfs.write_fillable_pdf("./template/pdf.pdf", "./template/test.pdf", data_dict, flatten=False)
    return "hello"
