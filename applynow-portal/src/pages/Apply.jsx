import { useState } from "react";

function Apply() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    gpa: "",
    parent: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔍 VALIDATION FUNCTION
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!formData.email.includes("@")) {
        newErrors.email = "Invalid email";
      }
    }

    if (step === 2) {
      if (!formData.school) newErrors.school = "School is required";
      if (!formData.gpa) {
        newErrors.gpa = "GPA is required";
      } else if (isNaN(formData.gpa) || formData.gpa > 5) {
        newErrors.gpa = "Enter valid GPA (0–5)";
      }
    }

    if (step === 3) {
      if (!formData.parent)
        newErrors.parent = "Parent name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    if (validateStep()) {
      alert("Application Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Application Form</h2>
      <p>Step {step} of 3</p>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h3>Personal Information</h3>

          <input name="name" placeholder="Name" onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          <br />

          <input name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <br />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h3>Academic Information</h3>

          <input name="school" placeholder="School" onChange={handleChange} />
          {errors.school && <p style={{ color: "red" }}>{errors.school}</p>}

          <br />

          <input name="gpa" placeholder="GPA" onChange={handleChange} />
          {errors.gpa && <p style={{ color: "red" }}>{errors.gpa}</p>}

          <br />

          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h3>Guardian Information</h3>

          <input
            name="parent"
            placeholder="Parent Name"
            onChange={handleChange}
          />
          {errors.parent && <p style={{ color: "red" }}>{errors.parent}</p>}

          <br />

          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Apply;