// Admin panel for CRUD operations on services and updates
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import {
  getUpdates,
  addUpdate,
  updateUpdate,
  deleteUpdate,
  exportData,
  importData,
  resetToSampleData,
} from '@/utils/localStorage';
import { Plus, Pencil, Trash2, Download, Upload, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const AdminPanel = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [updates, setUpdates] = useState<any[]>([]);
  const [editingUpdate, setEditingUpdate] = useState<any>(null);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setUpdates(getUpdates());
  };

  // Services are now stored in code (src/data/services.ts)
  // No service management handlers needed

  // Update Handlers
  const handleUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updateData = {
      title: formData.get('title') as string,
      date: formData.get('date') as string,
      body: formData.get('body') as string,
    };

    if (editingUpdate) {
      updateUpdate(editingUpdate.id, updateData);
      toast({ title: "Update Modified", description: "Update has been modified successfully." });
    } else {
      addUpdate(updateData);
      toast({ title: "Update Added", description: "New update has been posted successfully." });
    }

    setIsUpdateDialogOpen(false);
    setEditingUpdate(null);
    loadData();
  };

  const handleDeleteUpdate = (id: number) => {
    if (confirm('Are you sure you want to delete this update?')) {
      deleteUpdate(id);
      toast({ title: "Update Deleted", description: "Update has been deleted." });
      loadData();
    }
  };

  // Data Management
  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cosmic-insights-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast({ title: "Data Exported", description: "Backup file has been downloaded." });
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string);
          importData(data);
          loadData();
          toast({ title: "Data Imported", description: "Data has been restored successfully." });
        } catch (error) {
          toast({ 
            title: "Import Failed", 
            description: "Invalid file format.",
            variant: "destructive"
          });
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (confirm('Reset all data to sample data? This cannot be undone.')) {
      resetToSampleData();
      loadData();
      toast({ title: "Data Reset", description: "All data has been reset to sample data." });
    }
  };

  return (
    <div className="space-y-6">
      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.dataManagement')}</CardTitle>
          <CardDescription>
            {t('admin.dataManagementDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button onClick={handleExport} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              {t('admin.exportJSON')}
            </Button>
            <Button variant="outline" asChild>
              <label className="cursor-pointer">
                <Upload className="w-4 h-4 mr-2" />
                {t('admin.importJSON')}
                <input
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={handleImport}
                />
              </label>
            </Button>
            <Button onClick={handleReset} variant="destructive">
              <RefreshCw className="w-4 h-4 mr-2" />
              {t('admin.reset')}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>{t('admin.noteTitle')}</strong> {t('admin.noteText')} <code className="bg-muted px-1 rounded">src/data/services.ts</code> {t('admin.andText')} <code className="bg-muted px-1 rounded">src/data/horoscopes.ts</code> {t('admin.mustBeEdited')}
          </p>
        </CardContent>
      </Card>

      {/* Updates Management */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.manageUpdates')}</CardTitle>
          <CardDescription>
            {t('admin.manageUpdatesDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => {
              setEditingUpdate(null);
              setIsUpdateDialogOpen(true);
            }}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t('admin.addUpdate')}
          </Button>

          <div className="grid gap-4">
            {updates.map((update) => (
              <Card key={update.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{update.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{update.date}</p>
                      <p className="text-sm">{update.body}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingUpdate(update);
                          setIsUpdateDialogOpen(true);
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteUpdate(update.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Update Dialog */}
      <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingUpdate ? t('admin.editUpdate') : t('admin.addNewUpdate')}</DialogTitle>
            <DialogDescription>
              {editingUpdate ? t('admin.updateDetails') : t('admin.postUpdate')}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{t('admin.titleLabel')}</label>
              <Input
                name="title"
                required
                defaultValue={editingUpdate?.title}
                placeholder="Special Diwali Offer"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t('admin.dateLabel')}</label>
              <Input
                name="date"
                type="date"
                required
                defaultValue={editingUpdate?.date}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t('admin.bodyLabel')}</label>
              <Textarea
                name="body"
                rows={5}
                required
                defaultValue={editingUpdate?.body}
                placeholder="Details about the update..."
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                {editingUpdate ? t('admin.updateBtn') : t('admin.postUpdateBtn')}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsUpdateDialogOpen(false);
                  setEditingUpdate(null);
                }}
              >
                {t('admin.cancel')}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;
