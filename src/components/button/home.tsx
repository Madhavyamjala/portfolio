'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';

const SceneWithButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/home');
  };

  return (
    <>
      <div style={{ position: 'fixed', bottom: "20px", left: '50%',transform: 'translateX(-50%)' }}>
        <Button
          radius="full"
          className="px-2 py-2 rounded-full hover:bg-white hover:text-black text-white shadow-lg"
          onClick={handleClick}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default SceneWithButton;
