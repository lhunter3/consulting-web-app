import { Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => (
    <footer className="bg-primary-bg text-white py-8 px-4 sm:px-small px-md ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:justify-between max-w-4xl w-full">
          <div className="text-center md:text-start w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2">Something IT</h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto">Transforming businesses through innovative consulting solutions.</p>
          </div>
          
          <div className="text-center md:text-start w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-300 hover:text-text-accent"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-300 hover:text-text-accent"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-300 hover:text-text-accent"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Something IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  export default Footer;