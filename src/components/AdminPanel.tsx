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
  getServices,
  addService,
  updateService,
  deleteService,
  getUpdates,
  addUpdate,
  updateUpdate,
  deleteUpdate,
  getHoroscopes,
  addHoroscope,
  updateHoroscope,
  deleteHoroscope,
  exportData,
  importData,
  resetToSampleData,
} from '@/utils/localStorage';
import { Plus, Pencil, Trash2, Download, Upload, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { HoroscopeAdmin, HoroscopeDialog } from './HoroscopeAdmin';

const AdminPanel = () => {
  const { toast } = useToast();
  const [services, setServices] = useState<any[]>([]);
  const [updates, setUpdates] = useState<any[]>([]);
  const [horoscopes, setHoroscopes] = useState<any[]>([]);
  const [editingService, setEditingService] = useState<any>(null);
  const [editingUpdate, setEditingUpdate] = useState<any>(null);
  const [editingHoroscope, setEditingHoroscope] = useState<any>(null);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [isHoroscopeDialogOpen, setIsHoroscopeDialogOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setServices(getServices());
    setUpdates(getUpdates());
    setHoroscopes(getHoroscopes());
  };

  // Service Handlers
  const handleServiceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const serviceData = {
      title: formData.get('title') as string,
      slug: (formData.get('title') as string).toLowerCase().replace(/\s+/g, '-'),
      tagline: formData.get('tagline') as string,
      icon: formData.get('icon') as string,
      description: formData.get('description') as string,
      price: formData.get('price') as string,
      duration: formData.get('duration') as string,
    };

    if (editingService) {
      updateService(editingService.id, serviceData);
      toast({ title: "Service Updated", description: "Service has been updated successfully." });
    } else {
      addService(serviceData);
      toast({ title: "Service Added", description: "New service has been added successfully." });
    }

    setIsServiceDialogOpen(false);
    setEditingService(null);
    loadData();
  };

  const handleDeleteService = (id: number) => {
    if (confirm('Are you sure you want to delete this service?')) {
      deleteService(id);
      toast({ title: "Service Deleted", description: "Service has been deleted." });
      loadData();
    }
  };

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
          <CardTitle>Data Management</CardTitle>
          <CardDescription>
            Export, import, or reset your data. All changes are stored in browser localStorage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button onClick={handleExport} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export JSON
            </Button>
            <Button variant="outline" asChild>
              <label className="cursor-pointer">
                <Upload className="w-4 h-4 mr-2" />
                Import JSON
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
              Reset to Sample Data
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Note:</strong> This admin panel is client-side only. Data is stored in localStorage 
            and not secure for production use. For a production site, implement server-side authentication 
            and database storage.
          </p>
        </CardContent>
      </Card>

      {/* Services & Updates Tabs */}
      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
        </TabsList>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Services</h3>
            <Button
              onClick={() => {
                setEditingService(null);
                setIsServiceDialogOpen(true);
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Service
            </Button>
          </div>

          <div className="grid gap-4">
            {services.map((service) => (
              <Card key={service.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.tagline}</p>
                      <div className="flex gap-4 mt-2 text-sm">
                        <span>Icon: {service.icon}</span>
                        <span>Price: {service.price}</span>
                        <span>Duration: {service.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingService(service);
                          setIsServiceDialogOpen(true);
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteService(service.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Updates Tab */}
        <TabsContent value="updates" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Updates</h3>
            <Button
              onClick={() => {
                setEditingUpdate(null);
                setIsUpdateDialogOpen(true);
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Update
            </Button>
          </div>

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
        </TabsContent>
      </Tabs>

      {/* Service Dialog */}
      <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
            <DialogDescription>
              {editingService ? 'Update the service details below' : 'Fill in the details for the new service'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleServiceSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Title *</label>
              <Input
                name="title"
                required
                defaultValue={editingService?.title}
                placeholder="Personal Horoscope"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Tagline *</label>
              <Input
                name="tagline"
                required
                defaultValue={editingService?.tagline}
                placeholder="Detailed birth chart reading"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Icon *</label>
              <Input
                name="icon"
                required
                defaultValue={editingService?.icon}
                placeholder="Star (Lucide icon name)"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <Textarea
                name="description"
                rows={4}
                defaultValue={editingService?.description}
                placeholder="Detailed description of the service"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Price</label>
                <Input
                  name="price"
                  defaultValue={editingService?.price}
                  placeholder="₹2,500"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Duration</label>
                <Input
                  name="duration"
                  defaultValue={editingService?.duration}
                  placeholder="60 min"
                />
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                {editingService ? 'Update Service' : 'Add Service'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsServiceDialogOpen(false);
                  setEditingService(null);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Update Dialog */}
      <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingUpdate ? 'Edit Update' : 'Add New Update'}</DialogTitle>
            <DialogDescription>
              {editingUpdate ? 'Update the details below' : 'Post a new update or announcement'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Title *</label>
              <Input
                name="title"
                required
                defaultValue={editingUpdate?.title}
                placeholder="Special Diwali Offer"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Date *</label>
              <Input
                name="date"
                type="date"
                required
                defaultValue={editingUpdate?.date}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Body *</label>
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
                {editingUpdate ? 'Update' : 'Post Update'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsUpdateDialogOpen(false);
                  setEditingUpdate(null);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;
