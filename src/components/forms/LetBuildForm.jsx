// components/LetBuildForm.js
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';
import useFormValidation from '../hooks/useFormValidation';
import validationRules from '../utils/validationRules';
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';

export default function LetBuildForm() {
  const initialState = {
    email: '',
    telegramUsername: '',
    linkedinProfile: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    email: validationRules.email,
    telegramUsername: validationRules.telegramUsername,
    linkedinProfile: validationRules.linkedinProfile
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
      <h2 className="text-center font-['BoxedRound'] text-3xl">Let's Build</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">Founders, join the waitlist for exclusive updates on co-building opportunities, events, and networking.</p>

      <form className="space-y-2" onSubmit={handleSubmit}>
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

        <InputField
          label="LinkedIn Profile"
          type="url"
          placeholder="Enter linkedin profile"
          icon={FaLinkedinIn}
          value={formData.linkedinProfile}
          onChange={handleChange}
          name="linkedinProfile"
          error={errors.linkedinProfile}
        />

        <div className="w-full pt-5">
          <SubmitButton label="Let's Build" loading={loading} />
        </div>
      </form>
    </div>
  );
}
