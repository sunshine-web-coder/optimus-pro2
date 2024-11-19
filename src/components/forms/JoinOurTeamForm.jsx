import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';
import validationRules from '../utils/validationRules';
import useFormValidation from '../hooks/useFormValidation';

export default function JoinOurTeamForm() {
  const initialState = {
    email: '',
    telegramUsername: '',
    linkedinProfile: '',
    twitterUsername: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    email: validationRules.email,
    telegramUsername: validationRules.telegramUsername,
    linkedinProfile: validationRules.linkedinProfile,
    twitterUsername: validationRules.twitterUsername
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
      <h2 className="text-center font-['BoxedRound'] text-3xl">Join Our Team</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">
        At <b>Optimus PRO</b>, we are looking at building a <b>rock-solid</b> team of <b>“A-players”</b>. Think you're a right fit? Join the waitlist. ✅
      </p>
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

        <InputField
          label="X (Formerly Twitter) Username"
          type="text"
          placeholder="Enter X (Formerly Twitter) username"
          icon={FaTwitter}
          value={formData.twitterUsername}
          onChange={handleChange}
          name="twitterUsername"
          error={errors.twitterUsername}
        />

        <div className="w-full pt-5">
          <SubmitButton label="Count Me In" loading={loading} />
        </div>
      </form>
    </div>
  );
}
