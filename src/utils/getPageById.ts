import { MenuNode, MenuItem, Edge } from 'interfaces/nodes';

const getPageById = (sectionList: Edge<MenuNode>[], templateFile?: string) => {
  if (!templateFile) {
    return undefined;
  }

  const sectionItems = sectionList.map(({ node }) => node.items);
  const flattenedSectionItems: MenuItem[] = [].concat([], sectionItems as any);

  return flattenedSectionItems.find(item => item.id === templateFile);
};

export default getPageById;
