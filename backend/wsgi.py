"""
WSGI config for Freeleaps project.

It exposes the WSGI callable as a module-level variable named ``app``.

"""

from . import create_app

app=create_app()

if __name__ == "__main__":
    app.run()
