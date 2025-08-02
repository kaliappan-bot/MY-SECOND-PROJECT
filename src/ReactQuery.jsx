import React from "react";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ReactQuery1 from "./ReactQuery1";
const ReactQuery = () => {
    const queryClient= new QueryClient();
    return  (
        <QueryClientProvider client={queryClient}>
            <ReactQuery1 />
        </QueryClientProvider>
    );
};
export default ReactQuery;