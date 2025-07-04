import React from 'react';

interface ImageCardProps {
  title: string;
  subtitle: string;
  backgroundColor?: string; // Tailwind class like 'bg-brand' or 'bg-white'
}

const ImageCard: React.FC<ImageCardProps> = ({ title, subtitle, backgroundColor = 'bg-white' }) => {
  return (
    <div className={`${backgroundColor} py-4 px-6 shadow-md`}>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-white Text mt-2">{subtitle}</p>
    </div>
  );
};

export default ImageCard;
