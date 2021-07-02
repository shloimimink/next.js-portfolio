import {
    createClient,
    createImageUrlBuilder,
    createPortableTextComponent,
} from "next-sanity";

const config = {
    projectId: "ov4k7gfl",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
});
