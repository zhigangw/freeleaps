"""
WSGI config for Freeleaps project.

It exposes the WSGI callable as a module-level variable named ``app``.

"""

from .freeleaps import app

if __name__ == "__main__":
    app.run()