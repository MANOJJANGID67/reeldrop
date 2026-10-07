interface EmailLinkProps {
  email: string;
  className?: string;
}

export default function EmailLink({ email, className }: EmailLinkProps) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<!--email_off--><a href="mailto:${email}" class="${className || ''}">${email}</a><!--/email_off-->`
      }}
    />
  );
}
