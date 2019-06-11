import { MenuNode, TocItem, Edge } from 'interfaces/nodes';
import { Color, themeProps, Space } from '../components/Theme';

export const getColor = (colorKey: Color) => themeProps.colors[colorKey];

export const getSpacing = (spaceKey: Space) => themeProps.space[spaceKey];

export const getPageById = (sectionList: Edge<MenuNode>[], templateFile?: string) => {
  if (!templateFile) {
    return undefined;
  }

  const sectionItems = sectionList.map(({ node }) => node.items);
  const flattenedSectionItems: TocItem[] = ([] as TocItem[]).concat(...sectionItems);

  return flattenedSectionItems.find(item => item.id === templateFile);
};
