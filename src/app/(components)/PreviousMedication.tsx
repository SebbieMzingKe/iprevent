/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../context/FormContext';
import { useRouter } from "next/navigation";

type Props = object;

function PreviousMedication({}: Props) {
  const { updateFormData } = useForm();
  const router = useRouter();

  // Local state for medication-related questions
  const [blurredVision, setBlurredVision] = useState(0);
  const [antihypertensiveMedications, setAntihypertensiveMedications] = useState(0);
  const [antidiabeticMedications, setAntidiabeticMedications] = useState(0);
  const [slowHealingSores, setSlowHealingSores] = useState(0);
  const [tinglingHandsFeet, setTinglingHandsFeet] = useState(0);

  const handleBlurredVision = (value: number) => {
    setBlurredVision(value);
    updateFormData('BlurredVision', value); 
  };

  const handleAntihypertensiveMedications = (value: number) => {
    setAntihypertensiveMedications(value);
    updateFormData('AntihypertensiveMedications', value); 
  };

  const handleAntidiabeticMedications = (value: number) => {
    setAntidiabeticMedications(value);
    updateFormData('AntidiabeticMedications', value);
  };

  const handleSlowHealingSores = (value: number) => {
    setSlowHealingSores(value);
    updateFormData('SlowHealingSores', value); 
  };

  const handleTinglingHandsFeet = (value: number) => {
    setTinglingHandsFeet(value);
    updateFormData('TinglingHandsFeet', value); 
  };

  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex image-container justify-center items-center p-[20px] pt-[30px]">
        <img className='w-[319px] h-[336px]' src="./nurse.png" alt="3D image of a nurse" />
      </div>

      <div className="text-container p-[20px] bg-black text-white w-screen">
        <h3 className='text-2xl mb-4'>Rounding some more info on your health ...</h3>

        <div className="family-history-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>13. Blurred Vision: Changes in your vision can be linked to diabetes—this symptom could be important in understanding your risk.</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleBlurredVision(1)} 
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleBlurredVision(0)} 
            >
              No
            </button>
          </div>
        </div>

        <div className="gestational-diabetes-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>14. Antihypertensive Medications: If you're taking medications for blood pressure, it can affect your blood sugar levels—important for accurate result .</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleAntihypertensiveMedications(1)} 
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleAntihypertensiveMedications(0)}
            >
              No
            </button>
          </div>
        </div>

        <div className="previous-history-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>15. Antidiabetic Medications: If you are already managing diabetes, this info helps us better understand your current risk.</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleAntidiabeticMedications(1)} 
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleAntidiabeticMedications(0)} 
            >
              No
            </button>
          </div>
        </div>

        <div className="family-history-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>16. Slow healing sores can indicate issues with blood sugar control. Keeping an eye on this can help prevent complications down the line.</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleSlowHealingSores(1)} 
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleSlowHealingSores(0)} 
            >
              No
            </button>
          </div>
        </div>

        <div className="family-history-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>17. Tingling Hands and Feet can be linked to nerve damage from high blood sugar. Awareness of these symptoms is essential for early intervention.</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleTinglingHandsFeet(1)} 
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleTinglingHandsFeet(0)} 
            >
              No
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="nav-buttons flex justify-between pl-3 w-[650px]">
            <Link href='/family-history'>
              <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
            </Link>
            <Link href='/health'> 
              <button className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md" onClick={() => router.push('/health')}>
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviousMedication;
