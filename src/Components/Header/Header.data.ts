import RoutesString from 'src/Utils/RoutesString';

interface HeaderMenuProps {
  id: string;
  text: string;
  path: string;
}
export const MENUS: HeaderMenuProps[] = [
  { id: 'menu-company', text: 'COMPANY', path: RoutesString.Company },
  { id: 'menu-recuit', text: 'COMPANY', path: RoutesString.Recruit },
  { id: 'menu-brand', text: 'COMPANY', path: RoutesString.Brand },
  { id: 'menu-shop', text: 'COMPANY', path: RoutesString.Shop.replace(':id', '8') },
  { id: 'menu-shop', text: 'COMPANY', path: RoutesString.Contact },
];
