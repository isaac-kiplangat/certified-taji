// Import Unsplash and other dependencies
import * as unsplash from 'unsplash-js';

declare global {
  interface Window {
    unsplashWarning?: boolean;
  }
}
// Define your Unsplash API URL
let UNSPLASH_API_URL: string = ''; // INSERT YOUR UNSPLASH PROXY URL HERE

// Create an Unsplash API instance
const unsplashApi = unsplash.createApi({
  apiUrl: UNSPLASH_API_URL,
});

// Define the type for queryData
interface QueryData {
  query?: string;
  page: number;
  perPage: number;
}

// Define the type for asset result
interface AssetResult {
  id: string;
  type: string;
  locale: string;
  label?: string | undefined;
  tags?: string[] | undefined;
  thumbUri: string;
  size: {
    width: number;
    height: number;
  };
  meta: {
    uri: string;
  };
  context: {
    sourceId: string;
  };
  credits?:
    | {
        name: string;
        url: string;
      }
    | undefined;
  utm: {
    source: string;
    medium: string;
  };
}

// Convert the function to TypeScript
export const findUnsplashAssets = async (
  queryData: QueryData,
): Promise<{
  assets: AssetResult[];
  total: number;
  currentPage: number;
  nextPage?: number | undefined;
}> => {
  if (UNSPLASH_API_URL === '' && !window.unsplashWarning) {
    window.unsplashWarning = true;
    alert(`Please provide your Unsplash API url`);
  }

  if (queryData.query) {
    const response = await unsplashApi.search.getPhotos({
      query: queryData.query,
      page: queryData.page,
      perPage: queryData.perPage,
    });
    if (response.type === 'success') {
      const { results, total, total_pages } = response.response;

      return {
        assets: results.map(translateToAssetResult),
        total,
        currentPage: queryData.page,
        nextPage:
          queryData.page + 1 <= total_pages ? queryData.page + 1 : undefined,
      };
    } else if (response.type === 'error') {
      throw new Error(response.errors[0]);
    } else {
      return Promise.resolve({
        assets: [], // Return an empty array of assets
        total: 0, // Return total as 0
        currentPage: queryData.page,
      });
    }
  } else {
    const response = await unsplashApi.photos.list({
      orderBy: undefined,
      page: queryData.page,
      perPage: queryData.perPage,
    });

    if (response.type === 'success') {
      const { results, total } = response.response;
      const totalFetched =
        (queryData.page - 1) * queryData.perPage + results.length;

      const nextPage = totalFetched < total ? queryData.page + 1 : undefined;

      return {
        assets: results.map(translateToAssetResult),
        total,
        currentPage: queryData.page,
        nextPage,
      };
    } else if (response.type === 'error') {
      throw new Error(response.errors[0]);
    } else {
      return Promise.resolve({
        assets: [], // Return an empty array of assets
        total: 0, // Return total as 0
        currentPage: queryData.page,
      });
    }
  }
};

// Define the type for the image object
interface UnsplashImage {
  id: string;
  user?:
    | {
        name: string;
        links: {
          html: string;
        };
      }
    | undefined;
  description?: string | null;
  alt_description?: string | null;
  tags?:
    | {
        title: string;
      }[]
    | undefined;
  urls: {
    thumb: string;
    full: string;
  };
  width: number;
  height: number;
}

// Adjust the translateToAssetResult function
function translateToAssetResult(image: UnsplashImage): AssetResult {
  const artistName = image?.user?.name;
  const artistUrl = image?.user?.links?.html;

  return {
    id: image.id,
    type: 'ly.img.image',
    locale: 'en',
    label: image.description ?? image.alt_description ?? undefined,
    tags: image.tags ? image.tags.map((tag) => tag.title) : undefined,
    thumbUri: image.urls.thumb,
    size: {
      width: image.width,
      height: image.height,
    },
    meta: {
      uri: image.urls.full,
    },
    context: {
      sourceId: 'unsplash',
    },
    credits: artistName
      ? {
          name: artistName,
          url: artistUrl || '',
        }
      : undefined,
    utm: {
      source: 'CE.SDK Demo',
      medium: 'referral',
    },
  };
}

// You can use this TypeScript code in your React component or other TypeScript projects.
