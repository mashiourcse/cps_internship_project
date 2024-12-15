import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();
import { getAuthToken } from "./services/get-token";


async function fetchData(url: string) {
  const authToken = await getAuthToken();

  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: {
                populate: true,
              },
            },
          },
          "layout.features-section": {
            populate: {
              feature: {
                populate: true,
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalData() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: [
      "header.logoText",
      "header.ctaButton",
      "footer.logoText",
      "footer.socialLink",
    ],
  });

  return await fetchData(url.href);
}

export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  return await fetchData(url.href);
}


export async function getCourses() {
  const url = new URL("/api/courses", baseUrl);
  //url.search = query;
  
  const apiToken = process.env.FRONTEND_BACKEND_API_SECRET;
  
  const response = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getSchedules() {
  const url = new URL("/api/schedules", baseUrl);
  //url.search = query;
  
  const apiToken = process.env.FRONTEND_BACKEND_API_SECRET;
  
  const response = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getUsersNameCodeforces() {
  const url = new URL("/api/users?fields[0]=codeforces&fields[1]=username", baseUrl);
  //url.search = query;
  
  const apiToken = process.env.FRONTEND_BACKEND_API_SECRET;
  
  const response = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getCodeforcesInfo(handle: string): Promise<number | null> {
  const url = `https://codeforces.com/api/user.info?handles=${handle}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    if (data?.status !== "OK" || !Array.isArray(data.result) || data.result.length === 0) {
      throw new Error(`Invalid response from API for handle: ${handle}`);
    }

    return data.result[0].maxRating || null;
  } catch (error) {
    // Type guard for error
    if (error instanceof Error) {
      console.error(`Error fetching Codeforces info: ${error.message}`);
    } else {
      console.error(`Unknown error occurred: ${error}`);
    }
    return null; // Return null in case of an error
  }
}



export async function getSummaries(queryString: string, currentPage: number) {
  const PAGE_SIZE = 4;

  const query = qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
      $or: [
        { title: { $containsi: queryString } },
        { summary: { $containsi: queryString } },
      ],
    },
    pagination: {
      pageSize: PAGE_SIZE,
      page: currentPage,
    },
  });
  const url = new URL("/api/courses", baseUrl);
  url.search = query;
  return fetchData(url.href);
}

export async function getSummaryById(summaryId: string) {
  return fetchData(`${baseUrl}/api/summaries/${summaryId}`);
}