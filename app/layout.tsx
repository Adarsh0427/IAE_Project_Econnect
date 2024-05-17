import './globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';
import { useServerAuthSession } from '@app/hooks/useServerAuthSession';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout(layoutProps: any) {
  const { children } = layoutProps;
  const wixSession = useServerAuthSession();
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <title>Create Wix Bookings Site</title>
        <meta
          name="description"
          content="Generated by create next app with Wix Bookings integration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.wix.com/favicon.ico" />
      </head>
      <body >
          <header className="block bg-white w-full" data-testid="page.header">
            <Header />
      </header>
          <main className="bg-transparent min-h-[600px]">{children}</main>
          <Footer />
        </body>
    </html>
    </ClerkProvider>
  );
}
