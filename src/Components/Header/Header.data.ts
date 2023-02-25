import RoutesString from 'src/Utils/RoutesString';

interface HeaderMenuProps {
  id: string;
  text: string;
  path: string;
}
export const MENUS: HeaderMenuProps[] = [
  { id: 'menu-company', text: 'COMPANY', path: RoutesString.Company },
  { id: 'menu-recuit', text: 'RECRUIT', path: RoutesString.Recruit },
  { id: 'menu-brand', text: 'BRAND', path: RoutesString.Brand },
  { id: 'menu-shop', text: 'SHOP', path: RoutesString.Shop.replace(':id', '8') },
  { id: 'menu-contact', text: 'CONTACT', path: RoutesString.Contact },
];
