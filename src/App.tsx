import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './components/AboutPage';
import { HomePage } from './components/HomePage';
import { PricingPage } from './components/PricingPage';
import { PrivacyPage } from './components/PrivacyPage';
import { ProductPage } from './components/ProductPage';
import { TermsPage } from './components/TermsPage';
import {
  CANONICAL_ROOT,
  routeMeta,
  routeMetaByPage,
  routeMetaByPath,
} from './routes';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type Page = 'home' | 'product' | 'pricing' | 'about' | 'privacy' | 'terms' | 'signin';

const OG_IMAGE_URL = `${CANONICAL_ROOT}/postaroo-og.png`;
const OG_IMAGE_ALT = 'Postaroo content planning preview';

function pathFromLocation(pathname: string) {
  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  return routeMetaByPath.get(normalized) ?? routeMeta[0];
}

function Seo() {
  const location = useLocation();
  const route = pathFromLocation(location.pathname);

  const canonicalPath = route.path === '/' ? '' : route.path;

  return (
    <Helmet>
      <title>{route.title}</title>
      <meta name="description" content={route.description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={`${CANONICAL_ROOT}${canonicalPath}`} />
      <meta property="og:title" content={route.title} />
      <meta property="og:description" content={route.description} />
      <meta property="og:url" content={`${CANONICAL_ROOT}${canonicalPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Postaroo" />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@postaroo" />
      <meta name="twitter:title" content={route.title} />
      <meta name="twitter:description" content={route.description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: 'Postaroo',
              url: CANONICAL_ROOT,
            },
            {
              '@type': 'SoftwareApplication',
              name: 'Postaroo',
              url: CANONICAL_ROOT,
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'AI-powered social media planning that combines content generation, scheduling, and auto-publishing in one dashboard.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: routeMeta.map((meta, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: meta.label,
                item: `${CANONICAL_ROOT}${meta.path === '/' ? '' : meta.path}`,
              })),
            },
          ],
        })}
      </script>
    </Helmet>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const route = pathFromLocation(location.pathname);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'G-XFY6TP6R8F', {
        page_path: location.pathname + location.search,
        anonymize_ip: true,
      });
    }
  }, [location.pathname, location.search]);

  const handleNavigate = (page: Page) => {
    if (page === 'signin') {
      return navigate('/');
    }
    const metadata = routeMetaByPage.get(page);
    if (metadata) {
      navigate(metadata.path);
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header currentPage={route.page} onNavigate={handleNavigate} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
            <Route path="/product" element={<ProductPage onNavigate={handleNavigate} />} />
            <Route path="/pricing" element={<PricingPage onNavigate={handleNavigate} />} />
            <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Seo />
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  );
}
