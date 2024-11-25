import {QueryClient} from '@tanstack/react-query';

// const queryConfig: DefaultOptions = {
//   queries: {
//     useErrorBoundary: false,
//     refetchOnWindowFocus: true,
//     retry(failureCount, error: any) {
//       if (error.status === 404) return false;
//       else if (failureCount < 2) return true;
//       else return false;
//     },
//     staleTime: 300000, // 5 minutes - Adjust for your application's needs.
//     cacheTime: 3600000, // 1 hour - Adjust for your application's needs.
//   },
// };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry(failureCount, error: any) {
        if (error.status === 404) {
          return false;
        } else if (failureCount < 2) {
          return true;
        } else {
          return false;
        }
      },
      staleTime: 1000 * 60 * 5, // 5 minutes - Adjust for your application's needs.
    },
  },
});
