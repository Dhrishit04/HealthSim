import numpy as np

def generate_vital_signs(num_records=10):
    # Generate synthetic data for demonstration
    data = {
        'heartRate': np.random.randint(60, 100, size=num_records).tolist(),
        'bloodPressure': [f"{np.random.randint(110,130)}/{np.random.randint(70,90)}" for _ in range(num_records)],
        'temperature': np.random.uniform(36.5, 37.5, size=num_records).tolist()
    }
    return data
