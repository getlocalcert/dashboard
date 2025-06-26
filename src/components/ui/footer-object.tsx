interface FooterProps {
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    text2: string;
  };
}

export function FooterObject({ mainLinks, copyright }: FooterProps) {
  return (
    <footer className="w-full pb-6 pt-8 lg:pb-8 lg:pt-12">
      <div className="px-4 lg:px-8">
        <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 flex flex-col items-center text-center">
          <nav className="w-full">
            <ul className="list-none flex flex-wrap justify-center -my-1 -mx-2">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 pt-5 text-base font-semibold leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            <div>{copyright.text2}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
