'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function OptimizedImage({ src, alt, width, height, className }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <>
      <div 
        className={`relative overflow-hidden group cursor-zoom-in ${
          isLoading ? 'animate-pulse bg-gray-200 dark:bg-gray-700' : ''
        } ${className || ''}`}
        onClick={togglePreview}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          点击放大
        </div>
        <Image
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 400}
          className={`duration-700 ease-in-out ${
            isLoading 
              ? 'scale-110 blur-2xl grayscale' 
              : 'scale-100 blur-0 grayscale-0'
          }`}
          onLoadingComplete={() => setIsLoading(false)}
          priority={false}
          quality={75}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-300 dark:border-gray-600 border-t-green-500 rounded-full animate-spin" />
          </div>
        )}
      </div>

      {showPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-zoom-out"
          onClick={togglePreview}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors duration-200"
              onClick={togglePreview}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
} 