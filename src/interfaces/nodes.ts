export interface MenuItem {
  id: string;
  slug: string;
  title: string;
}

export interface MenuNode {
  id: string;
  category: string;
  items: MenuItem[];
}
