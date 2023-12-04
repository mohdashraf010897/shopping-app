/* eslint-disable max-len */
import { SideDrawerProps } from '@/types/components/sideDwarer';
import React from 'react';
import CloseIcon from './icons/CloseIcon';

const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  children,
  direction = 'left',
}) => {
  const positionStyles = {
    left: 'top-0 left-0 h-[100vh]',
    right: 'top-0 right-0 h-[100vh]',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full',
  };

  const transitionStyles = {
    left: isOpen ? 'translate-x-0 ease-out duration-300' : '-translate-x-full ease-in duration-300',
    right: isOpen ? 'translate-x-0 ease-out duration-300' : 'translate-x-full ease-in duration-300',
    top: isOpen ? 'translate-y-0 ease-out duration-300' : '-translate-y-full ease-in duration-300',
    bottom: isOpen
      ? 'translate-y-0 ease-out duration-300'
      : 'translate-y-full ease-in duration-300',
  };

  // Added transition for the overlay
  const overlayTransition = isOpen
    ? 'opacity-50 ease-out duration-1000'
    : 'opacity-0 ease-in duration-1000 hidden';

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${overlayTransition}`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed ${positionStyles[direction]} z-40 transition-transform ${transitionStyles[direction]} bg-white shadow-md  w-[80%] md:w-[500px] pt-12`}
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="fixed top-0 right-0 z-50 flex items-center justify-center bg-green-500 p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 rounded-tl-none rounded-tr-none rounded-bl-[8px]"
        >
          <CloseIcon />
        </button>

        {/* Content of the drawer */}
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default SideDrawer;
