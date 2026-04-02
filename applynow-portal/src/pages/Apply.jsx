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

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!formData.email.includes("@"))
        newErrors.email = "Invalid email";
    }

    if (step === 2) {
      if (!formData.school) newErrors.school = "School is required";
      if (!formData.gpa) newErrors.gpa = "GPA is required";
      else if (isNaN(formData.gpa) || formData.gpa > 5)
        newErrors.gpa = "Enter valid GPA (0–5)";
    }

    if (step === 3) {
      if (!formData.parent)
        newErrors.parent = "Parent name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    if (validateStep()) {
      localStorage.setItem("application", JSON.stringify(formData));
      alert("Application Submitted!");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          ApplyNow Portal
        </h2>

        <p className="text-center text-gray-500 mb-4">
          Step {step} of 3
        </p>

        {step === 1 && (
          <>
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name}</p>
            )}

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email}</p>
            )}

            <button
              onClick={nextStep}
              className="w-full bg-blue-600 text-white p-2 rounded mt-3"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              name="school"
              placeholder="School"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.school && (
              <p className="text-red-500">{errors.school}</p>
            )}

            <input
              name="gpa"
              placeholder="GPA"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.gpa && (
              <p className="text-red-500">{errors.gpa}</p>
            )}

            <div className="flex justify-between mt-3">
              <button
                onClick={prevStep}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <input
              name="parent"
              placeholder="Parent Name"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.parent && (
              <p className="text-red-500">{errors.parent}</p>
            )}

            <div className="flex justify-between mt-3">
              <button
                onClick={prevStep}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Apply;