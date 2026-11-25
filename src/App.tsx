import { useCallback, useEffect, useState } from 'react';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { COLLECTIONS } from './data/catalog';
import { CategoryPage } from './pages/CategoryPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CollectionSlug, EnquiryContext, PageRoute } from './types/catalog';

function parseHash(): PageRoute {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (!raw || raw === 'home') {
    return { page: 'home' };
  }
  if (raw === 'wholesale' || raw === 'wholesale-section') {
    return { page: 'home', section: 'wholesale' };
  }
  if (raw === 'our-story') {
    return { page: 'home', section: 'our-story' };
  }
  if (raw === 'contact') {
    return { page: 'home', section: 'contact' };
  }
  if (raw === 'collections') {
    return { page: 'collections' };
  }
  if (raw.startsWith('category/')) {
    const slug = raw.replace('category/', '') as CollectionSlug;
    if (COLLECTIONS.some((c) => c.slug === slug)) {
      return { page: 'category', slug };
    }
    return { page: 'collections' };
  }
  if (raw.startsWith('product/')) {
    const code = raw.replace('product/', '');
    return { page: 'product', code };
  }
  return { page: 'home' };
}

function serializeRoute(route: PageRoute): string {
  switch (route.page) {
    case 'home':
      return route.section ? `#${route.section}` : '#home';
    case 'collections':
      return '#collections';
    case 'category':
      return `#category/${route.slug}`;
    case 'product':
      return `#product/${route.code}`;
  }
}

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() => parseHash());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [enquiryContext, setEnquiryContext] = useState<EnquiryContext>({
    articleName: 'General Wholesale Collection',
  });

  const scrollToSection = useCallback((section?: string) => {
    if (!section) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetId =
      section === 'wholesale' ? 'wholesale-section' : section;
    requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  const handleNavigate = useCallback(
    (nextRoute: PageRoute) => {
      setRoute(nextRoute);
      const nextHash = serializeRoute(nextRoute);
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash);
      }

      if (nextRoute.page === 'home' && nextRoute.section) {
        setTimeout(() => scrollToSection(nextRoute.section), 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [scrollToSection]
  );

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash();
      setRoute(parsed);
      if (parsed.page === 'home' && parsed.section) {
        setTimeout(() => scrollToSection(parsed.section), 60);
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [scrollToSection]);

  const handleOpenEnquire = useCallback(
    (articleName = 'General Wholesale Collection', articleCode?: string) => {
      setEnquiryContext({ articleName, articleCode });
      setDrawerOpen(true);
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header
        route={route}
        onNavigate={handleNavigate}
        onOpenEnquire={() => handleOpenEnquire()}
      />

      <main className="w-full pt-20 bg-surface flex-1">
        {route.page === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquire={handleOpenEnquire}
          />
        )}
        {route.page === 'collections' && (
          <CollectionsPage
            onNavigate={handleNavigate}
            onOpenEnquire={handleOpenEnquire}
          />
        )}
        {route.page === 'category' && (
          <CategoryPage
            slug={route.slug}
            onNavigate={handleNavigate}
            onOpenEnquire={handleOpenEnquire}
          />
        )}
        {route.page === 'product' && (
          <ProductDetailPage
            code={route.code}
            onNavigate={handleNavigate}
            onOpenEnquire={handleOpenEnquire}
          />
        )}
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenEnquire={() => handleOpenEnquire()}
      />

      <EnquiryDrawer
        open={drawerOpen}
        context={enquiryContext}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
