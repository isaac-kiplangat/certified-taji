import Airtable, { Attachment, Collaborator } from 'airtable';

// Insert your Airtable API key
let AIRTABLE_API_KEY =
  'patsBmxn0RdakMoAF.6f9f80888fb61441d4abaed2cae53409c6e8edc25882e1973d49ad5cc41fbf66';

let base: Airtable.Base;
if (AIRTABLE_API_KEY !== '') {
  base = new Airtable({
    apiKey: AIRTABLE_API_KEY,
  }).base('appHAZoD6Qj3teOmr');
}

declare global {
  interface Window {
    airtableWarning?: boolean;
  }
}

interface AirtableAsset {
  name:
    | string
    | number
    | boolean
    | Collaborator
    | readonly Collaborator[]
    | readonly string[]
    | readonly Attachment[]
    | undefined; // Allow the 'name' property to be undefined or a string
  image: Airtable.Attachment[];
}

export const queryAirtable = ({
  query,
  perPage,
}: {
  query: string;
  page: number;
  perPage: number;
}) => {
  let records: AirtableAsset[] = [];
  return new Promise<{ results: AirtableAsset[] }>(function (resolve, reject) {
    base('Asset sources')
      .select({
        maxRecords: perPage || 100,
        view: 'Grid view',
        // Poor man's search via Airtable formula
        filterByFormula: query
          ? "AND({Name} != '', SEARCH(LOWER('" + query + "'), LOWER({Name})))"
          : "{Name} != ''",
      })
      .eachPage(
        function page(pageRecords, fetchNextPage) {
          pageRecords.forEach(function (record) {
            const asset: AirtableAsset = {
              name: record.get('Name'),
              image: record.get('Image') as Airtable.Attachment[],
            };
            records = [...records, asset];
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          resolve({ results: records });
        },
      );
  });
};

interface AssetResult {
  id: string;
  type: string;
  locale: string;
  label?: string | undefined;
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
}

export const findAirtableAssets = async (queryData: {
  query: string;
  page: number;
  perPage: number;
}) => {
  if (AIRTABLE_API_KEY === '' && !window.airtableWarning) {
    window.airtableWarning = true;
    alert(`Please provide your Airtable API key.`);
    return;
  }

  const response = await queryAirtable({
    query: queryData.query,
    page: queryData.page,
    perPage: queryData.perPage,
  });
  const { results } = response;

  return {
    assets: results.map(translateToAssetResult),
    // Airtable does not return a total number of assets.
    // With a high number, we force the button to display 'more'
    total: 99999,
    currentPage: 1,
    nextPage: undefined,
  };
};

function translateToAssetResult({
  image,
}: AirtableAsset): AssetResult | undefined {
  if (!image || image.length === 0) {
    return undefined; // Handle the case where image is undefined or an empty array
  }

  const attachment = image[0];
  let label: string | undefined = undefined;

  // Check if the attachment exists
  if (attachment) {
    // Replace 'fieldName' with the actual field name in your Airtable data
    const nameField = attachment.filename;

    // Check if the 'nameField' exists and cast it to a string
    if (typeof nameField === 'string') {
      label = nameField;
    }

    // Check if 'thumbnails' is defined before accessing its properties
    const thumbnails = attachment.thumbnails;
    if (thumbnails) {
      return {
        id: attachment.id,
        type: 'ly.img.image',
        locale: 'en',
        label: label,

        thumbUri: thumbnails.large?.url || '',

        size: {
          width: 0,
          height: 0,
        },

        meta: {
          uri: attachment.url || '',
        },

        context: {
          sourceId: 'airtable',
        },
      };
    }
  }

  return undefined; // Handle the case where attachment or thumbnails are undefined
}
