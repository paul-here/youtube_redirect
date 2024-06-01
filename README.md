# Youtube Redirect
`Serves a simple webpage that allows a Youtube search query to be entered away from the distraction of the youtube algorithm`


## Quickstart
 - Install python 3 with pip (see Relevant Documentation)
 - Install a virtual environment
    - At project root, run `python -m venv ./v` (change slash direction on Windows)
 - Execute appropriate activation script in v/bin
    - If successful, terminal prompt should change
    - To confirm virtual env is active:
        - Launch an interpreter by running `python` or `python3`
        - Check the values of `sys.prefix` and `sys.base_prefix`:
            ```
            >>> import sys
            >>> sys.prefix
            >>> sys.base_prefix
            >>> exit()
            ```
        - The env is active if the values are different (prefix should be the path to your venv)
 - Install Flask: `pip install flask`
 - Export Flask App Variable: `export FLASK_APP=redirect.py`
 - Run server: `python3 -m flask run`
 - Use a browser extension to redirect https://www.youtube.com/ to http://127.0.0.1:5000
 - Profit


## Relevant Documentation
 - (Flask Quickstart)[https://flask.palletsprojects.com/en/1.1.x/quickstart/]
 - (Python Venv)[https://docs.python.org/3/library/venv.html]
 - (Python Install)[https://www.python.org/downloads/]
