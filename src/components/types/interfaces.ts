import { ReactNode } from 'react';
import { TextStyle } from '../styles/TextStyle';
import { BoxDecoration } from '../styles/BoxDecoration';

export interface TextProps {
  content: string;
  style?: TextStyle | React.CSSProperties;
}

export interface ContainerProps {
  children: ReactNode;
  style?: React.CSSProperties;
  padding?: number;
  margin?: number;
  alignment?: 'left' | 'center' | 'right';
  decoration?: BoxDecoration;
  className?: string;
}


export interface LayoutProps {
  children: ReactNode;
  mainAxisAlignment?: 'start' | 'center' | 'end' | 'space-between';
  crossAxisAlignment?: 'start' | 'center' | 'end' | 'stretch';
  spacing?: number;
  style?: React.CSSProperties;
  className?: string;
}

export interface ListViewProps {
  children: ReactNode;
  padding?: number;
  divider?: ReactNode;
}

export interface TextFieldProps {
  hint?: string;
  value: string;
  onChanged: (value: string) => void;
  decoration?: React.CSSProperties;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
}

export interface ButtonProps {
  onPressed: () => void;
  child: ReactNode;
  color?: string;
  disabled?: boolean;
}

export interface IconButtonProps {
  icon: ReactNode;
  onPressed: () => void;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export interface CardProps {
  child: ReactNode;
  elevation?: 0 | 1 | 2 | 3 | 4;
  decoration?: BoxDecoration;
  onTap?: () => void;
}

export interface AlertDialogProps {
  title: string;
  content: ReactNode;
  actions?: ReactNode[];
  isOpen: boolean;
  onClose: () => void;
}

export interface ScaffoldProps {
  appBar?: ReactNode;
  body: ReactNode;
  floatingActionButton?: ReactNode;
  drawer?: ReactNode;
}

export interface AppBarProps {
  title: string;
  leading?: ReactNode;
  actions?: ReactNode[];
  elevation?: 0 | 1 | 2 | 3 | 4;
}

export interface DrawerProps {
  child: ReactNode;
  header?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface ProgressIndicatorProps {
  value?: number;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface LinearProgressProps {
  value?: number;
  color?: string;
  height?: number;
}

export interface BadgeProps {
  child: ReactNode;
  content: ReactNode;
  color?: string;
}

export interface DividerProps {
  height?: number;
  color?: string;
}

export interface ChipProps {
  label: string;
  onDeleted?: () => void;
  color?: string;
  avatar?: ReactNode;
}

export interface TabBarProps {
  tabs: string[];
  selectedIndex: number;
  onTap: (index: number) => void;
  color?: string;
}

export interface TabViewProps {
  children: ReactNode[];
  selectedIndex: number;
}

export interface SwitchProps {
  value: boolean;
  onChanged: (value: boolean) => void;
  activeColor?: string;
  disabled?: boolean;
}

export interface CheckboxProps {
  value: boolean;
  onChanged: (value: boolean) => void;
  label?: ReactNode;
  color?: string;
  disabled?: boolean;
}

export interface RadioProps {
  value: string | number;
  groupValue: string | number;
  onChanged: (value: string | number) => void;
  label?: ReactNode;
  color?: string;
  disabled?: boolean;
}

export interface TooltipProps {
  message: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

interface BottomNavigationBarItem {
  icon: ReactNode;
  label: string;
}

export interface BottomNavigationBarProps {
  items: BottomNavigationBarItem[];
  currentIndex: number;
  onTap: (index: number) => void;
  color?: string;
}

export interface ExpansionPanelProps {
  title: ReactNode;
  children: ReactNode;
  isExpanded: boolean;
  onChanged: (value: boolean) => void;
}

export interface SnackBarProps {
  message: string;
  action?: {
    label: string;
    onPressed: () => void;
  };
  isVisible: boolean;
  onDismiss?: () => void;
}

interface MenuItem {
  label: string;
  onPressed: () => void;
}

export interface MenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

export interface SliderProps {
  value: number;
  onChanged: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  color?: string;
  disabled?: boolean;
}