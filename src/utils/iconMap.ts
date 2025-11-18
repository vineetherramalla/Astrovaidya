// Icon mapping utility for dynamic icon rendering
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Map of icon names to Lucide icon components
export const getIcon = (iconName: string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    Star: LucideIcons.Star,
    Heart: LucideIcons.Heart,
    Briefcase: LucideIcons.Briefcase,
    Home: LucideIcons.Home,
    Gem: LucideIcons.Gem,
    Calendar: LucideIcons.Calendar,
    Phone: LucideIcons.Phone,
    Mail: LucideIcons.Mail,
    Clock: LucideIcons.Clock,
    IndianRupee: LucideIcons.IndianRupee,
    Menu: LucideIcons.Menu,
    X: LucideIcons.X,
    ChevronRight: LucideIcons.ChevronRight,
    Sparkles: LucideIcons.Sparkles,
    Moon: LucideIcons.Moon,
    Sun: LucideIcons.Sun,
    MapPin: LucideIcons.MapPin,
    Facebook: LucideIcons.Facebook,
    Instagram: LucideIcons.Instagram,
    Twitter: LucideIcons.Twitter,
    Youtube: LucideIcons.Youtube,
    Download: LucideIcons.Download,
    Upload: LucideIcons.Upload,
    Plus: LucideIcons.Plus,
    Pencil: LucideIcons.Pencil,
    Trash2: LucideIcons.Trash2,
    Save: LucideIcons.Save,
    Lock: LucideIcons.Lock,
    Unlock: LucideIcons.Unlock,
  };

  return icons[iconName] || LucideIcons.Star;
};
