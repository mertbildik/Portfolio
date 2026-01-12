
// Utility to load portfolio images based on project ID matching
// Uses Vite's import.meta.glob for static asset handling

const globbedImages = import.meta.glob('../../Images_portfolio/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

export const getProjectImages = (projectId: string): { src: string; name: string }[] => {
    // Normalize project ID for matching (e.g., 'dog-and-ride' -> 'dogride', 'gala-network' -> 'galanetwork')
    // We strive to match the filename prefixes provided by the user.
    // Filename format: [Prefix]_[Name].png

    const normalizedId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Create a mapping of known manual overrides if normalization fails or is ambiguous
    const prefixOverrides: Record<string, string> = {
        'dog-and-ride': 'dog&ride', // Matches 'Dog&ride_'
    };

    const targetPrefix = prefixOverrides[projectId]
        ? prefixOverrides[projectId].toLowerCase()
        : projectId.toLowerCase().replace(/-/g, ''); // default fallback: remove dashes

    // Filter images
    const matchedImages = Object.keys(globbedImages).filter((path) => {
        // Extract filename from path
        const filename = path.split('/').pop() || '';
        const lowercaseFilename = filename.toLowerCase();

        // Flexible matching:
        // 1. Check if filename starts with the specific override (e.g. 'dog&ride_')
        // 2. Or check if normalized filename starts with normalized id (e.g. 'galanetwork_')

        // We look for [Prefix]_ pattern
        // Valid separators in filenames seem to be '_'

        if (prefixOverrides[projectId]) {
            return lowercaseFilename.startsWith(prefixOverrides[projectId] + '_');
        }

        // Fallback: check if the filename starts with the ID (ignoring case and special chars in ID)
        // For 'GalaNetwork', 'gala-network' -> 'galanetwork'. Filename 'GalaNetwork_'. Normalized 'galanetwork'. Match.
        // For 'Bunect', 'bunect'. Filename 'Bunect_'. Match.
        // For 'Adclusive', 'adclusive'. Filename 'Adclusive_'. Match.

        // Clean filename for comparison (remove extension first)
        const namePart = lowercaseFilename.split('.')[0];
        const normalizedName = namePart.replace(/[^a-z0-9]/g, ''); // 'GalaNetwork_' -> 'galanetwork' (oops, _ goes away)

        // Better: Check start of string match
        // We know the files are [Name]_[Details]
        return lowercaseFilename.startsWith(projectId.replace(/-/g, '') + '_') ||
            lowercaseFilename.startsWith(projectId.replace('and', '&').replace(/-/g, '') + '_') || // catch dog-and-ride -> dog&ride if override failed
            lowercaseFilename.startsWith(projectId + '_'); // basic exact match

    });

    // Sort images:
    matchedImages.sort();

    // Return the URLs with metadata
    return matchedImages.map(path => {
        const filename = path.split('/').pop() || '';
        // Remove prefix (e.g. 'Dog&ride_') and extension
        // We know it matched, so we find the first underscore
        const parts = filename.split('_');
        const roughName = parts.length > 1 ? parts.slice(1).join('_') : filename;
        const cleanName = roughName.split('.')[0];

        return {
            src: globbedImages[path] as string,
            name: cleanName
        };
    });
};
