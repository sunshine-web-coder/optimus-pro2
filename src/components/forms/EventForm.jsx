import { MdEmail } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { HiUser } from "react-icons/hi2";
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';
import validationRules from '../utils/validationRules';
import useFormValidation from '../hooks/useFormValidation';
import ToastNotification from '../../components/hooks/ToastNotification'; // Import reusable Toast component

export default function EventForm() {
  const initialState = {
    name: '',
    email: '',
    telegramUsername: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    name: validationRules.name,
    email: validationRules.email,
    telegramUsername: validationRules.telegramUsername
  });

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Use reusable Toast component for success message
      ToastNotification.success('Form submitted successfully!');

      resetForm();
    } catch (error) {
      // Use reusable Toast component for error message
      ToastNotification.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center font-['BoxedRound'] text-xl">
        ✓ EVENTS → <span className="text-lg">Join Now</span>
      </h2>
      <h2 className="text-center font-['BoxedRound'] text-lg mt-2">Don’t Miss Out!</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">Join our waitlist to be the first to know about upcoming events, dates, and exclusive perks!</p>

      <form className="space-y-2" onSubmit={handleSubmit}>
      <InputField label="Name" type="text" placeholder="Enter your name" icon={HiUser} value={formData.name} onChange={handleChange} name="name" error={errors.name} />

        <InputField label="Email" type="email" placeholder="Enter email address" icon={MdEmail} value={formData.email} onChange={handleChange} name="email" error={errors.email} />

        <InputField
          label="Telegram Username"
          type="text"
          placeholder="Enter telegram username"
          icon={FaTelegram}
          value={formData.telegramUsername}
          onChange={handleChange}
          name="telegramUsername"
          error={errors.telegramUsername}
        />
        <div className="w-full pt-5">
          <SubmitButton label="Sign Me Up" loading={loading} />
        </div>
      </form>
    </div>
  );
}
