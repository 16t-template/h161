import React from 'react';
import { BookOpen, CheckSquare, GraduationCap, Wallet } from 'lucide-react';

export type EventModuleType = 'note' | 'task' | 'learning' | 'cash';

export interface ModuleTabSwitcherProps {
  activeModule: EventModuleType;
  onChangeModule: (module: EventModuleType) => void;
}

export const MODULE_TABS: {
  id: EventModuleType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}[] = [
  { id: 'note', label: 'Ghi chú', icon: BookOpen, color: 'text-purple-500' },
  { id: 'task', label: 'Công việc', icon: CheckSquare, color: 'text-blue-500' },
  { id: 'learning', label: 'Học hỏi', icon: GraduationCap, color: 'text-indigo-500' },
  { id: 'cash', label: 'Thu / Chi', icon: Wallet, color: 'text-emerald-500' },
];

export const ModuleTabSwitcher: React.FC<ModuleTabSwitcherProps> = ({
  activeModule,
  onChangeModule,
}) => {
  return (
    <div className="flex items-center gap-1 p-0.5 sm:p-1 bg-muted/60 rounded-xl border border-border/60 shrink-0">
      {MODULE_TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeModule === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChangeModule(tab.id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isActive
                ? 'bg-background text-foreground shadow-2xs font-bold border border-border/80'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? tab.color : 'text-muted-foreground'}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
