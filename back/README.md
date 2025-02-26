# Setup

Run the following commands:

```bash
# generate the virtual env folder
python3 -m venv .venv
```

```bash
# switch source to venv
source .venv/bin/activate
```

```bash
# install deps
pip3 install -r requirements.txt
```

## Usage

```bash
# run the flask server
flask --app __init__.py run 
```

## Utils commands

```bash
# freeze the current deps
pip3 freeze > requirements.txt
```
