import { useState } from "react";

function BMICalculator() {
  const [formData, setFormData] = useState({
    weight: "",
    height: ""
  });
  const [result, setResult] = useState(null);

  const updateInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateResult = () => {
    const { weight, height } = formData;
    if (!weight || !height) {
      alert("Nhập đầy đủ cân nặng và chiều cao!");
      return;
    }

    const bmi = Number(weight) / ((Number(height) / 100) ** 2);
    setResult(bmi.toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Tính BMI</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          placeholder="Cân nặng (kg)"
          onChange={updateInput}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          name="height"
          value={formData.height}
          placeholder="Chiều cao (cm)"
          onChange={updateInput}
        />
      </div>

      <button onClick={calculateResult}>Tính BMI</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>BMI của bạn: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;