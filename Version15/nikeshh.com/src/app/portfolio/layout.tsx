import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { NProgressBarProvider } from '@/providers/nprogress-bar-provider'
import CookiesConsent from '@/components/cookies-consent';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
        <NProgressBarProvider />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <CookiesConsent />
    </main>
  );
}
