import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import PageTitle from '@/components/PageTitle';

type Props = {
  params: {locale: string};
};

export default function About({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('About');
  return <PageTitle>{t('title')}</PageTitle>;
}
