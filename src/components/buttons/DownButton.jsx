import { ArrowDown } from 'lucide-react';

function DownButton() {
  return (
    <button className='p-2 bg-red-900 rounded-full border border-amber-50 cursor-pointer animate-bounce'><ArrowDown className='text-amber-50' /></button>
  );
}

export default DownButton;