const files = import.meta.glob('../assets/portfolio/*/*.webp', {
    eager: true,
    query: '?url',
    import: 'default',
});

export interface ProjectImage {
    src: string;
    name: string;
}

export const getProjectImages = (projectId: string): ProjectImage[] =>
    Object.entries(files)
        .filter(([path]) => path.includes(`/portfolio/${projectId}/`))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([path, src]) => ({
            src: src as string,
            name: path.split('/').pop()!.replace('.webp', ''),
        }));
