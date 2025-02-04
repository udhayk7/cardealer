import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function BookingSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="card p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Booking Confirmed!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for choosing AutoElite India. Our team will contact you shortly to proceed with your booking.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/')}
              className="w-full btn btn-primary"
            >
              Back to Home
            </button>
            
            <button
              onClick={() => navigate('/cars')}
              className="w-full btn btn-outline"
            >
              Browse More Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}