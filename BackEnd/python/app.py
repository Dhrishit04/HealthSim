# BackEnd/python/app.py

from flask import Flask, jsonify, request
import numpy as np
from ml.data_generation import generate_vital_signs

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to HealthSim API!"})

@app.route('/vitals', methods=['GET'])
def get_vitals():
    num = int(request.args.get('num', 1))
    vitals = generate_vital_signs(num)
    return jsonify({"vitals": vitals})

@app.route('/assess', methods=['GET'])
def assess_risk():
    heart_rate = int(request.args.get('heartRate', 70))
    # Placeholder risk model
    risk_score = 0.1 if 60 <= heart_rate <= 100 else 0.8
    return jsonify({'risk': risk_score})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

print(app.url_map)