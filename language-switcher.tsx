import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next-intl/client';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'sv' ? 'en' : 'sv';
    router.push(`/${newLocale}${pathname}`);
  };

  return (
    <Button onClick={toggleLocale}>
      {locale === 'sv' ? t('switch_to_en') : t('switch_to_sv')}
    </Button>
  );
}


