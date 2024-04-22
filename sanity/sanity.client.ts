import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: 'vcaarauj',
    dataset: 'production',
    apiVersion: "2021-03-25",
    useCdn: false,
};

const client = createClient(config);

export default client;