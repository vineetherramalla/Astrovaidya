// Admin page with simple client-side authentication
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lock, Unlock } from 'lucide-react';
import AdminPanel from '@/components/AdminPanel';

// Simple client-side PIN (NOT SECURE - for demonstration only)
const ADMIN_PIN = '1234';

const Admin = () => {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      setError('');
    } else {
      setError(t('admin.incorrectPIN'));
      setPin('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
    setPin('');
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen py-24 md:py-32 flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-astrology-teal/10 rounded-full">
                <Lock className="w-8 h-8 text-astrology-teal" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl">{t('admin.accessTitle')}</CardTitle>
            <CardDescription className="text-center">
              {t('admin.accessSubtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6 bg-yellow-50 border-yellow-200">
              <AlertDescription className="text-sm">
                <strong>⚠️ {t('admin.securityNotice')}</strong> {t('admin.securityText')}
              </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="pin" className="text-sm font-medium mb-2 block">
                  {t('admin.adminPIN')}
                </label>
                <Input
                  id="pin"
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder={t('admin.enterPIN')}
                  maxLength={4}
                  autoComplete="off"
                  className="text-center text-2xl tracking-widest"
                />
                {error && (
                  <p className="text-sm text-destructive mt-2">{error}</p>
                )}
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Unlock className="w-4 h-4 mr-2" />
                {t('admin.accessPanel')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                {t('admin.demoPin')} <code className="bg-muted px-2 py-1 rounded">1234</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('admin.title')}</h1>
            <p className="text-muted-foreground">
              {t('admin.subtitle')}
            </p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <Lock className="w-4 h-4 mr-2" />
            {t('admin.logout')}
          </Button>
        </div>

        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <AlertDescription>
            <strong>ℹ️ {t('admin.dataStorage')}</strong> {t('admin.dataStorageText')} <code className="bg-muted px-1 rounded">src/data/services.ts</code> {t('admin.andText')} <code className="bg-muted px-1 rounded">src/data/horoscopes.ts</code>.
          </AlertDescription>
        </Alert>

        <AdminPanel />
      </div>
    </main>
  );
};

export default Admin;
