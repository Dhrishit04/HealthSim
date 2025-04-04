from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class ExampleModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(100))
