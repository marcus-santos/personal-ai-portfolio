import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="w-2/3 mx-auto py-5 flex flex-col-reverse text-center lg:text-start lg:flex-row justify-between text-white/60 text-sm border-white/10">
        <p>© 2025 Marcus Santos. All rights reserved.</p>
        <p className="mt-2">
          Built with React, Next.js, Tailwind CSS and Fastify.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
