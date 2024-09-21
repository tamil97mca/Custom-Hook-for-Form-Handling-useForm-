// App.js
import useForm from './CustomHooks/useForm'; // Import the custom hook

const App = () => {
  const initialValues = { username: '', email: '' };

  // Function to handle form submission
  const onSubmit = (formValues) => {
    alert(`Submitted: ${JSON.stringify(formValues)}`); // Display form values
  };

  // Use the custom hook with initial values and submit handler
  const { values, handleChange, handleSubmit } = useForm(
    initialValues,
    onSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
