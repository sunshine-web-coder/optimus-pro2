import { MdEmail } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { FiMapPin, FiGlobe } from 'react-icons/fi';
import { HiUser } from "react-icons/hi2";
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';
import validationRules from '../utils/validationRules';
import useFormValidation from '../hooks/useFormValidation';

export default function ExploreOurProgramForm() {
  const initialState = {
    name: '',
    city: '',
    country: '',
    email: '',
    telegramUsername: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    name: validationRules.name,
    city: validationRules.city,
    country: validationRules.country,
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
      <h2 className="text-center font-['BoxedRound'] w-full text-3xl">Get Onboard!</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">Sign up for updates on our upcoming programs and get the opportunity to be one of the first to be onboarded.</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
      <InputField label="Name" type="text" placeholder="Enter your name" icon={HiUser} value={formData.name} onChange={handleChange} name="name" error={errors.name} />

        <InputField label="City" type="text" placeholder="Enter your city" icon={FiMapPin} value={formData.city} onChange={handleChange} name="city" error={errors.city} />

        <InputField label="Country" type="text" placeholder="Enter your country" icon={FiGlobe} value={formData.country} onChange={handleChange} name="country" error={errors.country} />

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
          <SubmitButton label="Keep Me Updated" loading={loading} />
        </div>
      </form>
    </div>
  );
}
