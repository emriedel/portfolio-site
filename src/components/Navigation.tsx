import Link from 'next/link';
import Icon from './Icon';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900">
            <Icon size={24} className="text-gray-900" />
            <span>Eric Riedel</span>
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}