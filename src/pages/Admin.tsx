// Admin page with simple client-side authentication
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lock, Unlock } from 'lucide-react';
import AdminPanel from '@/components/AdminPanel';

// Simple client-side PIN (NOT SECURE - for demonstration only)
const ADMIN_PIN = '1234';

const Admin = () => {
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
      setError('Incorrect PIN. Please try again.');
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
            <CardTitle className="text-center text-2xl">Admin Access</CardTitle>
            <CardDescription className="text-center">
              Enter the PIN to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6 bg-yellow-50 border-yellow-200">
              <AlertDescription className="text-sm">
                <strong>⚠️ Security Notice:</strong> This is a client-side authentication for demonstration purposes only. 
                It is NOT secure for production use. For production, implement proper server-side authentication 
                with encrypted credentials and session management.
              </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="pin" className="text-sm font-medium mb-2 block">
                  Admin PIN
                </label>
                <Input
                  id="pin"
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter PIN"
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
                Access Admin Panel
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Demo PIN: <code className="bg-muted px-2 py-1 rounded">1234</code>
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Panel</h1>
            <p className="text-muted-foreground">
              Manage services, updates, and site data
            </p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <Lock className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <AlertDescription>
            <strong>ℹ️ Data Storage:</strong> All data is stored in your browser's localStorage. 
            Changes persist across sessions but are limited to this browser. Use the export feature 
            to backup your data, and import to restore or transfer to another browser.
          </AlertDescription>
        </Alert>

        <AdminPanel />
      </div>
    </main>
  );
};

export default Admin;
