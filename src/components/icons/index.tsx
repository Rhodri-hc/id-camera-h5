import React, { useMemo } from 'react';
import { IconProps } from '@/components/icons/config';
import AllIcons from './config';
type TName = keyof typeof AllIcons;
interface IconsProps extends IconProps {
  name: TName;
  onClick: () => void;
}
const Index: React.FC<IconsProps> = ({ name, className, onClick, ...rest }) => {
  const Com = useMemo(() => AllIcons[name], [name]);

  return (
    <div className={className} onClick={onClick}>
      {React.cloneElement(<Com />, rest)}
    </div>
  );
};
export default Index;
