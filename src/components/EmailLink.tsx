'use client';

import { useState, useEffect } from 'react';

interface EmailLinkProps {
  email: string;
  className?: string;
}

export default function EmailLink({ email, className }: EmailLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR / static generation, display spam-proof text with no raw mailto:
  // This prevents Cloudflare from injecting /cdn-cgi/l/email-protection links into the HTML
  if (!mounted) {
    const safeDisplay = email.replace('@', ' [at] ');
    return <span className={className || ''}>{safeDisplay}</span>;
  }

  // Once hydrated in the browser, render a normal clickable mailto: link for human users
  return (
    <a href={`mailto:${email}`} className={className || ''}>
      {email}
    </a>
  );
}
