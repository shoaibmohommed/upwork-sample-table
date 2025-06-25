export const getActiveLinkClass = (itemPath: string, currentPath: string) => {
    return itemPath === currentPath ? 'active-link' : 'inactive-link';
};
