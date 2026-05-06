import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const steps = ['v0 API Key', 'Supabase', 'Vercel', 'GitHub'];

function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    userId: 'user_' + Date.now(),
    v0ApiKey: '', supabaseUrl: '', supabaseKey: '',
    vercelToken: '', githubToken: ''
  });

  const next = (fields) => {
    const updated = { ...data, ...fields };
    setData(updated);
    if (step < 3) setStep(step + 1);
    else onComplete(updated);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-2">Set up your pipeline</h2>
      <p className="text-gray-400 mb-8">Connect your accounts once — we handle the rest.</p>

      {/* Progress bar */}
      <div className="flex items-center mb-10">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
                ${i < step ? 'bg-green-500' : i === step ? 'bg-indigo-500' : 'bg-gray-700 text-gray-400'}`}>
                {i < step ? '✓' : i + 1}
              </div>
              <span className={`text-xs mt-1 ${i === step ? 'text-white' : 'text-gray-500'}`}>{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mb-4 mx-1 ${i < step ? 'bg-green-500' : 'bg-gray-700'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {step === 0 && <StepOne onNext={next} />}
      {step === 1 && <StepTwo onNext={next} />}
      {step === 2 && <StepThree onNext={next} />}
      {step === 3 && <StepFour onNext={next} data={data} />}
    </div>
  );
}

export default Onboarding;