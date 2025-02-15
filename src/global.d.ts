declare global {
    interface Planet {
        name: string,
        overview: {
            content: string,
            source: string
        },
        structure: {
            content: string,
            source: string
        },
        geology: {
            content: string,
            source: string
        },
        rotation: string,
        revolution: string,
        radius: string,
        temperature: string,
        images: {
            overview: string,
            structure: string,
            geology: string
        }
        [key: string]: any;

    }
}
export { }