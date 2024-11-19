import { MdEmail } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { HiUser } from "react-icons/hi2";
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';
import validationRules from '../utils/validationRules';
import useFormValidation from '../hooks/useFormValidation';

export default function HeckathonForm() {
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
      // Your API call here
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Form submitted successfully!');
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h2 className="text-center font-['BoxedRound'] text-xl">
        ✓ HACKATHONS → <span className="text-lg">Coming Soon</span>
      </h2>
      <h2 className="text-center font-['BoxedRound'] text-lg mt-2">Get Ready to Hack!</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">Join the waitlist to be first in line for our upcoming Hackathon, with exclusive updates and early access!</p>
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
          <SubmitButton label="Count Me In" loading={loading} />
        </div>
      </form>
    </div>
  );
}
