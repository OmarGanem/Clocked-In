export const slugify = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric characters with hyphens
      .replace(/(^-|-$)/g, '');     // Remove leading or trailing hyphens
  };