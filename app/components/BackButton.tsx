'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button 
      onClick={handleBack}
      className="text-custom-bg hover:text-custom-bg/80 transition-colors"
    >
      <ArrowLeft className="inline mr-2" />
      Back
    </button>
  );
};

export default BackButton; 