from .data_generation import generate_vital_signs

def calculate_risk(params):
    """
    A simple risk calculation using the 'heartRate' parameter.
    For demonstration, risk is calculated as the heart rate -72.
    """
    try:
        heart_rate = float(params.get('heartRate', 72))
    except ValueError:
        heart_rate = 72
    risk = max(0, heart_rate - 72)
    return risk

def get_vital_signs():
    # Return synthetic vital signs data
    return generate_vital_signs()
