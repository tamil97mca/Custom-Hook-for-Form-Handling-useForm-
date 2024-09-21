import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values); // Call the provided onSubmit function with form values
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
