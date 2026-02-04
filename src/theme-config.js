// ===== Theme Configuration =====
// Switch between different design themes by changing the activeTheme value
// Available themes:
//   - 'theme-1' : Maroon & Gold (Dark, Traditional Indian)
//   - 'theme-2' : Cream & Terracotta (Light, Earthy, Natural)
//   - 'theme-3' : Deep Blue & Gold (Coming soon)

export const activeTheme = 'theme-2';

// Theme metadata for reference
export const themes = {
    'theme-1': {
        name: 'Maroon & Gold',
        description: 'Dark theme with traditional Indian maroon and gold colors',
        file: './themes/theme-1-maroon-gold.css'
    },
    'theme-2': {
        name: 'Cream & Terracotta',
        description: 'Light theme with warm cream background and terracotta accents',
        file: './themes/theme-2-cream-terracotta.css'
    },
    'theme-3': {
        name: 'Deep Blue & Gold',
        description: 'Royal theme with deep navy blue and gold (Coming soon)',
        file: './themes/theme-3-blue-gold.css'
    }
};
