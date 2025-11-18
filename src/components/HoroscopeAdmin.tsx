import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export const HoroscopeAdmin = ({ horoscopes, onAdd, onEdit, onDelete }: any) => {
  return (
    <div className="space-y-4">
      {horoscopes.map((h: any) => (
        <div key={h.id} className="flex justify-between items-center p-4 border rounded">
          <div>
            <h4 className="font-medium">{h.title} ({h.period})</h4>
            <p className="text-sm text-muted-foreground">{h.date}</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => onEdit(h)}>
              <Pencil className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="destructive" onClick={() => onDelete(h.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
      <Button onClick={() => onAdd()} className="w-full">
        <Plus className="w-4 h-4 mr-2" /> Add Horoscope
      </Button>
    </div>
  );
};

export const HoroscopeDialog = ({ open, onClose, horoscope, onSubmit }: any) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>{horoscope ? 'Edit' : 'Add'} Horoscope</DialogTitle>
      </DialogHeader>
      <form onSubmit={onSubmit} className="space-y-4">
        <Select name="period" defaultValue={horoscope?.period || 'daily'} required>
          <SelectTrigger>
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
        <Input name="title" placeholder="Title (English)" defaultValue={horoscope?.title} required />
        <Input name="titleTe" placeholder="Title (Telugu)" defaultValue={horoscope?.titleTe} required />
        <Input name="date" type="date" defaultValue={horoscope?.date} required />
        <Textarea name="content" placeholder="Content (English)" defaultValue={horoscope?.content} rows={6} required />
        <Textarea name="contentTe" placeholder="Content (Telugu)" defaultValue={horoscope?.contentTe} rows={6} required />
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
);
